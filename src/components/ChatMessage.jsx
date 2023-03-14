import React from "react";
import Typing from "./Typing";

const ChatMessage = ({ message, setIsSendingMessage, setIsChatbotTyping }) => {
  return (
    <div className={`chat-message from-${message.from}`}>
      <div className="message-content">
        {message.from === "chatgpt" ? (
          <>
            {message.imageUrl ? (
              <div className="image-message">
                <img
                  src={message.imageUrl}
                  alt="Generated by DALLE API"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
                <p>{message.content}</p>
              </div>
            ) : (
              <Typing
                message={message.content}
                onTypingStart={() => setIsChatbotTyping(true)}
                onTypingComplete={() => setIsChatbotTyping(false)}
              />
            )}
          </>
        ) : (
          <p>{message.content}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
