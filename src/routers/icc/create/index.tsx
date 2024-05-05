import { Button } from "@/components/ui/button";
import { InputText } from "@/components/ui/input-text";
import { Select } from "@/components/ui/select";
import { supabase } from "@/libs/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

export const CreateIccPage: FC = (): ReactElement => {
  const schema = z.object({
    fullname: z.string().min(1, "Fullname is required"),
    email: z.string().min(1, "Email harus disii").email("Email harus valid"),
    phone: z.string().min(1, "Nomor Handphone harus diisi"),
    nim: z.string().min(1, "Nim is required"),
    class: z.string().min(1, "Class is required"),
    generation: z.string().min(1, "Generation is required"),
  });

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

  const onSubmit = handleSubmit(async (data) => {
    const { error } = await supabase.from("registrants").insert(data);

    reset();

    if (error) {
      console.log(error);
    }

    if (!error) {
      navigate("/icc/list");
    }
  });

  const generationOptions = [
    {
      label: "2020",
      value: "2020",
    },
    {
      label: "2021",
      value: "2021",
    },
    {
      label: "2022",
      value: "2022",
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
    <section className="flex flex-col w-full items-center bg-gray-50 justify-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="bg-whit p-6 gap-y-6 shadow-md rounded-xl w-1/2 h-auto flex flex-col border"
      >
        <div className="w-full justify-between flex items-center">
          <h1 className="text-2xl font-medium font-sans">Register ICC</h1>
          <Link to="/icc/list" className="text-sm font-sans underline">
            Lihat Pendaftar?
          </Link>
        </div>
        <InputText control={control} label="Nama Lengkap" name="fullname" />
        <div className="w-full flex gap-x-4">
          <InputText
            control={control}
            label="No. Telp ( WhatsApp )"
            name="phone"
          />
          <InputText control={control} label="Email" name="email" />
        </div>
        <InputText pattern="\d*" control={control} label="Nim" name="nim" />
        <Select
          placeholder="Pilih Kelas"
          control={control}
          options={classOptions}
          label="Kelas"
          name="class"
        />
        <Select
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
