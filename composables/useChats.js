export const useChats = () => {
  const chats = useState("chats", () => [
    {
      id: 1,
      name: "Alex Johnson",
      lastMessage: "See you at the library!",
      time: "5m ago",
      messages: [
        { from: "them", text: "Hey, you free now?" },
        { from: "me", text: "Yeah, what’s up?" },
        { from: "them", text: "Let’s meet at the library." },
      ],
    },
    {
      id: 2,
      name: "Grace Lee",
      lastMessage: "Okay. Talk soon!",
      time: "2h ago",
      messages: [
        { from: "me", text: "Don’t forget the meeting" },
        { from: "them", text: "Okay. Talk soon!" },
      ],
    },
  ]);

  const getChatById = (id) =>
    chats.value.find((chat) => chat.id === Number(id));

  const sendMessage = (id, message) => {
    const chat = getChatById(id);
    if (chat) {
      chat.messages.push({ from: "me", text: message });
      chat.lastMessage = message;
      chat.time = "Just now";
    }
  };

  return { chats, getChatById, sendMessage };
};
