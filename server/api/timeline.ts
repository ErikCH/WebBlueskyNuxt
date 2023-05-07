import { login } from "../utils/auth";
import { getTimeline } from "../utils/timeline";

export default defineEventHandler(async (event) => {
  await login();
  const feed = await getTimeline();
  const data = {
    toJSON() {
      return feed;
    }
  };

  return data;
});
