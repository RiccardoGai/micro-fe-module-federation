declare module 'remote/VanillaBookSearch' {
  const f: (element: HTMLInputElement) => void;
  export default f;
}
declare module 'remote/VanillaHeader' {
  const f: (element: HTMLInputElement, props: any) => void;
  export default f;
}
declare module 'remote/store' {
  interface IBook {
    id: number;
    fileName: string;
    imageUrl: string;
    title: string;
    author: string;
    categoryId: number;
    category: string;
  }

  interface IStore {
    books: IBook[];
    filteredBooks: IBook[];
    searchText: string;
  }
  type Callback = (store: IStore) => void;

  const store: IStore;
  const initStore: Function;
  const subscribe: (callback: Callback) => void;
  export { store, initStore, subscribe };
}
