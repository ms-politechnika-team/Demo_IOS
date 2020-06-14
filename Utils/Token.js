export class Token {
    constructor() {
        this.token = null
    }

    clear() {
        this.token = null
    }

    setToken(tokenString) {
        this.token = tokenString
    }

    isValid() {
        return this.getToken() !== null
    }

    getToken() {
        return this.token
    }
}