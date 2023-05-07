import { agent } from "./auth";

export const getTimeline = async () => {
  console.log(`Getting timeline...`);
  const timeline = await agent.getTimeline({
    limit: 25
  });
  if (!timeline.data?.feed) {
    console.log("No timeline data");
    return;
  }
  return timeline.data.feed;
};
