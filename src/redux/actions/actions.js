export function selectProduct (product) {
    return {
        type: 'SELECT_PRODUCT',
        payload: product
    }
}

export function likeProduct (id) {
    return {
        type: 'LIKE_PRODUCT',
        payload: id
    }
}

export function delLikeProduct (id) {
    return {
        type: 'DEL_LIKE_PRODUCT',
        payload: id
    }
}

export function onLoadedMenu (menu) {
    return {
        type: 'LOADED_MENU',
        payload: menu
    }
}

export function onLoadedCategory (category) {
    return {
        type: 'LOADED_CATEGORY',
        payload: category
    }
}

export function onCategoryActive (id) {
    return {
        type: 'CATEGORY_ACTIVE',
        payload: id
    }
}

export function onError () {
    return {
        type: 'ERROR'
    }
}

export function addBasket (item) {
    return {
        type: 'ADD',
        payload: item
    }
}

export function delBasket (id) {
    return {
        type: 'DEL',
        payload: id
    }
}

export function addStillBasket (id) {
    return {
        type: 'STILL',
        payload: id
    }
}

export function handelShow (name, items) {
    return{
        type: 'HANDEL_SHOW',
        payload: items,
        name
    }
}

export function handelHide (name, items) {
    return{
        type: 'HANDEL_HIDE',

    }
}