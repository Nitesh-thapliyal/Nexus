import * as actionTypes from "./ActionType";
import api from "@/Api/api";

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
    