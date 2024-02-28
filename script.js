var InvestNames = [ "1.1279","5.0023","4","2.7012","1.002",
"1.5879","2.32089","4","3.0012","1.2033","1.10334","9.556","12.20098","2","4.65564","9.1676","3.0028","6.13386","2.11330","6.5676","11","1.20761", "1.0341","1.1111","3.22009","23","9.0998","5.50086","1.0672","0.90233","1.0213","14.09981","32.1006","1.1113","10.10096","3.4176","1.0236","12.16006","1.0034","16.16336","3.00176","3.54881","4.00126","3.0016","29","13.0877","0.92188","10.23211","3.00988","1.34002","0.9349","0.92000","0.922220","3.20349","0.916509","0.950339","4.122049","4.00249"]
investAmounts =["0xa2b....e3sz4  ","0xeD....FV2sz4 ","0xrCz....e35x  ","0xe24....eKsz1 ","0xq2rt....e2wRz4  ","0xeD21....e3Mz4  ","0xb43....X3rtz  ","0xr4b....e0szR  ","0xq2o....M1KJs ","0xe2b....13szU  ","0xa2N....e1sP4  ","0xAeb....er0z4  ",
"0xe1w....Q8szT  ","0xe7K....e31rTn  ","0xa2b....e3sz4  ","0xe3D....FV2sz4 ","0xrCz....e35x  ","0xe24....eKsz1 ","0xq2rt....e2wRz4  ","0xeD21....e3Mz4  ","0xb43....X3rtz  ","0xr4b....e0szR  ","0xq2o....M1KJs ","0xe2b....13szU  ","0xa2N....e1sP4  ","0xAeb3....eE0z4", "0xE4bi....hQ7oR","0xe43T....XRR1",
"0xe1w....Q8szT  ","0xe7t....i9Svx","0xq3z....w9mTx","0xa8P....M0as1","0xerEA....Q2hv3","0xe7t....i9Svx","0xe7z...x0SrY"]
investCoins = ["10 secs ago", "3 mins ago","3 mins ago"," 12 mins ago","12 secs ago","15 secs ago","1 mins ago","5 mins ago", "18 secs ago","22 secs ago", "13 mins ago","7 secs ago","24 secs ago", "23 mins ago","2 mins ago","11 secs ago","19 mins ago", "3 secs ago","9 mins ago","17 mins ago","2 secs ago", "6 mins ago","22 mins ago","6 secs ago","13 secs ago","4 secs ago", "21 secs ago"]

function generator() {
      document.getElementById("InvestName").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];
      document.getElementById("InvestName1").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];
      document.getElementById("InvestName2").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];
      document.getElementById("InvestName3").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];
      document.getElementById("InvestName4").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];

      document.getElementById("investAmount").innerHTML = " " + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];
      document.getElementById("investAmount1").innerHTML = " " + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];
      document.getElementById("investAmount2").innerHTML = " " + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];
      document.getElementById("investAmount3").innerHTML = " " + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];
      document.getElementById("investAmount4").innerHTML = " " + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];

      document.getElementById("investCoin").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];
      document.getElementById("investCoin1").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];
      document.getElementById("investCoin2").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];
      document.getElementById("investCoin3").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];
      document.getElementById("investCoin4").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];


    //   this is for withdrawal section 
      document.getElementById("depositName").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];
      document.getElementById("depositName1").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];
      document.getElementById("depositName2").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];
      document.getElementById("depositName3").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];
      document.getElementById("depositName4").innerHTML = InvestNames[Math.floor(Math.random() * InvestNames.length)];

      document.getElementById("depositAmount").innerHTML = " $" + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];
      document.getElementById("depositAmount1").innerHTML = " $" + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];
      document.getElementById("depositAmount2").innerHTML = " $" + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];
      document.getElementById("depositAmount3").innerHTML = " $" + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];
      document.getElementById("depositAmount4").innerHTML = " $" + " " + investAmounts[Math.floor(Math.random() * investAmounts.length)];

      document.getElementById("depositcoin").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];
      document.getElementById("depositcoin1").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];
      document.getElementById("depositcoin2").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];
      document.getElementById("depositcoin3").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];
      document.getElementById("depositcoin4").innerHTML = investCoins[Math.floor(Math.random() * investCoins.length)];
      setTimeout(generator, 2000);

    
}