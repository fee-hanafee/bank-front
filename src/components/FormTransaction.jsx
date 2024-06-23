import { Button } from "@mui/material";
import React from "react";

export default function FormTransaction({ handleSubmit, children, title }) {
  return (
    <div
      className="w-[100vw] h-[calc(100vh-62px)]  py-4 px-8"
      style={{
        background:
          "linear-gradient(90.9deg, rgb(3, 195, 195) 0.3%, rgb(37, 84, 112) 87.8%)",
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <form
          className="w-[360px]  bg-[#f8f8f8] rounded-md p-8 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <p className="text-2xl ">{title}</p>
          {children}
          <Button variant="outlined" type="submit">
            ตกลง
          </Button>
        </form>
      </div>
    </div>
  );
}
