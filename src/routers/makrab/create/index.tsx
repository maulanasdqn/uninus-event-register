import { Button } from "@/components/ui/button";
import { InputText } from "@/components/ui/input-text";
import { Select } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useCreateRegistrant } from "../hook";
import { schema } from "../schema";

export const CreateMakrabPage: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      nim: "",
      class: "",
      generation: "",
    },
  });

  const navigate = useNavigate();

  const { mutate } = useCreateRegistrant();

  const onSubmit = handleSubmit(async (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate("/makrab/list");
      },
    });
  });

  const generationOptions = [
    {
      label: "2022",
      value: "2022",
    },
    {
      label: "2023",
      value: "2023",
    },
  ];

  const classOptions = [
    {
      label: "A1",
      value: "A1",
    },
    {
      label: "A2",
      value: "A2",
    },
    {
      label: "B1",
      value: "B1",
    },
    {
      label: "B2",
      value: "B2",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center px-6 bg-gray-50 justify-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="bg-whit p-6 gap-y-6 shadow-md rounded-xl w-full md:w-1/2 h-auto flex flex-col border"
      >
        <div className="w-full justify-between flex items-center">
          <h1 className="text-2xl font-medium font-sans">Register Makrab</h1>
          <Link to="/makrab/list" className="text-sm font-sans underline">
            Lihat Pendaftar?
          </Link>
        </div>
        <InputText control={control} label="Nama Lengkap" name="fullname" />
        <div className="w-full flex md:flex-row flex-col md:gap-x-4 gap-y-6">
          <InputText
            type="number"
            control={control}
            pattern="[0-9]"
            label="No. Telp ( WhatsApp )"
            name="phone"
          />
          <InputText control={control} label="Email" name="email" />
        </div>
        <InputText
          type="number"
          pattern="[0-9]"
          control={control}
          label="Nim"
          name="nim"
        />
        <Select
          defaultValue={""}
          placeholder="Pilih Kelas"
          control={control}
          options={classOptions}
          label="Kelas"
          name="class"
        />
        <Select
          defaultValue={""}
          placeholder="Pilih Angkatan"
          options={generationOptions}
          control={control}
          label="Angkatan"
          name="generation"
        />
        <Button disabled={!isValid} type="submit">
          Register
        </Button>
      </form>
    </section>
  );
};
