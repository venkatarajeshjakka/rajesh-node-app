var express = require('express');
var cors = require('cors');
var bodyParser =require('body-parser');
var API = require('indian-stock-exchange');
const NSE = require('sharewatch').NSE;
const BSE = require('sharewatch').BSE;
var app = new express();
app.use(cors());

const admin = require('./node_modules/firebase-admin');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');
const data = require("./sectorList.json");

const collectionKey = "sectorList"; //name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL
});

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);


var urlencodedParser=bodyParser.urlencoded({extended : false});

app.get('/insert-json', function(req,res)
{
    if (data) {
        data.forEach(docKey => {
         firestore.collection(collectionKey).doc().set(docKey).then((res) => {
            console.log("Document " + docKey + " successfully written!");
        }).catch((error) => {
           console.error("Error writing document: ", error);
        });
        });
        }

    res.json({"data":'success'})

});
 
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

app.get('/api/get-quote-info',function(req,res)
{
     NSE.quote('IBULHSGFIN').then((result) =>
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