import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { schema } from "../schema";
import { z } from "zod";
import { useGetRegistrant } from "../hook";

export const ListICCPage = () => {
  const { data } = useGetRegistrant();
  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "fullname",
      header: "Fullname",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "nim",
      header: "Nim",
    },
    {
      accessorKey: "class",
      header: "Class",
    },
    {
      accessorKey: "generation",
      header: "Generation",
    },
  ];
  return (
    <section className="w-full p-8 flex flex-col gap-y-6">
      <h1 className="text-3xl font-semibold">Daftar Peserta ICC</h1>
      <DataTable columns={columns} data={data || []} />
    </section>
  );
};
