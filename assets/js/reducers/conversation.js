import {GET_CONVERSATIONS, GET_MESSAGES} from "../constants/actionType";
import {object} from "prop-types";

export default (
    state = {
        items: []
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
        default :
            return state
    }
}