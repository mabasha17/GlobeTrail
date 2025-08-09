"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { Loader } from "lucide-react";
import EmptyBoxState from "./EmptyBoxState";

type Message = {
  role: string;
  content: string;
};
function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const onsend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setUserInput("");

    const newMessage: Message = {
      role: "user",
      content: input,
    };
    setMessages((prev: Message[]) => [...prev, newMessage]);

    const result = await axios.post("/api/aimodel", {
      messages: [...messages, newMessage],
    });
    setMessages((prev: Message[]) => [
      ...prev,
      {
        role: "assistant",
        content: result?.data?.resp,
      },
    ]);
    console.log(result.data);
    setLoading(false);
  };
  return (
    <div className="h-[85vh] flex flex-col">
      {messages.length === 0 && (
        <EmptyBoxState
          onSelectOption={(v: string) => {
            setUserInput(v);
            onsend();
          }}
        />
      )}

      {/* // Display messages */}
      <section className="flex-1 overflow-y-auto p-4">
        {/* // Display messages */}
        {messages.map((msg: Message, index) =>
          msg.role == "user" ? (
            <div className="flex justify-end mt-2" key={index}>
              <div className="max-w-lg bg-primary text-white p-4 p-2 rounded-lg">
                {msg.content}
              </div>
            </div>
          ) : (
            <div className="flex justify-start mt-2" key={index}>
              <div className="max-w-lg bg-gray-200 p-4 p-2 rounded-lg flex items-center ">
                {msg.content}
              </div>
            </div>
          )
        )}
        {loading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-gray-200 p-4 p-2 rounded-lg flex items-center">
              <Loader className="animate-spin h-5 w-5 mr-2" />
              Generating response...
            </div>
          </div>
        )}
      </section>
      <section>
        <div className="border rounded-2xl p-4 relative">
          <Textarea
            placeholder="Enter your message here..."
            className="w-full h-28 bg-transparent border-none focus-visible:ring-0"
            onChange={(event) => setUserInput(event.target.value)}
            value={input}
          />
          <Button
            size={"icon"}
            className="absolute bottom-6 right-6 hover:scale-105 transition-all duration-300"
            onClick={() => onsend()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ChatBox;
