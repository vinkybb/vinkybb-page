import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateCode(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert programmer. Write clean, efficient, well-documented code."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating code:', error.message);
    throw error;
  }
}

// 使用示例
const prompt = process.argv[2] || "Write a function to calculate fibonacci numbers";

console.log('Generating code for:', prompt);
console.log('---');

generateCode(prompt)
  .then(code => {
    console.log(code);
  })
  .catch(error => {
    console.error('Failed:', error);
  });
