import { NextResponse, NextRequest } from "next/server";

import OpenAI from "openai";
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const PROMT = `You are a helpful assistant that helps users plan trips.
starting location
destination city
group size
trip duration
budget
special requirements
You will be provided with the above information and you will generate a trip plan for the user.
You will also provide a list of places to visit, things to do, and a rough itinerary
for the trip.
dont ask multiple questions at once and never ask irrelevant questions.
if any information is missing, ask the user for that information.
along the response also send which ui component to didplay for generative ui.
The response should be in the json format:
{
  "resp": "your response here",
  "uiComponent": "component name here"
}
`;

export async function POST(request: NextRequest) {
  const { messages } = await request.json();
  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: PROMT,
        },
        ...messages,
      ],
    });
    console.log(completion.choices[0].message);
    const message = completion.choices[0].message;
    let parsed;
    try {
      parsed = JSON.parse(completion.choices[0].message.content ?? "");
    } catch {
      return NextResponse.json(
        { error: "Failed to parse response" },
        { status: 500 }
      );
    }
    return NextResponse.json(parsed);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
