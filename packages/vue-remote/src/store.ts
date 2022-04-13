import { reactive, watchEffect } from "vue";

export interface IBook {
  id: number;
  fileName: string;
  imageUrl: string;
  title: string;
  author: string;
  categoryId: number;
  category: string;
}

export interface IStore {
  books: IBook[];
  filteredBooks: IBook[];
  searchText: string;
}

const store = reactive<IStore>({
  books: [],
  filteredBooks: [],
  searchText: ''
});

const filter = () => {
  const regex = new RegExp(store.searchText, "i");
  return store.books
    .filter(
      (x) =>
      x.title.match(regex)
    )
};


export const initStore = (): void => {
  fetch(`http://localhost:8080/data.json`)
    .then((resp) => resp.json())
    .then((data) => {
      store.books = data.slice(0,50);
      store.filteredBooks = filter();
    });
}

export const setSearchText = (text: string): void => {
  store.searchText = text;
  store.filteredBooks = filter();
};


type Callback = (store: IStore) => void;
const subscribers: Callback[] = [];
export const subscribe = (callback: Callback) => {
  callback(store);
  subscribers.push(callback);
};

watchEffect(() => {
  const payload = {
    ...store,
  };
  subscribers.forEach((fn) => fn(payload));
});

export default store;
