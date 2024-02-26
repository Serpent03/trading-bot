import Binance from "node-binance-api";
import { trader } from "./trade.mjs";
import { last } from "./utility.mjs";
import dotenv from 'dotenv';
dotenv.config();

const binance = new Binance().options({
  APIKEY: process.env.APIKEY,
  APISECRET: process.env.APISECRET
});

const baseCurrency = 'BTC'
const quoteCurrency = 'USDT'
const symbol = baseCurrency + quoteCurrency

const time = []
const open = []
const high = []
const low = []
const close = []
const volume = []

const qty = 20

binance.websockets.chart(symbol, "1s", (symbol, interval, chart) => {
  let tick = binance.last(chart); // current time!
  populate(tick, chart[tick])
  let lastClose = parseFloat(chart[tick].close)
  let signal = trader(open, high, low, close, volume)
  let amount = parseFloat((qty / lastClose).toFixed(4))


  if (signal == 1) {
    console.log("BUY!");
    // binance.marketBuy(symbol, amount)
  }
  if (signal == -1) {
    console.log("SELL!");
    // binance.marketSell(symbol, amount)
  }
});

function populate(ts, data) {
  time.push(parseFloat(ts))
  open.push(parseFloat(data.open))
  high.push(parseFloat(data.high))
  low.push(parseFloat(data.low))
  close.push(parseFloat(data.close))
  volume.push(parseFloat(data.volume))
}
