import * as actionTypes from './ActionType'


const initialState = {
    message: [], 
    loading: false,
    error: null,
    chat: null
};

const ChatReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_MESSAGES_REQUEST:
        case actionTypes.SEND_MESSAGE_REQUEST:
        case actionTypes.FETCH_CHAT_MESSAGE_REQUEST:
            return{
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.FETCH_MESSAGES_SUCCESS:
        case actionTypes.FETCH_CHAT_MESSAGE_SUCCESS:
            return{
                ...state,
                loading: false,
                message: action.messages
            };
        case actionTypes.SEND_MESSAGE_SUCCESS:
            return{
                ...state,
                loading: false,
                messages: [...state.message, action.message]
            };
        case actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                chat: action.chat
            };
        case actionTypes.FETCH_MESSAGES_FAILURE:
        case actionTypes.SEND_MESSAGE_FAILURE:
        case actionTypes.FETCH_CHAT_MESSAGE_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default ChatReducer;