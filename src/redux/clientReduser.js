const initialState = {
    show : false,
    name: '',
    items: null
};

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'HANDEL_SHOW':
            console.log(action.payload);
            return {
                ...state,
                show: true,
                name: action.name,
                items: action.payload
            }

        case 'HANDEL_HIDE':
            return {
                ...state, 
                show: false
            }
        default:
            return state
    }
}