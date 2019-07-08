var express = require('express');
var cors = require('cors');
var bodyParser =require('body-parser');

var app = new express();
app.use(cors());

app.use(bodyParser.urlencoded({extended : false}));
var yahooFinance = require('yahoo-finance');

app.get('/api/get-nse-stocks',function(req, res) {
    const quoteName = req.query.stockCode || 'IBULHSGFIN.NS';

    var stockCodeArray = quoteName.split(',');

    yahooFinance.quote({
        symbols: stockCodeArray,
        modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
      }, function (err, quotes) {
        res.json(quotes);
        // ...
      });  
} );

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });