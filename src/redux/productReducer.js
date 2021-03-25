const initialState = {
    menuItems: [],
    sort: [],
    likedProduct: [],
    loading: true,
    error: false
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED_MENU':
            state.loading = false

            return {...state, menuItems: action.payload}

        case 'ERROR':
            state.error = true
            return state

        case 'SELECT_PRODUCT':
            const newArr = state.menuItems.filter(item => item.category === action.payload);

            return {...state, sort: newArr};

        case 'LIKE_PRODUCT':
            if(!action.payload) return state;

            const newLikedProduct = state.likedProduct.concat();

            const newMenuItem = state.menuItems.concat().find(item => item._id === action.payload);

            newLikedProduct.push(newMenuItem);

            return {...state, likedProduct: newLikedProduct}

        case 'DEL_LIKE_PRODUCT':
            const clearLikedProduct = state.likedProduct.concat().filter(item => action.payload !== item._id);

            return {...state, likedProduct: clearLikedProduct}

        default:
            return state
    }
}