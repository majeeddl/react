import {
  createContext,
  memo,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import "./App.css";

// const useStoreData = () => {
//   const store = useState({
//     first: "",
//     last: "",
//   });

//   return store;
// };

type Store = { first: String; last: String };

const useStoreData = (): {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => () => void;
} => {
  const store = useRef({
    first: "",
    last: "",
  });

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((value: Partial<Store>) => {
    store.current = { ...store.current, ...value };
    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribe.current.delete(callback);
  }, []);

  return {
    get,
    set,
    subscribe,
  };
};

type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

const StoreContext = createContext<UseStoreDataReturnType | null>(null);

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={useStoreData()}>
      {children}
    </StoreContext.Provider>
  );
};


const useStore = (selector : (store : Store)=> SelectorOutput) : [ SelectorOutput, (value : Partial<Store>) => void] => {

}

const TextInput = ({ value }: { value: "first" | "last" }) => {
  const [store, setStore] = useContext(StoreContext)!;
  return (
    <div className="field">
      {value}:{" "}
      <input
        value={store[value]}
        onChange={(e) => setStore({ ...store, [value]: e.target.value })}
      />
    </div>
  );
};

const Display = ({ value }: { value: "first" | "last" }) => {
  const [store] = useContext(StoreContext)!;
  return (
    <div className="value">
      {value}: {store[value]}
    </div>
  );
};

const FormContainer = memo(() => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
});

const DisplayContainer = memo(() => {
  return (
    <div className="container">
      <h5>DisplayContainer Simple Context</h5>
      <Display value="first" />
      <Display value="last" />
    </div>
  );
});

const ContentContainer = memo(() => {
  return (
    <div className="container">
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
});

function App() {
  const store = useState({
    first: "",
    last: "",
  });

  return (
    <StoreContext.Provider value={store}>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
