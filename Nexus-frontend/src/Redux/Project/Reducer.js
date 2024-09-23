import { ACCEPT_INVITATION_REQUESTS, CREATE_PROJECTS_REQUESTS, CREATE_PROJECTS_SUCCESS, CREATE_PROJECT_SUCCESS, DELETE_PROJECTS_REQUESTS, DELETE_PROJECT_SUCCESS, FETCH_PROJECTS_BY_ID_SUCCESS, FETCH_PROJECTS_REQUESTS, FETCH_PROJECTS_SUCCESS, FETCH_PROJECT_BY_ID_SUCCESS, INVITE_TO_PROJECTS_REQUESTS, SEARCH_PROJECT_SUCCESS } from "./ActionTypes";


const initialState = {
    projects: [],
    loading: false,
    error: null,
    projectDetails: null,
    searchProjects: []
}

export const projectReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_PROJECTS_REQUESTS:
        case CREATE_PROJECTS_REQUESTS:
        case DELETE_PROJECTS_REQUESTS:
        case FETCH_PROJECTS_REQUESTS:
        case ACCEPT_INVITATION_REQUESTS:
        case INVITE_TO_PROJECTS_REQUESTS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state, loading: false,
                projects: action.payload,
                error: null
            };
        case SEARCH_PROJECT_SUCCESS:
            return {
                ...state, loading: false,
                searchProjects: action.payload,
                error: null
            };
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state, loading: false,
                projects: [...state.projects, action.project],
                error: null
            };
        case FETCH_PROJECT_BY_ID_SUCCESS:
            return {
                ...state, loading: false,
                projectDetails: action.project,
                error: null
            };
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state, loading: false,
                projects: state.projects.filter((project) => project.id === action.projectId),
                error: null
            };
        default:
            state;
    }

}