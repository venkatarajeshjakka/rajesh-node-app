var express = require('express');
var cors = require('cors');
var bodyParser =require('body-parser');
var API = require('indian-stock-exchange');
const NSE = require('sharewatch').NSE;
const BSE = require('sharewatch').BSE;
var app = new express();
app.use(cors());

app.use(bodyParser.urlencoded({extended : false}));

var NSEAPI = API.NSE;


app.get('/get-nse-stocks',function(req, res) {
    NSE.equityList()
    .then((result) => {
        
        res.json(result);
    })
    .catch((err) => {
        // handle error
    })
} );

//To get quote info with stock code
app.get('/api/get-quote-info',function(req,res)
{
    const quoteName = req.query.stockCode || 'IBULHSGFIN';
     NSE.quote(quoteName).then((result) =>
     {
         res.json(result);
     }).catch((err) =>
     {
         console.log('some error in fetching');
     });

});

app.get('/api/get-peer-comparison',function(req,res)
{
    BSE.quoteWithComparison('500209').then((result) =>
     {
         res.json(result);
     }).catch((err) =>
     {
         console.log('some error in fetching');
     });

});

app.get('/api/nse-indicies',function(req,res)
{
    NSE.indices().then((result) =>
     {
         res.json(result);
     }).catch((err) =>
     {
         console.log('some error in fetching');
     });

});

app.get('/api/get52WeekHigh',function(req,res)
{
    NSEAPI.get52WeekHigh()
    .then(function (response) { 
   
   res.json(response.data);
    });

});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });