import { getRegisterFrame } from "@/api/registerFrame";
import { useQuery } from "@tanstack/react-query";

export function useGetRegisterFrame() {
  return useQuery({
    queryKey: ["registerFrame"],
    queryFn: () => getRegisterFrame(),
  });
}
