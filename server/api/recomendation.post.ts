import { openai } from "../utils/auth";

export default defineEventHandler(async event => {
  const { text }: { text: string } = await readBody(event);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      `Write for my ${text} divulgation twitter account a tweet funny tweet about data.\n` +
      `Write it in a natural way. Add some hashtags.`,
    stop: ["\n"],
    max_tokens: 7,
    temperature: 0
  });
  console.log("response", response.data);

  // return response.data.choices[0].text;
  return response.data.choices[0].text;
});
