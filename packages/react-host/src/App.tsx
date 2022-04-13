import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import VanillaBookList from "remote/VanillaBookList";
import VanillaBookSearch from "remote/VanillaBookSearch";

const App = () => {
  const foodsRef = useRef();
  const searchRef = useRef();
  useEffect(() => {
    VanillaBookList(foodsRef.current);
    VanillaBookSearch(searchRef.current);
  },[])

  return (<div>
    <div ref={searchRef}></div>
    <div ref={foodsRef}></div>
  </div>)
};
ReactDOM.render(<App />, document.getElementById("app"));
