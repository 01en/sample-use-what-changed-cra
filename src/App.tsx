// uwc-debug-below
import { useEffect, useState, useMemo, useCallback, useRef, useDebugValue } from "react";

const useRenderCount = () => {
  const renderCount = useRef<number>(0);

  // debug
  useDebugValue(renderCount);

  useEffect(()  => {
    renderCount.current++;
    console.log(`renderCount: ${renderCount.current ?? 0}`);
  })
}

/**
 * Uncomment the hooks below uwc-debug comment to see the the output
 * in console, this hooks works for useEffect, useCallback, useMemo which almost cover most of the the
 * hooks that we use on a daily basis
 */
const App = () => {
  const [count, setCount] = useState(0);

  useRenderCount();

  useEffect(() => {
    setCount(count + 1);
  }, []);

  const [a, setA] = useState("React Night");
  const [b, setB] = useState(1);
  //uwc-debug
  useEffect(() => {
    // do something
  }, [a, b]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const v = useMemo(() => {
    return count + 1;
  }, [count]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const callback = useCallback(() => {
    console.log(a);
    return "some callback";
  }, [a]);

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setB((b) => b + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setA((c) => c + 1);
        }}
      >
        Change B
      </button>
      <h2>value:a</h2>
      <div>{count}</div>
      <h2>value:b</h2>
      <div>{a}</div>
    </div>
  );
};

export default App;
