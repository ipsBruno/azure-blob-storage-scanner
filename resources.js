/*
 ___________  _________________ _   _ _   _ _____ 
|_   _| ___ \/  ___| ___ \ ___ \ | | | \ | |  _  |
  | | | |_/ /\ `--.| |_/ / |_/ / | | |  \| | | | |
  | | |  __/  `--. \ ___ \    /| | | | . ` | | | |
 _| |_| |    /\__/ / |_/ / |\ \| |_| | |\  \ \_/ /
 \___/\_|    \____/\____/\_| \_|\___/\_| \_/\___/ 
 
 Tool: azure-blob-scanner-resources
 Date: 23/07/2019
 */
var fs = require('fs');
var request = require('request');

var sites = fs.readFileSync('findUris.log').toString().split('\n');
var blobList = fs.readFileSync('bloblist.txt').toString().split('\n');



var curTHREADS = 0
var curCHECK = -1

var maxConcurrentConnection = 50
var currentConnection = 0
var checkeds = 0

var sitesEx = []
var more = sites.length;



var totalScan = sites.length * ((blobList.length) + 1);
console.log("Vamos scanear: ", totalScan, " sites");
setInterval(function () {
	while (curTHREADS < 1000) {
		if (sites.length == curCHECK + 1) {
			return true;
		}
		curCHECK++;

		check(sites[curCHECK]);
	}
}, 1000);

function check(name) {
	curTHREADS++;
	var array = fuzzer(name);
	requestArray(array, 0)
}

function requestArray(array, i) {
	if (currentConnection < maxConcurrentConnection && array.length > i) {
		checkS3(array[i])
		if (array.length > i) {
			return setTimeout(requestArray, 10, array, i + 1);
		}
	}
	if (array.length > i) {
		return setTimeout(requestArray, 10, array, i);
	}
	return curTHREADS--;
}

function checkS3(name) {
	checkeds++

	var url = 'https://' + name.trim().toString();
	currentConnection++
	request({
		timeout: 5000,
		method: 'HEAD',
		url: url,
		headers: {
			'User-Agent': 'Mozilla/5.0'
		}
	}, function (error, response, body) {
		currentConnection--
		console.log("(" + checkeds + "/" + totalScan + ") Requesting " + (response ? response.statusCode : 400) + ": " + url)
		if (response && response.statusCode == 200) {
			success(name)
		}
	})



}

function sucess(name) {
	fs.appendFileSync('findResources.log', name + '\r\n');
}


// Aqui farei fuzzer do subsolo no inicio e no fim
function fuzzer(uri) {
	var blocks = []
	for (var i in blobList) {
		blocks.push(uri.trim() + "/" + blobList[i].trim() + "/?comp=list")
	}
	return blocks
}
