import * as actionTypes from "./ActionType";
import api from "@/Api/api";
import { deepStrictEqual } from "assert";

export const sendMessage = (messageData) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.SEND_MESSAGE_REQUEST});
        try{
            const response = await api.post(
                "api/messages/send",
                messageData
            );
            dispatch({
                type: actionTypes.SEND_MESSAGE_SUCCESS,
                message: response.data,
            });
        }catch(error){
            dispatch({
                type: actionTypes.SEND_MESSAGE_FAILURE,
                error: error.message
            })
        }
    }
}

export const fetchChatByProject = (projectId) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST});
        try {
            const response = await api.get(
                `/api/projects/${projectId}/chat`
            );
            console.log("fetch chat ", response.data);
            dispatch({
                type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS,
                chat: response.data
            });
        } catch (error) {
            console.log("error -- ", error)
            dispatch({
                type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE,
                error: error.message
            })
        }
    }
}

export const fetchChatMessage = (chatId) => {
    return async(dispatch) => {
        dispatch({type: actionTypes.FETCH_CHAT_MESSAGE_REQUEST});
        try{
            const response = await api.get(`/api/message/chat/${chatId}`)
            console.log("fetch message ", response.data);
            dispatch({
                type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS,
                chatId,
                message: response.data
            });
        }
        catch(error){
            console.log("error -- ", error);
            dispatch({
                type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE,
                error: error.message
            })
        }
    }
}