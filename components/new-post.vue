<script setup lang="ts">
defineProps<{
  modelValue: string;
  postSkeet: () => Promise<void>;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
function onInput(payload: Event) {
  emit("update:modelValue", (payload.target as HTMLInputElement).value);
}
</script>
<template>
  <div
    class="w-600px flex justify-center flex-col gap-2 m-auto border-solid border-purple-900 p-4 rounded-md hover:border-[2.5px]"
  >
    <label
      for="message"
      class="block mb-2 text-xl font-medium text-gray-900 dark:text-white m-auto"
      >New Post</label
    >
    <textarea
      @input="onInput"
      :value="modelValue"
      id="message"
      rows="4"
      class="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
    <button
      @click="postSkeet"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-200px m-auto"
    >
      Send Skeet
    </button>
  </div>
</template>
