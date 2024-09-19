import api from "@/config/api";
import { CREATE_PROJECTS_REQUESTS, CREATE_PROJECTS_SUCCESS, DELETE_PROJECTS_REQUESTS, DELETE_PROJECTS_SUCCESS, FETCH_PROJECTS_BY_ID_REQUESTS, FETCH_PROJECTS_BY_ID_SUCCESS, SEARCH_PROJECTS_REQUESTS, SEARCH_PROJECTS_SUCCESS } from "./ActionTypes";


export const fetchProjects = ({category, tag}) => async (dispatch) => {
    dispatch({type: FETCH_PROJECTS_BY_ID_REQUESTS})
    try {
        const {data} = await api.get("/api/projects", {params:{category,tag}})
        console.log("all projects", data);
        dispatch({type: FETCH_PROJECTS_BY_ID_SUCCESS, projects:data})
    } catch (error) {
        console.log(error);
    }
}

export const searchProjects = ({keyword}) => async (dispatch) => {
    dispatch({type: SEARCH_PROJECTS_REQUESTS})
    try {
        const {data} = await api.get("/api/projects/search?keyword="+keyword)
        console.log("Search projects", data);
        dispatch({type: SEARCH_PROJECTS_SUCCESS, projects:data})
    } catch (error) {
        console.log(error);
    }
}

export const createProjects = (projectData) => async (dispatch) => {
    dispatch({type: CREATE_PROJECTS_REQUESTS})
    try {
        const {data} = await api.post("/api/projects", projectData)
        console.log("Search projects", data);
        dispatch({type: CREATE_PROJECTS_SUCCESS, projects:data})
    } catch (error) {
        console.log(error);
    }
}

export const fetchProjectById = (id) => async (dispatch) => {
    dispatch({type: FETCH_PROJECTS_BY_ID_REQUESTS})
    try {
        const {data} = await api.get("/api/projects/"+id)
        console.log("projects", data);
        dispatch({type: FETCH_PROJECTS_BY_ID_SUCCESS, projects:data})
    } catch (error) {
        console.log(error);
    }
}


export const deleteProjectById = (projectId) => async (dispatch) => {
    dispatch({type: DELETE_PROJECTS_REQUESTS})
    try {
        const {data} = await api.delete("/api/projects/"+projectId)
        console.log("delete projects", data);
        dispatch({type: DELETE_PROJECTS_SUCCESS, projectId})
    } catch (error) {
        console.log(error);
    }
}