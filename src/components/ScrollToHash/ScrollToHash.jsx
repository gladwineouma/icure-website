import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash, pathname]);

  return null;
}

export default ScrollToHash;