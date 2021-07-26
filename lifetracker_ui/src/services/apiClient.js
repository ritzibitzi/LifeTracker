import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "art_token"
    }

    setToken(token) {
        this.token = token
    }
    
    getToken() {
        return {
            token: this.token,
            local: localStorage.getItem(this.tokenName),
        };
    }

    async request( { endpoint, method = `GET`, data = {}} ) {
        const url = `${this.remoteHostUrl}/${endpoint}`;

        const headers = {
            "Content-Type": "application/json",
            Authorization: this.token ? `Bearer ${this.token}` : "",
        };

        try {
            const res = await axios({ url, method, data, headers })
            return { data: res.data, error: null }
        } catch (error) {
            console.error("APIclient.makeRequest.error:");
            console.error({ errorResponse: error.response })
            const message = error?.response?.data?.error?.message
            return { data: null, error: message || String(error) }
        }
    }

    async loginUser(credentials) {
        return await this.request( { endpoint:`auth/login`, method: `POST`, data: credentials })
    }

    async registerUser(credentials) {
        return await this.request( { endpoint:`auth/register`, method: `POST`, data: credentials })
    }

    async getUser() {
        return await this.request({ endpoint: `auth/user`, method:`GET `});
    }

    async logout() {
        this.setToken(null);
        localStorage.setItem(this.tokenName, "")
    }
}

export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL ||"http://localhost:3001")