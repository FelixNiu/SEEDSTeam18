const mongoose = require("mongoose");
const Quote = mongoose.model("quotes");

module.exports = (app) => {
  app.get(`/quotes/get`, async (req, res) => {
    try {
      const quotes = await Quote.find({});
      return res.send(quotes);
    } catch (error) {
      return res.send(error);
    }
  });

  app.post(`/quotes/post`, async (req, res) => {
    try {
      const quotePosted = new Quote({
        quote: req.body.quote,
        author: req.body.author,
      });
      await quotePosted.save();
      console.log("win", quotePosted);
      return res.send(quotePosted);
    } catch (error) {
      console.log("hey", error);
      return res.send(error);
    }
  });
};
