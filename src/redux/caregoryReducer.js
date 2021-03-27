import categoryItem from "../components/mainPage/menuCategory/categoryItem/categoryItem";

const initialState = {
    category: [],
    activeId: null
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED_CATEGORY':

            const category = action.payload

            category.forEach(item => {
                if (item._id === state.activeId){
                    item.active = true
                } else {
                    item.active = false
                }
            })

            return {...state, category}

        case 'CATEGORY_ACTIVE':

            const newCategory = state.category.concat()
            newCategory.forEach(item => {
                if (item._id === action.payload) {
                    item.active = true
                } else item.active = false
            })
            return {...state, category: newCategory, activeId: action.payload}

        default:
            return state
    }
}