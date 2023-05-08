<script setup lang="ts">
import { ref } from "vue";
import LoadingSpinner from "@/components/loading-spinner.vue";
const background = useState<boolean>("background");

const selected = ref("Choose");
defineProps<{
  modelValue: string;
  postSkeet: () => Promise<void>;
  getRecommendation: (str: string) => Promise<void>;
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
    class="w-600px flex justify-center flex-col gap-2 m-auto border-solid border-purple-900 p-4 rounded-md hover:border-[2.5px] relative"
  >
    <LoadingSpinner v-if="background" class="absolute top-27% left-47%" />
    <label
      for="message"
      class="block mb-2 text-xl font-medium text-gray-900 m-auto"
      >New Post</label
    >
    <textarea
      @input="onInput"
      :value="modelValue"
      id="message"
      rows="4"
      :disabled="background"
      class="disabled:opacity-20 block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
    <button
      :disabled="background"
      @click="postSkeet"
      class="disabled:bg-cool-gray-100 disabled:pointer-events-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-200px m-auto"
    >
      Send Skeet
    </button>
    <hr class="h-px my-8 bg-gray-200 border-0 w-full" />

    <div class="flex justify-end items-center">
      <select
        v-model="selected"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      >
        <option selected disabled value="Choose">Choose AI Response</option>
        <option value="Web Developer">Web Developer</option>
        <option value="Data Science">Data Science</option>
        <option value="React Developer">React Developer</option>
        <option value="Vue Developer">Vue Developer</option>
      </select>
      <button
        @click="getRecommendation(selected)"
        class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
      >
        Generate Response
      </button>
    </div>
  </div>
</template>
