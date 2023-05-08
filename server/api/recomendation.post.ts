import { openai } from "../utils/auth";

export default defineEventHandler(async (event) => {
  const { text }: { text: string } = await readBody(event);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `You are a ${text} developer. Write a funny tweet for your twitter account about being a ${text}.  Write it in a natural way, not hashtags, not #. `,
    max_tokens: 256,
    frequency_penalty: 0,
    temperature: 1
  });
  console.log("response", response.data);

  // return response.data.choices[0].text;
  return response.data.choices[0].text;
});
