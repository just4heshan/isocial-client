export default (campaigns=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return campaigns;    
        default:
            return campaigns;
    }
}