import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../Navigation/Navigation";

import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
