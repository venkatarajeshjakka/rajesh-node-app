var express = require('express');
var cors = require('cors');
var bodyParser =require('body-parser');

var app = new express();
app.use(cors());

app.use(bodyParser.urlencoded({extended : false}));
var yahooFinance = require('yahoo-finance');

app.get('/api/get-nse-stocks', async (req, res) => {
    const quoteName = req.query.stockCode || 'IBULHSGFIN.NS';

    var stockCodeArray = quoteName.split(',');
  try{
    
    await yahooFinance.quote({
    symbols: stockCodeArray,
    modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
        },  (err, quotes) => {
        res.json(quotes);
    // ...
    }); 
    }catch(err)
  {
      return res.status(422).send(err.message);
  }
     
} );

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });