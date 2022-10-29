export const studentIdFromEmail = (email: string) => {
  const id = email.split("@")[0].toLowerCase();
  return id[0] === "s" ? id.substring(1) : id;
};

export const fromFullName = (name: string) => {
  const fullName = name.split(", ");
  const firstName = fullName[1];
  const lastName = fullName[0];

  return { firstName, lastName };
};
