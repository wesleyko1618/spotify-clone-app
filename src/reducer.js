export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
};

// action is how the data layer looks like (like set what song is playing), state is how it is
const reducer = (state, action) => {
    // This is for debugging
    console.log(action);

    // action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                // ...state keeps whatever is in the current state. without this it overwrites entire state
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            };
            
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };    

        default:
            return state;
    }
}

export default reducer;