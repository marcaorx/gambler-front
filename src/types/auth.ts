import * as Yup from "yup";

export type LoginData = {
  email: string;
  password: string;
};

export type SignUpData = LoginData & {
  name: string;
  confirmPassword: string;
  birthDate: Date;
};

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Insira seu e-mail").email("Email inválido"),
  password: Yup.string().required("Insira a senha"),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required("Insira seu nome")
    .min(3, "Insira o nome completo"),
  email: Yup.string().required("Insira seu e-mail").email("Email inválido"),
  password: Yup.string()
    .required("Insira sua senha")
    .min(8, "A senha deve ter no mínimo 8 caracteres."),
  confirmPassword: Yup.string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  birthDate: Yup.date()
    .required("Insira sua data de nascimento")
    .test("age", "Você deve ter pelo menos 18 anos", function (value) {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age > 18;
      }
      return age >= 18;
    }),
});
