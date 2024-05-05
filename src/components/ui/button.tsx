import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactElement,
} from "react";

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<TButton> = (props): ReactElement => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded disabled:cursor-not-allowed disabled:bg-gray-400"
      {...props}
    >
      {props.children}
    </button>
  );
};
