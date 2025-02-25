import { AIDesignIdea } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { prompt } = await req.json();

    try {
        const result = await AIDesignIdea.sendMessage(prompt);
        
        // Read the response properly
        const responseText = await result.response.text();
        console.log("Raw AI Response:", responseText); // Debugging

        let parsedResponse;
        try {
            parsedResponse = JSON.parse(responseText);
        } catch (parseError) {
            console.error("Error parsing AI response:", parseError);
            return NextResponse.json({ error: "Invalid AI response format" }, { status: 500 });
        }

        // ✅ Extract `ideas` array correctly
        if (parsedResponse && Array.isArray(parsedResponse.ideas)) {
            return NextResponse.json(parsedResponse.ideas); // Return the array directly
        } else {
            console.error("Unexpected AI response format:", parsedResponse);
            return NextResponse.json([], { status: 200 }); // Return empty array instead of an error
        }
    } catch (e) {
        console.error("Error in API:", e);
        return NextResponse.json({ error: "AI processing failed" }, { status: 500 });
    }
}
