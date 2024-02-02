import { useUpdater } from "../components/context";

export const Test2 = () => {
  const setState = useUpdater();

  console.log(22222222);

  return (
    <>
      <div>Test 2 is here</div>{" "}
      <button
        onClick={() => {
          setState((state) => state + 1);
        }}
      >
        Hello
      </button>
    </>
  );
};
