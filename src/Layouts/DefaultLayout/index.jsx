import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div style={{ minHeight: "100vh" }} className="flex">
      <div className="w-[200px]">
        <Sidebar />
      </div>
      <div className={cx("content")}>
        <div className="mt-8 px-3">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default DefaultLayout;
