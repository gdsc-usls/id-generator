export const studentIdFromEmail = (email: string) => {
  return email.split("@")[0].substring(1);
};
