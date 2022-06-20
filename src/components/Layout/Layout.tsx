import { ReactElement } from "react";
import Header from "./Header/Header";
import styles from "./Layout.module.css";
import SideBar from "./SideBar/SideBar";
import TabBar from "./TabBar/TabBar";

type Props = {
  children: ReactElement | ReactElement[];
};

function Layout({ children }: Props) {
  return (
    <div className={styles.Layout}>
      <SideBar />
      <div>
        <Header />

        <main>{children}</main>
      </div>
      <TabBar />
    </div>
  );
}

export default Layout;
