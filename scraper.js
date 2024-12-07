const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const scrapeData = async () => {
  try {
    const url = process.env.SCRAP_URL; // URL do site a ser scrapado
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Seleciona os títulos das notícias
    const titles = [];
    $('a.storylink').each((_, element) => {
      titles.push($(element).text().trim());
    });

    return titles.length
      ? `Títulos coletados:\n\n${titles.join('\n')}`
      : 'Nenhum título encontrado.';
  } catch (error) {
    console.error('Erro no scraping:', error.message);
    return 'Erro ao realizar o scraping.';
  }
};

module.exports = scrapeData;
