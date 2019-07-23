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
<br>
<br>
Vai ser gerado 1 arquivo findUris.log
<br><br>
O **findUri.log** é a lista real de buckets encontrados
<br>
<br>
Após isso, também coloquei uma ferramenta pra escanear os resources desses buckets, afim de encontrar resources abertos. Tendo já sua lista findUri.log em mãos, rode  **node resources.js**
<br>
Ele irá procurar por resources abertos dentro da nossa **lista findUri.log**
<br>
Sua lista final será: **findResources.log** ali conterá todos arquivos abertos que foram encotrados no Windows Azure 
<br><br>
:)

<br><br><br>
## Name Servers

Ao contrário do meu outro scanner para S3 Amazon AWS este aqui não precisa de proxy porque precisamos apenas verificar se o domínio existe com o DNS Server

Tornando o scanner muito mais rápido e eficaz: Pra ter uma noção em 10 minutos deu pra fazer scanner em mais de 70 mil domínios diferentes.




## Contato

Meu e-mail pra contato é email@brunodasilva.com, atualmente trabalho com consultoria e sou pesquisador da área de segurança da informação.

Obrigado
