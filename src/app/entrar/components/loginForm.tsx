import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginData, loginSchema } from "@/types/auth";
import { TextInput } from "@/components/textInput";
import { PasswordInput } from "@/components/passwordInput";
import { loginUser } from "@/api/auth";
import { AuthError } from "firebase/auth";
import { primaryColor } from "@/types/colors";

export function LoginForm() {
  const toast = useToast();

  const methods = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    setError,
  } = methods;

  async function onSubmit(data: LoginData) {
    try {
      await loginUser(data);
    } catch (error) {
      if ((error as AuthError).code === "auth/invalid-credential") {
        return (
          setError("email", { message: "Email ou senha inválidos." }),
          setError("password", { message: "Email ou senha inválidos." })
        );
      }
      return toast({
        title: "Erro ao entrar na conta, tente novamente",
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
              label="Email"
              name="email"
              placeholder="Insira seu e-mail"
            />
            <PasswordInput />
          </Flex>
          <Button
            backgroundColor={primaryColor}
            color="#000"
            mt={4}
            isLoading={isSubmitting}
            type="submit"
          >
            Entrar
          </Button>
        </form>
      </FormProvider>
    </Box>
  );
}
