const liveMarket = "/live_market/dynaContent";
const product = "/products/dynaContent/equities/equities/json";
const get_quote_url = `${liveMarket}/live_watch/get_quote/GetQuote.jsp?`;
const stocks_csv_url = "/content/equities/EQUITY_L.csv";
const top_gainer_url = `${liveMarket}/live_analysis/gainers/niftyGainers1.json`;
const top_loser_url = `${liveMarket}/live_analysis/losers/niftyLosers1.json`;
const advances_declines_url = "/common/json/indicesAdvanceDeclines.json";
const index_url = "/homepage/Indices1.json";
const bhavcopy_base_url =
  "/content/historical/EQUITIES/%s/%s/cm%s%s%sbhav.csv.zip";
const bhavcopy_base_filename = "cm%s%s%sbhav.csv";
const active_equity_monthly_url = `${product}/mostActiveMonthly.json`;
const year_high_url = `${product}/online52NewHigh.json`;
const year_low_url = `${product}/online52NewLow.json`;
const preopen_nifty_url = `${liveMarket}/live_analysis/pre_open/nifty.json`;

const headers = {
  Accept: "*/*",
  "Accept-Language": "en-US,en;q=0.5",
  "Accept-Encoding": "gzip, deflate, br",
  Host: "www1.nseindia.com",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
  Connection: "keep-alive",
  Referer: "https://www.nseindia.com",
  "x-requested-with": "XMLHttpRequest"

};

module.exports = {
  get_quote_url,
  stocks_csv_url,
  top_gainer_url,
  top_loser_url,
  advances_declines_url,
  index_url,
  bhavcopy_base_url,
  bhavcopy_base_filename,
  active_equity_monthly_url,
  year_high_url,
  year_low_url,
  preopen_nifty_url,
  headers
};
