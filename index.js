const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")

const app = express()
const PORT = 8900

const url = 'https://e78.us/collections/yonex-racket'


axios(url)
  .then(res => {
    const html = res.data
    const $ = cheerio.load(html)
    const articles = []

    console.log($)

    $('.product-title', html).each(()=> {
      const title = $(this).text()
      const url = $(this).find('a').attr('href')
      // console.log()
      articles.push({
        title: title,
        url: url,
      })
    })
    console.log(articles)
  }) .catch(err => console.log(err))

app.listen(PORT, () => console.log('listening on port ', PORT))