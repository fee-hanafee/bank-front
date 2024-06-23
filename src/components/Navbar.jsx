import React from "react";
import Menutext from "./Menutext";
import useAuth from "../context/AuthContextProvider";

export default function Navbar() {
  const { user, userLogout } = useAuth();

  return (
    <nav className="w-[100vw] h-[62px] bg-[#333] flex items-center">
      <div className="w-full flex justify-between ml-8 mr-8">
        <div className="flex gap-4">
          <Menutext text="หน้าหลัก" />
          <Menutext text="ฝากเงิน" path="deposit"/>
          <Menutext text="โอนเงิน" path="transfer"/>
          <Menutext text="ถอนเงิน" path="withdraw" />
          <Menutext text="ธุรกรรม" />
        </div>
        <div className="flex gap-4 items-center">
          {user ? (
            <div className="" onClick={userLogout}>
              <Menutext text="ออกจากระบบ" path="/login"/>
            </div>
          ) : (
            <Menutext text="เข้าสู่ระบบ" path="login" />
          )}
        </div>
      </div>
    </nav>
  );
}
