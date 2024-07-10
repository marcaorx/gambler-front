import { SignUpData } from "@/types/auth";
import { primaryColor } from "@/types/colors";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface PasswordInputProps {
  isPasswordConfirmation?: boolean;
}

export function PasswordInput({ isPasswordConfirmation }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpData>();

  const passwordKind = isPasswordConfirmation ? "confirmPassword" : "password";

  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!errors[passwordKind]}>
      <FormLabel htmlFor={passwordKind}>
        {isPasswordConfirmation ? "Confirme sua senha" : "Senha"}
      </FormLabel>
      <InputGroup size="md">
        <Input
          variant="outline"
          {...register(passwordKind)}
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Insira sua senha"
          height="50px"
        />
        <InputRightElement width="4.5rem">
          <Button
            backgroundColor={primaryColor}
            color="#000"
            h="1.75rem"
            size="sm"
            marginTop="10px"
            marginRight="4px"
            onClick={handleClick}
          >
            {show ? "Esconder" : "Exibir"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errors[passwordKind]?.message}</FormErrorMessage>
    </FormControl>
  );
}
