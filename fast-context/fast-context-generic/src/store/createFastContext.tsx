import {
  createContext,
  memo,
  useCallback,
  useContext,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";


const createFastContext = <Store>(Store)=>{}

type Store = { first: String; last: String };

const useStoreData: {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => () => void;
} = () => {
  const store = useRef({
    first: "",
    last: "",
  });

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>());
  // const subscribers = useRef(new Set());

  const set = useCallback((value: Partial<Store>) => {
    store.current = { ...store.current, ...value };
    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
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

const useStore: SelectorOut = (
  selector: (store: Store) => SelectorInput
): [SelectorOutput, (value: Partial<Store>) => void] => {
  const store = useContext(StoreContext)!;
  if (!store) {
    throw new Error("Store not found");
  }

  const state = useSyncExternalStore(store.subscribe, () =>
    selector(store.get())
  );

  return [state, store.set];
};
