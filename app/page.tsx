"use client";
import { useCallback, useState } from "react";
import { Session, Chatbox } from "@talkjs/react";

function Chat() {
  const [user, setUser] = useState("sample_user_sebastian");

  const syncConversation = useCallback((session: any) => {
    const conversation = session.getOrCreateConversation("sample_conversation");

    conversation.setParticipant(session.me);

    return conversation;
  }, []);

  return (
    <div className="flex flex-col items-center pt-12 gap-y-12">
      <div className="flex gap-x-4">
        <div>
          <input
            type="radio"
            value="sample_user_sebastian"
            checked={user === "sample_user_sebastian"}
            onChange={(event) => setUser(event.target.value)}
          />
          Sebastian
        </div>
        <div>
          <input
            type="radio"
            value="sample_user_alice"
            checked={user === "sample_user_alice"}
            onChange={(event) => setUser(event.target.value)}
          />
          Alice
        </div>
      </div>
      <Session appId="t3Z6i245" userId={user}>
        <Chatbox
          showChatHeader={false}
          syncConversation={syncConversation}
          style={{ width: "100%", height: "600px" }}
        />
      </Session>
    </div>
  );
}

export default Chat;
