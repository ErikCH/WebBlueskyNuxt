<script setup lang="ts">
import { ref, onMounted } from "vue";
import { FeedViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
import NewPost from "@/components/new-post.vue";
import SkeetSection from "@/components/skeet-section.vue";
const skeetText = ref("");
const feed = ref<FeedViewPost[]>([]);
const background = useState("background", () => false);

onMounted(async () => {
  await grabTimeline();
});

async function grabTimeline() {
  feed.value = await $fetch("/api/timeline");
}

async function getRecommendation(str: string) {
  if (str === "Choose") return;
  background.value = true;
  const recommendation = await $fetch("/api/recomendation", {
    method: "POST",
    body: { text: str }
  });
  skeetText.value = recommendation
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^"(.*)"$/, "$1")
    .replace(/\#[^\s]*/g, "");
  background.value = false;
}

async function postSkeet() {
  if (!skeetText.value) return;
  const sendSkeet = await $fetch("/api/skeet", {
    method: "post",
    body: { text: skeetText.value }
  });
  skeetText.value = "";
  console.log("sendSkeet", sendSkeet);
  grabTimeline();
}
</script>

<template>
  <h1 class="text-4xl text-blue-500 text-center mb-10">Bluesky Web Client</h1>

  <div class="flex flex-col items-center gap-6">
    <new-post
      :get-recommendation="getRecommendation"
      v-model="skeetText"
      :post-skeet="postSkeet"
    />
    <skeet-section :feed="feed" />
  </div>
</template>
