const quotes = require("inspirational-quotes")

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({text: quotes.getQuote().text})
  }
}