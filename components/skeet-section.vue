<script setup lang="ts">
import { FeedViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

defineProps<{
  feed: FeedViewPost[];
}>();
</script>
<template>
  <section
    v-for="{ post, reply } in feed"
    class="bg-light-400 w-600px rounded-md p-2 shadow-xl flex pr-4 pb-1 p-3 gap-4 border-blue-900 border-solid"
  >
    <img :src="post.author.avatar" class="rounded-full w-12 h-12" alt="" />
    <div class="flex flex-col w-full gap-2">
      <div class="text-green-600">
        {{ post.author.displayName }} - {{ post.author.handle }}
      </div>

      <div class="tracking-wide text-base">
        {{ (post.record as any)?.text }}
      </div>
      <div v-if="reply?.parent.author.handle" class="text-light-blue-300">
        Reply: {{ reply?.parent.author.handle }}
      </div>
      <div class="text-orange-400 flex gap-3 justify-end items-center">
        <div>↻{{ post.repostCount }}</div>
        <div>❤{{ post.likeCount }}</div>
        <div>↩{{ post.replyCount }}</div>
      </div>
    </div>
  </section>
</template>
