var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var moment = require("moment");
var nseData = require("./src/nse/data");
var app = new express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var yahooFinance = require("yahoo-finance");

app.get("/api/get-nse-stocks", async (req, res) => {
  const quoteName = req.query.stockCode || "IBULHSGFIN.NS";

  var stockCodeArray = quoteName.split(",");
  try {
    await yahooFinance.quote(
      {
        symbols: stockCodeArray,
        modules: [
          "price",
          "summaryDetail",
          "summaryProfile",
          "financialData",
          "earnings",
          "defaultKeyStatistics"
        ] // see the docs for the full list
      },
      (err, quotes) => {
        res.json(quotes);
        // ...
      }
    );
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

app.get("/api/get-nse-stocks-price", async (req, res) => {
  const quoteName = req.query.stockCode || "IBULHSGFIN.NS";

  var stockCodeArray = quoteName.split(",");
  try {
    await yahooFinance.quote(
      {
        symbols: stockCodeArray,
        modules: ["price"] // see the docs for the full list
      },
      (err, quotes) => {
        res.json(quotes);
        // ...
      }
    );
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

app.get("/api/top-gainers", async (req, res) => {
  try {
    var response = await nseData.topGainer();

    return res.status(200).json(response);
  } catch (err) {
    return res.status(422).send(err);
  }
});

app.get("/api/equity-list", async (req, res) => {
  var response = await nseData.equityList();

  return res.status(200).json(response);
});

app.get("/api/year-high", async (req, res) => {
  var response = await nseData.yearHigh();

  return res.status(200).json(response);
});

app.get("/api/year-low", async (req, res) => {
  var response = await nseData.yearLow();

  return res.status(200).json(response);
});

app.get("/api/top-losers", async (req, res) => {
  var response = await nseData.topLosers();

  return res.status(200).json(response);
});

app.get("/api/monthly-active", async (req, res) => {
  var response = await nseData.monthlyActive();

  return res.status(200).json(response);
});

app.post("/api/nse-historical-data", async (req, res) => {
  const quote = req.body.stockCode;
  const noOfMonths = req.body.months;

  var months = Number(noOfMonths);
  if (months === "NaN") {
    console.log("Invalid data");
    return res.status(422).send("Invalid date");
  } else {
    var todayDate = moment().format("YYYY-MM-DD");
    var fromDate = moment()
      .add(-months, "M")
      .format("YYYY-MM-DD");

    try {
      await yahooFinance.historical(
        {
          symbol: quote,
          from: fromDate,
          to: todayDate,
          period: "d"
        },
        (err, quotes) => {
          res.json(quotes);
          // ...
        }
      );
    } catch (err) {
      return res.status(422).send(err.message);
    }
  }
});

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
