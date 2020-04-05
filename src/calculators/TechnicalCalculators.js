const _ = require("underscore");
const loadash = require("lodash");

const trendyways = require("trendyways");


const RSICalculator = (data) => {
  var formatted = _.map(data, item => {
    return {
      c: item.close
    };
  });
  
 console.log('formatted',formatted)
  var result = trendyways.rsi(loadash.reverse(formatted),14);
  console.log(result)
  var resultreverse=  loadash.reverse(result);
  var firstValue = loadash.head(resultreverse);

  return firstValue.rsi;
};

const MCDA = (data) =>{

}

module.exports = { RSICalculator,MCDA };
