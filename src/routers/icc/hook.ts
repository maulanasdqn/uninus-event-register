import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { schema } from "./schema";
import { supabase } from "@/libs/supabase";
import { z } from "zod";
import { PostgrestError } from "@supabase/supabase-js";

export const useGetRegistrant = (): UseQueryResult<
  z.infer<typeof schema>[],
  PostgrestError
> => {
  return useQuery({
    queryKey: ["registrants"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("registrants")
        .select("*")
        .order("id", { ascending: true });
      if (!error) {
        return data;
      } else {
        throw error;
      }
    },
  });
};
