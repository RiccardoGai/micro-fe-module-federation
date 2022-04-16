import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import VanillaBookSearch from 'remote/VanillaBookSearch';
import VanillaHeader from 'remote/VanillaHeader';
import { initStore, subscribe } from 'remote/store';

initStore();

const App = () => {
  const headerRef = useRef();
  const searchRef = useRef();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    VanillaHeader(headerRef.current, { name: 'React Host' });
    VanillaBookSearch(searchRef.current);
    subscribe((payload) => {
      setCategory(
        payload.filteredBooks.reduce((prev, curr) => {
          const el = prev.find((x) => x.category == curr.category);
          if (el) {
            el.count++;
          } else {
            prev.push({ category: curr.category, count: 1 });
          }
          return prev;
        }, [])
      );
    });
  }, []);

  return (
    <div className="font-serif">
      <div ref={headerRef}></div>
      <div className="container mx-auto mt-4 w-1/2">
        <div ref={searchRef}></div>
        <div className="mt-3 grid grid-flow-row auto-rows-max">
          {category.map((x) => (
            <div className="flex justify-between" key={x.category}>
              <span>{x.category}</span>
              <span>{x.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
