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

  const [b, setB] = useState(0);
  //uwc-debug
  useEffect(() => {
    // do something
  }, [count, b]);

  // uwc-debug
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const v = useMemo(() => {
    return count + 1;
  }, [count]);

  // uwc-debug
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const callback = useCallback(() => {
    console.log(b);
    return "some callback";
  }, [b]);

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB((c) => c + 1);
        }}
      >
        Change B
      </button>
      <h2>value:a</h2>
      <div>{count}</div>
      <h2>value:b</h2>
      <div>{b}</div>
    </div>
  );
};

export default App;
