import * as api from '../api';

//Action Creators

export const getCampaign = () => async (dispatch) => {
    try {
        const {campaignData} = await api.fetchData();

        dispatch({type:'FETCH_ALL', payload: campaignData})
    } catch (error) {
        console.log(error)
    }
}