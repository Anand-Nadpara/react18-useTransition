import { useTransition, useState } from "react";

export function App3() {
  const [pending, startTransition] = useTransition();
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setState1((n) => n + 1)}>Fast {state1}</button>

      <button
        onClick={() =>
          startTransition(() => {
            setState2((n) => {
              const start = Date.now();
              console.log("Start", start, state1);
              for (let i = 0; i < 25000; i++) {
                console.error(i);
              }
              console.log("End", Date.now() - start, state1);

              return state1 + 1;
            });
          })
        }
      >
        Slow {state2}
      </button>
    </div>
  );
}
