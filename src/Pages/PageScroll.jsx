
import { useEffect, useRef } from "react";

const useScrollToResult = (trigger) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (trigger && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [trigger]);

  return sectionRef;
};

export default useScrollToResult;
