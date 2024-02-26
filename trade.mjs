import { last, crossover, inRange } from "./utility.mjs";
import { SMA, EMA, BollingerBands, RSI, bullish, bearish } from "technicalindicators";

const margin = 0.5
const crossRange = [0, 0];
const lowerBB = []

let isInTrade = false
let purchasePrice = 0
let totalProfit = 0

function buy(buyPrice) {
  isInTrade = true
  purchasePrice = buyPrice
  console.log(`buy: ${purchasePrice}`)
}
function sell(sellPrice) {
  isInTrade = false
  totalProfit += sellPrice - purchasePrice
  console.log(`sell: ${sellPrice - purchasePrice} \ntotalProfit: ${totalProfit}\n----`)
  purchasePrice = 0
}

export function trader(open, high, low, close, volume) {
  const EMASmall = EMA.calculate({ period: 4, values: close })
  const EMALarge = EMA.calculate({ period: 11, values: close })
  const lastClose = parseFloat(last(close))
  const bb = BollingerBands.calculate({ period: 600, stdDev: 1, values: close })
  try {
    lowerBB.push(last(bb).pb)
  } catch { }

  // const isBullish = bullish({ open, high, low, close })
  // const isBearish = bearish({ open, high, low, close })
  console.log(last(lowerBB))

  if (!isInTrade) {
    if (crossover(lowerBB, crossRange)) {
      buy(lastClose)
      return 1
    }
  }
  if (isInTrade) {
    if (lastClose >= purchasePrice + margin) {
      sell(lastClose)
      return -1
    }
  }
  return 0
}
