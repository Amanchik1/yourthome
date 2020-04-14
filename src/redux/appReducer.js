import {setDataRefresh} from "./authReducer";
import api from "../api/api";

const INITIALIZE_SUCCEED = "INITIALIZE_SUCCEED";
const INITIALIZE_REGIONS = "INITIALIZE_REGIONS";
const INITIALIZE_TYPES = "INITIALIZE_TYPES";
const INITIALIZE_SERIES = "INITIALIZE_TYPES";
const INITIALIZE_CTYPES = "INITIALIZE_CTYPES";

let initialState = {
    initialise: false,
    regions: [],
    types: [],
    constructionType: [],
    series: []
}


export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE_SUCCEED:
            return {
                ...state,
                initialise: true
            }
        case INITIALIZE_REGIONS:
            return {
                ...state,
                regions: [...action.data]
            }
        case INITIALIZE_TYPES:
            return {
                ...state,
                types: [...action.data]
            }
        case INITIALIZE_CTYPES:
            return {
                ...state,
                constructionType: [...action.data]
            }
        case INITIALIZE_SERIES:
            return {
                ...state,
                series: [...action.data]
            }
        default:
            return {
                ...state
            }
    }
}


export const initializeSuccess = () => {
    return {
        type: INITIALIZE_SUCCEED
    }
}
export const initializeRegions = (data) => {
    return {
        type: INITIALIZE_REGIONS,
        data
    }
}

export const initializeTypes = (data) => {
    return {
        type: INITIALIZE_TYPES,
        data
    }
}
export const initializeSeries = (data) => {
    return {
        type: INITIALIZE_SERIES,
        data
    }
}

export const initializeCTypes = (data) => {
    return {
        type: INITIALIZE_CTYPES,
        data
    }
}

export const initializeAppData = () => (dispatch) => {
    api.getTypes().then(res => dispatch(initializeTypes(res.data)))
    // api.getSeries().then(res => dispatch(initializeSeries(res.data)))
    api.getRegions().then(res => dispatch(initializeRegions(res.data)))
    api.getConstructionType().then(res => dispatch(initializeCTypes(res.data)))
}
export const initializeApp = () => (dispatch) => {
    let data = JSON.parse(localStorage.getItem('userData'));
    if (!data) {
        dispatch(initializeSuccess())
    } else {
        let promise = dispatch(setDataRefresh())
        Promise.all([promise]).then(() => {
            dispatch(initializeSuccess())
        })
    }
}
