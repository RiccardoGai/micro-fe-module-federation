import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import VanillaHeader from "remote/VanillaHeader";
import VanillaBookList from "remote/VanillaBookList";
import { initStore } from "remote/store";

initStore();


const App = () => {
  const headerRef = useRef();
  const booksListRef = useRef();
  useEffect(() => {
    VanillaHeader(headerRef.current, {name: 'React Host'});
    VanillaBookList(booksListRef.current);
  }, []);

  return (
    <div className="font-serif">
      <div ref={headerRef}></div>
      <div className="container mx-auto mt-4">
        <div className="flex w-full">
          <div className="grid grid-cols-1">
            <div ref={booksListRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
