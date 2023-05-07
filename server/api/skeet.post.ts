import { post } from "../utils/skeet";
import { login } from "../utils/auth";

export default defineEventHandler(async (event) => {
  const body: { text: string } = await readBody(event);
  await login();
  await post(body.text);

  return body;
});
