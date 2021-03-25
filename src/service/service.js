export default class PizzaService {
    constructor () {
        this._apiBase = 'https://vast-basin-51392.herokuapp.com'
    }

    async pizzaResurce (url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            return console.log(new Error(res.status));  
        }

        return await res.json()
    }

    getMenu () {
        return this.pizzaResurce('/menu')
    }

    getCategory () {
        return this.pizzaResurce('/category/getcategory')
    }

}