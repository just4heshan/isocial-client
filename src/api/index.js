import axios from "axios";

const url = "https://socialawarenessapi.herokuapp.com/api/campaigns";

export const fetchData = () => axios.get(url);
