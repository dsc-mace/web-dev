class Requests {
    static apiBaseUrl =
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
            ? 'http://metics.us:8000'
            : 'http://metics.us:8000'

    static getHeaders(token) {
        return {
            'Content-Type': 'application/json',
            ...(token && { Authorization: 'Token ' + token }),
        }
    }

    static getJsonData(obj) {
        return JSON.stringify(obj)
    }
}

export default Requests
