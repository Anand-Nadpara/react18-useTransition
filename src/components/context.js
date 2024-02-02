import {
  useMemo,
  useState,
  createContext,
  useContext as useReactContext,
} from "react";

const context = createContext({});
const updater = createContext({});

export const useContext = () => {
  const contextConsumer = useReactContext(context);

  return contextConsumer;
};

export const useUpdater = () => {
  const contextConsumer = useReactContext(updater);

  return contextConsumer;
};

export const Provider = ({ contextValue, children }) => {
  const [state, setState] = useState(contextValue);
  const Com = context.Provider;
  const Up = updater.Provider;

  // const m = useMemo(() => ({ setState }), [setState]);

  return (
    <Com value={{ state }}>
      <Up value={setState}>
        <div>{state}</div>
        <div>{children}</div>
      </Up>
    </Com>
  );
};
