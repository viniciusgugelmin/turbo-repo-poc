import { useContext } from "react";

import { GlobalContext } from "../../context";

const Template = () => {
  const { count, setCount } = useContext(GlobalContext);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      (UI) count is {count}
    </button>
  );
};

export { Template };
