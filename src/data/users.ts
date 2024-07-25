const users = [
  {
    email: "johndoe@gmail.com",
    password: "password",
  },
  {
    email: "janedoe@gmail.com",
    password: "password",
  },
  {
    email: "alex24@gmail.com",
    password: "password",
  },
];

export const getUsersByEmail = (email: string) => {
  const found = users.find((user) => user.email === email);
  return found;
};
