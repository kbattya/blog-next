import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const updateMesaages = (chats, chatId, message) => {
	return chats.map((chat) => chat.id === chatId
						? {...chat, messages: [...chat.messages, message]}
						: chat
)}

export const chatStore = create(persist(set => ({	
		chats: [
				{
					id: 1,
					title: "AI Chat Tool Ethics",
					messages: [],
					createdAt: new Date(),
				},
				{
					id: 2,
					title: "Al Chat Tool Impact Writing",
					messages: [],
					createdAt: new Date(),
				},
			],
    setChats: (chats) => set((state) => ({ ...state, chats })),
		onAddNewMessage: (chatID, newMessage) => set((state) => ({ ...state, chats: updateMesaages(state.chats, chatID, newMessage)})),
		selectedChat: null,
    setSelectedChat: (selectedChat) => set((state) => ({ ...state, selectedChat })),
})));

export const userStore = create(persist(set => ({	
	user: null,
	setUser: (user) => set((state) =>  ({ ...state, user })),
})));