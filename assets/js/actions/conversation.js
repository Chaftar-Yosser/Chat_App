import {GET_CONVERSATIONS, GET_MESSAGES} from "../constants/actionType";

export const setConversations = (data) => {
    // console.log(data);
    return {
        type: GET_CONVERSATIONS,
        items: data
    }
}

export const setMessages = (data , id) => {
    // console.log(data , id);
    return {
        type: GET_MESSAGES,
        messages: data ,
        conversationId: id
    }
}

export const fetchConversations = () => dispatch => {
    return fetch(`/conversations/`)
        .then(data => data.json())
        .then(data => {
            return dispatch(setConversations(data));
        })
};

export const fetchMessages = (id) => dispatch => {
    return fetch(`/messages/${id}`)
        .then(data => data.json())
        .then(data => {
            return dispatch(setMessages(data ,id));
        })
};

export const postMessage = (content , id) => dispatch => {

    let formData = new FormData();
    formData.append('content', content);

    return fetch(`/messages/${id}` , {
        method: 'POST',
        body: formData
    })
        .then(data => data.json())
        .then(data => {
            // return dispatch(setMessages(data ,id));
        })
};
