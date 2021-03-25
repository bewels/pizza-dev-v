const initialState = {
    menuItems: []
};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            const newMenuItems = state.menuItems.concat()
            action.payload.count = 1;
            newMenuItems.push(action.payload)
            return {...state, menuItems: newMenuItems}
        case 'STILL':
            const newCount = state.menuItems.concat();
            newCount.forEach(item => {
                if (item.id === action.payload){
                    item.count += 1;
                }
            })

            return {...state, menuItems: newCount}
        case 'DEL':
            let clearMenuItems = state.menuItems.concat()
            if (clearMenuItems.find(item => item.id === action.payload).count === 1){
                clearMenuItems = clearMenuItems.filter(item => item.id !== action.payload)
            } else {
                clearMenuItems.map(item => item.id === action.payload ? item.count-- : item)
            }
            return {...state, menuItems: clearMenuItems}

        default:
            return state
    }
}