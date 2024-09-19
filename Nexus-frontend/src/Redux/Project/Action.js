import api from "@/config/api";
import { FETCH_PROJECTS_BY_ID_REQUESTS, FETCH_PROJECTS_BY_ID_SUCCESS } from "./ActionTypes";


export const fetchProjects = ({category, tag}) => async (dispatch) => {
    dispatch({type: FETCH_PROJECTS_BY_ID_REQUESTS})
    try {
        const {data} = await api.get("/api/projects", {params:{category,tag}})
        console.log("all projects", data);
        dispatch({type: FETCH_PROJECTS_BY_ID_SUCCESS})
    } catch (error) {
        console.log(error);
    }
}