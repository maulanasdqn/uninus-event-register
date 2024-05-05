import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

export const MakrabPage: FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      Makrab Event Comming Soon,{" "}
      <Link to="/" className="underline">
        Kembali
      </Link>
    </div>
  );
};
