import { useContext } from "./context";

export const Test1 = () => {
  console.log(11111111);
  const { state } = useContext();

  return <>Test 1 is here {state}</>;
};
