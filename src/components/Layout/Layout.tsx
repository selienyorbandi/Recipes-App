import { ReactElement } from "react";
import Header from "./Header/Header";
import styles from "./Layout.module.css";
import Navbar from "./Navbar/Navbar";

type Props = {
    children: ReactElement | ReactElement[]
}

function Layout({children}: Props) {
  return <div className={styles.Layout}>
    <Header/>
    <main>
      {children}
    </main>
    <Navbar/>
  </div>;
}

export default Layout;
