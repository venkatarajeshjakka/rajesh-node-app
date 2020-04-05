const axios = require("./api").instance;
const config = require("./config");
const csvjson = require("csvjson");

const topGainer = async () => {
  console.log(config.top_gainer_url);
  var response = await axios.get(config.top_gainer_url);
  console.log(response);
  if (response) return response.data;
};

const topLosers = async () => {
  var response = await axios.get(config.top_loser_url);
  if (response) return response.data;
};

const monthlyActive = async () => {
  var response = await axios.get(config.active_equity_monthly_url);
  if (response) return response.data;
};

const yearHigh = async () => {
  var response = await axios.get(config.year_high_url);
  if (response) return response.data;
};

const yearLow = async () => {
  var response = await axios.get(config.year_low_url);
  if (response) return response.data;
};
const equityList = async () => {
  console.log("called happened");
  console.log(config.stocks_csv_url);
  var response = await axios.get(config.stocks_csv_url);

  if (response.data) {
    var options = {
      headers:
        "symbol,symbolName,series,dataOfListing,paidUpValue,marketLot,isinNumber,faceValue"
    };
    let json = csvjson.toObject(response.data, options);

    return json;
  }
};

module.exports = {
  topGainer,
  equityList,
  topLosers,
  monthlyActive,
  yearHigh,
  yearLow
};
