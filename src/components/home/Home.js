import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import Company from "../search_company/Company";
import RealTime from "../realTime/RealTime";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [input, setInput] = useState("");
  const [resultCompany, setResultCompany] = useState(false);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setInput(value);
  };

  const onKeyPress = (e) => {
    const {
      charCode,
      target: { value },
    } = e;
    if (charCode === 13) {
      setInput(value);
      handleSearchBtn();
    }
  };

  const handleSearchBtn = async () => {
    const { data } = await axios.post("http://localhost:4000/data/search", {
      value: input,
    });
    // const data = [
    //   {
    //     name: "KPX홀딩스",
    //     startPrice: "62,000",
    //     lowPrice: "60,200",
    //     highPrice: "62,600",
    //     nowPrice: "62,100",
    //     tradeRate: "24,815",
    //     tradePrice: "1,521",
    //     plusOrMinus: "plus",
    //   },
    // ];

    //setResultCompany({ companies: data });
    setIsLoading(false);
    setResultCompany(data);
    setIsSearching(true);
  };

  const handleClosePop = () => {
    setIsSearching(false);
  };
  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <main>
          <div className="inner-width">
            <div className="searching-bar">
              <select className="searching-bar__select">
                <option id="catalyst">재료</option>
                <option id="company">기업</option>
              </select>
              <input
                type="text"
                className="searching-bar__input"
                placeholder="검색어"
                onChange={onChange}
                onKeyPress={onKeyPress}
                value={input}
              />
              <a onClick={handleSearchBtn}>
                <i className="fas fa-search"></i>
              </a>
            </div>
            <div className="real-time">
              <RealTime />
            </div>
          </div>
          {isSearching ? (
            <div className="layer-popup">
              <div className="popup__btn--close" onClick={handleClosePop}>
                <i className="fas fa-times"></i>
              </div>
              <div className="popup__result">
                {resultCompany.companies.map((com, index) => {
                  return <Company com={com} key={index} />;
                })}
              </div>
            </div>
          ) : (
            <div className="display-none"></div>
          )}
        </main>
      )}
    </div>
  );
};

export default App;

/*
{resultCompany ? (
              <>
                <div className="searching-bar">
                  <select className="searching-bar__select">
                    <option id="catalyst">재료</option>
                    <option id="company">기업</option>
                  </select>
                  <input
                    type="text"
                    className="searching-bar__input"
                    placeholder="검색어"
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    value={input}
                  />
                  <a onClick={handleSearchBtn}>
                    <i className="fas fa-search"></i>
                  </a>
                </div>
                <div className="popup">
                  {resultCompany.companies.map((com, index) => {
                    return <Company com={com} key={index} />;
                  })}
                </div>
              </>
            ) : (
              <>
                <div className="search-bar">
                  <select className="search-bar__select">
                    <option id="catalyst">재료</option>
                    <option id="company">기업</option>
                  </select>
                  <input
                    type="text"
                    className="search-bar__input"
                    placeholder="검색어"
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    value={input}
                  />
                  <a onClick={handleSearchBtn}>
                    <i className="fas fa-search"></i>
                  </a>
                </div>
                <div className="realtime-field"></div>
              </>
            )}
*/
