import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: {
        name: "Developer",
        address: "developer@gmail.com",
      },
      to: {
        name: user.name,
        address: user.email,
      },
      subject: "Cadastro de usuário!",
      html: `Olá, ${user.name} bem vindo ao sistema de filas :D`,
    });
  },
};
