const quotes = require("inspirational-quotes")

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({text: `Quote of the day: "${quotes.getQuote().text}"`})
  }
}
