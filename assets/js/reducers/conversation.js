import {
    ADD_MESSAGE,
    GET_CONVERSATIONS,
    GET_MESSAGES,
    SET_HUBURL,
    SET_LAST_MESSAGE,
    SET_USERNAME
} from "../constants/actionType";
import {object} from "prop-types";

export default (
    state = {
        items: [],
        hubUrl: null,
        username: null,
    },
    action
) => {
    switch(action.type) {
        case GET_CONVERSATIONS:
            // console.log(action.items);
            return {
                ...state,
                items: action.items
            }

        case GET_MESSAGES:
            const _newConversations = state.items.map(conversation => {
                // console.log(conversation);
                return conversation.conversationId == action.conversationId
                    ? Object.assign({}, conversation , {messages:action.messages})
                    : conversation
                ;
            })
            return {
                ...state,
                items: _newConversations
            }

        case SET_LAST_MESSAGE:
            const _newConversationsWithLastMessage = state.items.map(conversation => {
                return conversation.conversationId == action.conversationId
                    ?
                    (
                        conversation.content = action.message.content,
                        conversation.createdAt = action.message.createdAt,
                        Object.assign({}, conversation )
                    )
                    : Object.assign({}, conversation )
                    ;
            })
            return {
                ...state,
                items: [..._newConversationsWithLastMessage]
            }

        case ADD_MESSAGE:
            const _newConversationsWithNewMessage = state.items.map(conversation => {
                return conversation.conversationId == action.conversationId
                    ? Object.assign({}, conversation , {messages:[...conversation.messages, action.message]})
                    : Object.assign({}, conversation )
                    ;
            })
            return {
                ...state,
                items: [..._newConversationsWithNewMessage]
            }

        case SET_HUBURL:
            return {
                ...state,
                hubUrl: action.hubUrl
            }

        case SET_USERNAME:
            return {
                ...state,
                username: action.username
            }
        default :
            return state
    }
}