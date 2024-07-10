import { SignUpData } from "@/types/auth";
import {
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export function DateInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpData>();

  return (
    <FormControl isInvalid={!!errors.birthDate}>
      <FormLabel htmlFor="birthDate">Data de nascimento</FormLabel>
      <Input
        {...register("birthDate")}
        height="50px"
        pr="4.5rem"
        size="md"
        type="date"
      />
      <FormErrorMessage>{errors.birthDate?.message}</FormErrorMessage>
    </FormControl>
  );
}
