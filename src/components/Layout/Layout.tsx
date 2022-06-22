import { ReactElement } from "react";
import styles from "./Layout.module.css";
import SideBar from "./SideBar/SideBar";
import TabBar from "./TabBar/TabBar";

type Props = {
  children: ReactElement | ReactElement[];
};

function Layout({ children }: Props) : JSX.Element {
  return (
    <div className={styles.Layout}>
      <SideBar />
      <main>{children}</main>
      <TabBar />
    </div>
  );
}

export default Layout;
