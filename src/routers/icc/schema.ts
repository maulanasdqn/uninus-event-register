import { z } from "zod";

export const schema = z.object({
  fullname: z.string().min(1, "Nama lengkap harus diisi"),
  email: z.string().min(1, "Email harus disii").email("Email harus valid"),
  phone: z
    .string()
    .min(1, "Nomor handphone harus diisi")
    .min(10, "Nomor handphone Minimal 10 digit")
    .max(13, "Nomor handphone Maksimal 13 digit"),
  nim: z
    .string()
    .min(1, "Nim harus diisi")
    .min(14, "Nim minimal harus 14 digit")
    .max(14, "Nim maksimal harus 14 digit")
    .refine((value) => /^\d+$/.test(value), "Nim harus berupa angka"),
  class: z.string().min(1, "Kelas harus diisi"),
  generation: z.string().min(1, "Angkatan Harus diisi"),
});
