export default (state = [], action) => {
    switch (action.type) {
        case "GET_ARTICLES": return Object.assign([], action.data)
            break;
        default:
            return state;
    }
}