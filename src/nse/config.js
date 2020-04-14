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
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "en-US,en;q=0.9",
  "Cache-Control": "max-age=0",
  Connection: "keep-alive",
  Host: "www1.nseindia.com",
  Referer: "https://www.nseindia.com",
  "x-requested-with": "XMLHttpRequest",
  "Sec-Fetch-Dest": 'document',
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": 1,
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"
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
