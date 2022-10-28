export const studentIdFromEmail = (email: string) => {
  return email.split("@")[0].substring(1);
};

export const fromFullName = (name: string) => {
  const fullName = name.split(", ");
  const firstName = fullName[1];
  const lastName = fullName[0];

  return { firstName, lastName };
};
