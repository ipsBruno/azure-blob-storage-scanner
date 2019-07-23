# scanner-azure-blob-storage


Isso é uma ferramenta em NodeJS pra fazer scanner em Storage da Azure de sites na internet

Tendo uma lista válida de sites, basta iniciar o scanner e ele irá retornar sites com o storage em aberto. 

**Leia isso:**
https://www.exfiltrated.com/research/HackingTheClouds.pdf


## Como rodar a ferramenta?

**sitesCheckout.log** irá ter os sites para verificar (já deixei os sites top da Alexa)<br/>
**sitesInicio.log** irá ter uma lista de fuzzers pra colocar no inicio do nosso brute force<br/>
**sitesFinal.log** irá ter uma lista de fuzzers pra colocar no final do nosso brute force<br/>
**subdomais.log** terá uma lista de subdomínios pra acrescentar em nosso bruteforce<br/>
<br/><br/>
Apenas dê **node index.js** após instalar as bibliotecas necessárias

Vão ser gerado 1 arquivo findUris.log

O **findUri** é a lista real de buckets encontrados


## Name Servers

Ao contrário do meu outro scanner para S3 Amazon AWS este aqui não precisa de proxy porque precisamos apenas verificar se o domínio existe com o DNS Server

Tornando o scanner muito mais rápido e eficaz.




## Contato

Meu e-mail pra contato é email@brunodasilva.com, atualmente trabalho com consultoria e sou pesquisador da área de segurança da informação.

Obrigado
