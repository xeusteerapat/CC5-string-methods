function extractCurrencyValue(string, rate) {
  return Number(string.slice(1)) * rate;
}

console.log(extractCurrencyValue("$120", 30.5));
