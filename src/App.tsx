import React, { useEffect, useState, useMemo, useCallback } from "react";
import ReactDOM from "react-dom";

/**
 * Uncomment the hooks below uwc-debug comment to see the the output
 * in console, this hooks works for useEffect, useCallback, useMemo which almost cover most of the the
 * hooks that we use on a daily basis
 */
const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  //uwc-debug
  useEffect(() => {
    // do something
  }, [a, b]);

  // uwc-debug
  const v = useMemo(() => {
    return a + 1;
  }, [a]);

  // uwc-debug
  const callback = useCallback(() => {
    console.log(b);
    return "some callback";
  }, [b]);

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setA(c => c + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(c => c + 1);
        }}
      >
        Change B
      </button>
      <h2>value:a</h2>
      <div>{a}</div>
      <h2>value:b</h2>
      <div>{b}</div>
    </div>
  );
};

export default App;

