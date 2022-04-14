import './index.scss';

import { subscribe } from 'remote/store';
import VanillaBookList from 'remote/VanillaBookList';
import VanillaBookSearch from 'remote/VanillaBookSearch';
import VanillaHeader from 'remote/VanillaHeader';
import { initStore } from 'remote/store';

initStore();
VanillaHeader('#header', { name: 'Vanilla Host' });
VanillaBookList('#books');
VanillaBookSearch('#search');

subscribe(({ filteredBooks }) => {
  document.getElementById('count').innerText = filteredBooks.length;
});
