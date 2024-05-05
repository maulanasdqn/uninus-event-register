import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

export const HomePage: FC = (): ReactElement => {
  return (
    <section className="flex items-center px-6 justify-center w-full h-full min-h-screen">
      <div className="flex flex-col justify-start gap-y-3 items-start">
        <h1 className="text-3xl md:text-5xl">Uninus Event Register</h1>
        <h2 className="text-lg md:text-3xl text-left">
          List of availabe Event
        </h2>
        <ul>
          <li>
            <Link className="underline text-sm" to="/icc/register">
              Informatika Coding Camp
            </Link>
          </li>

          <li>
            <Link className="underline text-sm" to="/makrab/register">
              Malam Keakraban Infomatika
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
