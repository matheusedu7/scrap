const sendEmail = require('./emailer'); // Importa a função para envio de e-mail
const scrapeData = require('./scraper'); // Importa a função de scraping

(async () => {
  try {
    console.log('Iniciando o processo de scraping...');
    const scrapedData = await scrapeData();
    console.log('Scraping concluído.');

    console.log('Enviando os dados coletados por e-mail...');
    const subject = 'Dados Scrapados do Hacker News';
    const body = scrapedData;

    await sendEmail(subject, body);
    console.log('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro no processo:', error.message);
  }
})();
