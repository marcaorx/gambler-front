import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpData, signUpSchema } from "@/types/auth";
import { TextInput } from "@/components/textInput";
import { PasswordInput } from "@/components/passwordInput";
import { DateInput } from "@/components/dateInput";
import { signUpUser } from "@/api/auth";
import { AuthError } from "firebase/auth";
import { primaryColor } from "@/types/colors";

export function SignUpForm() {
  const toast = useToast();

  const methods = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    setError,
  } = methods;

  async function onSubmit(data: SignUpData) {
    try {
      return await signUpUser(data);
    } catch (error: unknown) {
      if ((error as AuthError).code === "auth/email-already-in-use") {
        return setError("email", { message: "O email já está em uso." });
      }
      return toast({
        title: "Erro ao criar a conta, tente novamente",
        status: "error",
        isClosable: true,
      });
    }
  }

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="8px" direction="column">
            <TextInput
              label="Nome"
              name="name"
              placeholder="Insira seu nome completo"
            />
            <TextInput
              label="Email"
              name="email"
              placeholder="Insira seu e-mail"
            />
            <DateInput />
            <PasswordInput />
            <PasswordInput isPasswordConfirmation />
          </Flex>
          <Button
            backgroundColor={primaryColor}
            color="#000"
            mt={4}
            isLoading={isSubmitting}
            type="submit"
          >
            Registrar
          </Button>
        </form>
      </FormProvider>
    </Box>
  );
}
