import React from "react";
import "./company.css";

const Company = ({
  com: {
    name,
    startPrice,
    lowPrice,
    highPrice,
    nowPrice,
    tradeRate,
    tradePrice,
    plusOrMinus,
  },
}) => {
  let flag = 0; // 0 - 고가 > 종가 > 저가 , -1 저가 > 종가 , 1 고가 < 종가, 2 저가 = 종가 3 고가 = 종가
  let color = "red";
  const tmpHigh = Number(highPrice.replace(/,/g, ""));
  const tmpLow = Number(lowPrice.replace(/,/g, ""));
  const tmpNow = Number(nowPrice.replace(/,/g, ""));
  if (tmpHigh > tmpNow && tmpNow > tmpLow) {
    flag = 0;
  } else if (tmpLow > tmpNow) {
    flag = -1;
  } else if (tmpHigh < tmpNow) {
    flag = 1;
  } else if (tmpHigh === tmpNow) {
    flag = 3;
  } else if (tmpLow === tmpNow) {
    flag = 2;
  }
  if (plusOrMinus === "minus") {
    color = "blue";
  }

  return (
    <div className="search-company">
      <h3>{name}</h3>

      <div className="search-company__chart">
        <div className={`chart__now-price price${flag}`}>{nowPrice}</div>
        <div>
          <div className="chart__high-price price">{highPrice}</div>
          <div className={`chart__low-price price ${color}`}>{lowPrice}</div>
        </div>
      </div>
      <ul>
        <li>
          거래량
          <br />
          {tradeRate}
        </li>
        <li>
          거래대금
          <br />
          {tradePrice}백만
        </li>
      </ul>
    </div>
  );
};

export default Company;

// 이전 슬라이드 나오던 종목
// return (
//   <a
//     href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${name} 특징주`}
//   >
//     <div className="company">
//       <span className="company-name">{name}</span>
//     </div>
//   </a>
// );
