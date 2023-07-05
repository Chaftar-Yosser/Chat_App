import {
    ADD_MESSAGE,
    GET_CONVERSATIONS,
    GET_MESSAGES,
    SET_HUBURL,
    SET_LAST_MESSAGE,
    SET_USERNAME
} from "../constants/actionType";

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

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        username
    }
};

export const setHuburl = (hubUrl) => {
    return {
        type: SET_HUBURL,
        hubUrl: hubUrl ,
    }
}

export const setLastMessages = (data , id) => {
    return {
        type: SET_LAST_MESSAGE,
        message: data ,
        conversationId: id
    }
}

export const addMessage = (data , id) => {
    return {
        type: ADD_MESSAGE,
        message: data ,
        conversationId: id
    }
}

export const fetchConversations = () => dispatch => {
    return fetch(`/conversations/`)
        .then(data => {
            const hubUrl = data.headers.get('Link').match(/<([^>]+)>;\s+rel=(?:mercure|"[^"]*mercure[^"]*")/)[1]
            dispatch(setHuburl(hubUrl))
            return  data.json()
        })
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
            dispatch(setLastMessages(data ,id))
            return dispatch(addMessage(data ,id));
        })
};
