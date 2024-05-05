import { z } from "zod";

export const schema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().min(1, "Email harus disii").email("Email harus valid"),
  phone: z.string().min(1, "Nomor Handphone harus diisi"),
  nim: z.string().min(1, "Nim is required"),
  class: z.string().min(1, "Class is required"),
  generation: z.string().min(1, "Generation is required"),
});
