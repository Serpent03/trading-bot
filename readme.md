
# binance-JS
binance-JS is a javascript bot that tries to perform algorithmic bitcoin trading. Made during the bitcoin bear market of October 2022.

## Pre-Requisites
- node and yarn
- Github CLI on the desktop

## Installation

Clone the repository onto your local machine using git:

```bash
git clone https://github.com/Serpent03/tweeter.git
```

Before starting, install all the relevant modules using yarn:
```bash
npm install --global yarn # if yarn is not already installed.
yarn install
```

## Overview

There are three files of main interest:
- `main.js`: Wrapper function for the entire code. This is where all the secret keys and APIs are stored.
- `trade.js`: Where the logic for the actual trade is happening.
- `utility.js`: Common utilities: fetching the last value of an array, checking whether a crossover happened, etc.

## Indicators and strategies

Currently a few strategies have been implemented/are in TODO:
- Bollinger Bands
- EMA 4/11 crossover
- RSI(todo)

## PS
This was developed quite a few years ago. As such I am not able to verify if it currently works in the present market, as well as if the API itself is working or not.