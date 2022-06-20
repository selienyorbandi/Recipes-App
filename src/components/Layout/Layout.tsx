import { ReactElement } from "react";
import Header from "./Header/Header";
import styles from "./Layout.module.css";
import TabBar from "./TabBar/TabBar";

type Props = {
    children: ReactElement | ReactElement[]
}

function Layout({children}: Props) {
  return <div className={styles.Layout}>
    <Header/>
    <main>
      {children}
    </main>
    <TabBar/>
  </div>;
}

export default Layout;
