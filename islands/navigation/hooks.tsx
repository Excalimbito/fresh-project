import { useEffect } from "preact/hooks";

const UseHooks = () => {
  useEffect(() => {
    console.log("hello from navigation hooks");
  }, []);
};

export default UseHooks;
