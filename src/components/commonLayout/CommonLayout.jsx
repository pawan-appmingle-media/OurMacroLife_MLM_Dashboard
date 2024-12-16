import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
const CommonLayout = () => {
  return (
    <>
      <div className="flex gap-0">
        <div className="">
          <Sidebar />
        </div>
        <div className="border border-black border-4 w-full m-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
