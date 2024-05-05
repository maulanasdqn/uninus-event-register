import { DetailedHTMLProps, ReactElement, SelectHTMLAttributes } from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type TSelect<T extends FieldValues> = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  UseControllerProps<T> & {
    options: Array<{
      label: string;
      value: string;
    }>;
    label?: string;
    placeholder?: string;
  };

export const Select = <T extends FieldValues>(
  props: TSelect<T>,
): ReactElement => {
  const {
    field,
    fieldState: { error },
  } = useController<T>(props);

  const status = error
    ? "peer text-xs text-red-400 w-full h-full bg-red-50 text-red-400 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-red-400 placeholder-shown:border-t-red-400 border focus:border-2 focus:visible:border-red-400 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-red-400 focus:border-red-700"
    : "peer text-xs text-gray-500 w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900";

  const labelClass = error
    ? "flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-red-400 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-red-400 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-red-400 peer-focus:text-red-700 before:border-red-400 peer-focus:before:!border-red-700 after:border-blue-red-400 peer-focus:after:!border-red-700"
    : "flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900";

  return (
    <div className="relative h-10 w-auto min-w-72">
      <select defaultValue="" {...props} {...field} className={status}>
        <option className="text-gray-400">{props.placeholder}</option>
        {props.options.map((option, key) => (
          <option
            className="text-sm text-medium"
            value={option.value}
            key={key}
          >
            {option.label}
          </option>
        ))}
      </select>
      <label className={labelClass}>{props.label}</label>
      {error && (
        <span className="text-xs italic absolute left-0 bottom-0 top-10 text-red-500">
          *{error?.message}
        </span>
      )}
    </div>
  );
};
