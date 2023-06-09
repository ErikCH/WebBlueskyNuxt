import { BskyAgent, AtpSessionData } from "@atproto/api";
import { Configuration, OpenAIApi } from "openai";

let savedSessionData: AtpSessionData;
import { readFile } from "node:fs/promises";

export const agent = new BskyAgent({
  service: "https://bsky.social"
});

export async function login() {
  // If already logged in, resume session
  if (agent.session) {
    console.log("Already logged in...");
  }
  console.log("Logging in...");
  // See if we have saved session datas
  const sesh = await readFile("./session.json", { encoding: "utf-8" }).catch(
    () => null
  );
  if (sesh) {
    console.log("Found saved session data. Resuming session...");
    savedSessionData = JSON.parse(sesh);
    await agent.resumeSession(savedSessionData);
  } else {
    console.log("No saved session data. Logging in...");
    await agent.login({
      identifier: process.env.BSKY_USERNAME as string,
      password: process.env.BSKY_PASS as string
    });
  }
  return agent;
}
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API
});
export const openai = new OpenAIApi(configuration);
