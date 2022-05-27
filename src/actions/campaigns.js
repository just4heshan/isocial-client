import * as api from '../api/index.js';

//Action Creators

export const getCampaign = () => async (dispatch) => {
    try {
        const {data} = await api.fetchData();

        dispatch({type:'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createCampaign = (campaign) => async (dispatch) => {
    try {
        const {data} = await api.createCampaign(campaign);

        dispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

