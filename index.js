const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');

console.log(`Bem vindo ao conversor`)

async function conversor (){
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const moedaInicial = readlineSync.question('Qual a moeda inicial? ') ||'dolar'
    const moedaFinal = readlineSync.question('Qual a moeda final? ') || 'real'
    await page.goto(`https://www.google.com/search?channel=fs&client=ubuntu&q=${moedaInicial}+para+${moedaFinal}`);

    // pega o valor do input
    const valorFinal = await page.evaluate(() => {
            return  document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
          });
   /*  await page.screenshot({path: 'example.png'}); */

   console.log(`O valor de 1 ${moedaInicial} em ${moedaFinal} é de: ${valorFinal}`)
    
    await browser.close(); 
}

conversor()