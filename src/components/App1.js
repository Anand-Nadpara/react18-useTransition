import { Suspense, useState, useTransition } from "react";

const First = () => {
  return <div>First</div>;
};

const SecondPart3 = () => {
  const time = Date.now();

  console.log("SecondPart3");

  while (Date.now() - time <= 10) {}

  return <>Second Part 3</>;
};

const SecondPart2 = ({ index, prefix }) => {
  const time = Date.now();

  console.log(prefix, index);

  while (Date.now() - time <= 2000) {}

  return <div>Second</div>;
};

const Second = ({ prefix }) => {
  const p = [];

  for (let i = 0; i <= 20; i++) {
    p.push(<SecondPart2 prefix={prefix} index={i} />);
  }

  return p;
};

const Third = () => {
  return <div>Third</div>;
};

export function App1() {
  const [state, setState] = useState("first");
  const [pending, startTransition] = useTransition();

  return (
    <Suspense fallback={<div>Loading guys</div>}>
      <div>
        <button
          onClick={() => {
            setState("first");
          }}
        >
          First
        </button>
        <button
          onClick={() => {
            startTransition(() => {
              setState("second");
            });
          }}
        >
          Second
        </button>
        <button
          onClick={() => {
            setState("third");
          }}
        >
          Third
        </button>
        {state === "first" ? <First /> : null}
        {state === "second" ? <Second prefix="Second" /> : null}
        {state === "third" ? <Third /> : null}
      </div>
    </Suspense>
  );
}
