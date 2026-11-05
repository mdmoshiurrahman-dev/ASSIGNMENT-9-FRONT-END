import { authClient } from "./auth-client";

export const getJwtTokenFromClient = async () => {
  const jwtToken = await authClient.token();
  if (jwtToken.error) {
    console.log("jwt is not valid");
  }
  return jwtToken.data?.token;
};
