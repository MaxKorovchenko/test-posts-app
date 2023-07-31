import { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import { CgArrowUpR } from "react-icons/cg";

import styles from "./ScrollUp.module.css";

export const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = throttle(() => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 500);

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  });

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={isVisible ? styles.visible : styles.box} onClick={handleScroll}>
      <CgArrowUpR className={styles.icon} />
    </div>
  );
};
