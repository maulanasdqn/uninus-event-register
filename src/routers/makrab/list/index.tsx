import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { schema } from "../schema";
import { z } from "zod";
import { useGetRegistrant } from "../hook";

export const ListMakrabPage = () => {
  const { data } = useGetRegistrant();
  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "no",
      header: "No",
      accessorFn: (_row, index) => index + 1,
    },
    {
      accessorKey: "fullname",
      header: "Nama Lengkap",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phoneNumber",
      header: "Nomor Telepon ( WhatsApp )",
    },
    {
      accessorKey: "nim",
      header: "Nim",
    },
    {
      accessorKey: "class",
      header: "Kelas",
    },
    {
      accessorKey: "generation",
      header: "Angkatan",
    },
    {
      accessorKey: "historySickness",
      header: "Riwayat Penyakit",
    },
    {
      accessorKey: "paymentStatus",
      header: "Pembayaran",
    },
  ];
  return (
    <section className="w-full p-8 flex flex-col gap-y-6">
      <h1 className="text-3xl font-semibold">Daftar Peserta Makrab</h1>
      <DataTable columns={columns} data={data || []} />
    </section>
  );
};
