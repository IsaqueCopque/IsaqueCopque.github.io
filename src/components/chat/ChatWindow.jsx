import { useState } from "react";

const ChatWindow = ({ onMessageAdd, messagesList, waitingResponse}) => {

    const [text, setText] = useState("");

    const handleSend = () => {
        const textToSend = text.trim();
        if (!textToSend || textToSend.length < 2) return;
        onMessageAdd(textToSend);
        setText("");
    }

    const MessageBox = ({ messageText, rightSide, isError }) => {
        const messageColorClass = rightSide? "bg-emerald-600 text-white rounded-br-sm" : 
            `rounded-bl-sm ${isError? "bg-red-200 font-medium" : "bg-slate-600 text-white"}`;
        return (
            <div className={`flex mb-3 ${
                rightSide ? "justify-end" : "justify-start"
            }`}>
                <div className={`max-w-[92%] px-4 py-2 rounded-2xl shadow ${messageColorClass}`}>
                        {messageText}
                </div>
            </div>
        );
    }

    return (<div
        className="fixed bottom-24 right-4 left-4 lg:left-auto lg:right-6 w-auto lg:w-96 h-[70vh]
        lg:h-[600px] bg-white rounded-xl shadow-2xl border flex flex-col z-50">

        {/* Header */}
        <div className="p-4 border-b font-bold">
            Chat
        </div>

        <span className="mt-2" />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-2">
            {messagesList.length > 0 ? 
                (
                    messagesList.map((message, index) => (
                        <MessageBox
                        key={index}
                        messageText={message.text}
                        rightSide={message.isSending}
                        isError={message.isError}
                        />
                    ))
                )
                :
                <div className="w-full h-full flex items-center justify-center">
                    <p className="text-2xl md:text-4xl font-semibold text-gray-300 select-none text-center">
                    Send a question
                    </p>
                </div>
            }

            {waitingResponse && (
                <div className="flex justify-start ml-2 mb-3">
                    <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-2xl animate-pulse">
                        Typing...
                    </div>
                </div>
            )}
        </div>

        {/* Input */}
        <div className="p-4 border-t flex gap-2">
            <input
                className="flex-1 border rounded px-3 py-2"
                placeholder="Ask about me..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => { if (e.key == "Enter") handleSend(); }} />

            <button className="bg-slate-700 text-white px-4 rounded 
            disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                onClick={handleSend} disabled={waitingResponse|| text.trim().length < 2}>
                {waitingResponse ? "Sending..." : "Send"}
            </button>
        </div>
    </div>);
}

export default ChatWindow