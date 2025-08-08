"use client"
import React from 'react'
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

function ChatBox() {
    const onsend=() => {

    }
  return (
    <div className='h-[85vh] flex flex-col'>
        <section className='flex-1 overflow-y-auto p-4'>
            <div className='flex justify-end mt-2'>
                <div className='max-w-lg bg-primary text-white p-4 p-2 rounded-lg'>
                    User Msg
                </div>
            </div>
            <div className='flex justify-start mt-2'>
                <div className='max-w-lg bg-primary text-white p-4 p-2 rounded-lg '>
                    AI Agent Msg
                </div>
            </div>
        </section>
        <section>
            <div className="border rounded-2xl p-4 relative">
            <Textarea
              placeholder="create a trip for Paris from India..."
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0"
            />
            <Button size={"icon"} className="absolute bottom-6 right-6 hover:scale-105 transition-all duration-300" onClick={() => onsend()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </section>
    </div>
  )
}

export default ChatBox