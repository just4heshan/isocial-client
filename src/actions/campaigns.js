import * as api from '../api';

//Action Creators

export const getCampaign = () => async (dispatch) => {
    try {
        const {data} = await api.fetchData();

        dispatch({type:'FETCH_ALL', payload: data})
        console.log(data.value)
    } catch (error) {
        console.log(error)
    }
}