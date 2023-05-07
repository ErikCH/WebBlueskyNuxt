import { RichText } from "@atproto/api";
import { agent } from "./auth";

export async function post(val: string) {
  const rt = new RichText({
    text: val
  });
  await rt.detectFacets(agent); // automatically detects mentions and links
  const postRecord = {
    $type: "app.bsky.feed.post",
    text: rt.text,
    facets: rt.facets,
    createdAt: new Date().toISOString()
  };
  const res = await agent.app.bsky.feed.post.create(
    {
      repo: agent.session?.did
    },
    postRecord
  );
  console.log(res);
}
