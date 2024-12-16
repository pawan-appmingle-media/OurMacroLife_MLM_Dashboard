import React from "react";
// import { MdOutlineFileDownload } from "react-icons/md";

const CommonHeader = ({ name }) => {
  return (
    <>
      <div className="border-b-[2px] mb-2 p-2">
        <h1 className="text-2xl font-semibold p-2">{name}</h1>
      </div>
    </>
  );
};

export default CommonHeader;
