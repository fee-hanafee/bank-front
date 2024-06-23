import React from "react";
import useAuth from "../../context/AuthContextProvider";
import currencyFormat from "../../utils/currencyFormat";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div>
          <p className="font-bold text-2xl text-[]">สวัสดีคุณ {user.first_name}</p>
        </div>
        <div>
          <p>บัญชีของฉัน</p>
          <p>{user.bank_account}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#005A2A] w-[260px] h-[260px] border-2 border-[#fff] rounded-full flex flex-col justify-center items-center">
          <span className="absolute -translate-y-[30px]  text-[#f4f5f6]">
            ยอดเงินที่ใช้ได้
          </span>
          <p className="text-4xl text-white ">
            {currencyFormat(user?.balance)}
          </p>
        </div>
      </div>
    </div>
  );
}
