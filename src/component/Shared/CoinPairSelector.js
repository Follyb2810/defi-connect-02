import React from 'react';

const CoinPairSelector = ({amount,selectedCoin,handleAmountChange,handleCoinChange}) => {
  return (
    <section className='d-flex '>
      <input
        type='number'
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        required
        style={{marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}
      />
      <div style={{marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}>
        {selectedCoin}
      </div>
      <select
        value={selectedCoin}
        onChange={handleCoinChange}
        required
        style={{border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}
      >
        <option value="">Select Coin</option>
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
        <option value="xrp">Ripple</option>
        <option value="bnb">BNB</option>
        <option value="eos">EOS</option>
      </select>
    </section>
  );
};

export default CoinPairSelector;
// [
//   "btc",
//   "eth",
//   "ltc",
//   "bch",
//   "bnb",
//   "eos",
//   "xrp",
//   "xlm",
//   "link",
//   "dot",
//   "yfi",
//   "usd",
//   "aed",
//   "ars",
//   "aud",
//   "bdt",
//   "bhd",
//   "bmd",
//   "brl",
//   "cad",
//   "chf",
//   "clp",
//   "cny",
//   "czk",
//   "dkk",
//   "eur",
//   "gbp",
//   "hkd",
//   "huf",
//   "idr",
//   "ils",
//   "inr",
//   "jpy",
//   "krw",
//   "kwd",
//   "lkr",
//   "mmk",
//   "mxn",
//   "myr",
//   "ngn",
//   "nok",
//   "nzd",
//   "php",
//   "pkr",
//   "pln",
//   "rub",
//   "sar",
//   "sek",
//   "sgd",
//   "thb",
//   "try",
//   "twd",
//   "uah",
//   "vef",
//   "vnd",
//   "zar",
//   "xdr",
//   "xag",
//   "xau",
//   "bits",
//   "sats"
// ]
