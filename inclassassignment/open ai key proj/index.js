import OpenAI from "openai";
let api = "ssk-proj-gRrsNmpWIyQRQl3pZykcT3BlbkFJChb7gnInLU2A6WIpreaG";
const openai = new OpenAI(api);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "give me one best thing from each country" },
      {role:"user",content:"best food"}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();