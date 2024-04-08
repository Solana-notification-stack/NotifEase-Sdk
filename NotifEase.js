// Import Axios module
const axios = require('axios');

// Define the base URL for your API
const baseURL = 'https://api-7szm3raj4q-uc.a.run.app';

// Create a class for your SDK
class NotifEase {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    // Method to make a GET request to your API
    async get(endpoint) {
        try {
            const response = await axios.get(`${baseURL}${endpoint}`, {
                headers: {
                    'Authorization': `${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to make GET request: ${error}`);
        }
    }

    // Method to make a POST request to your API
    async post(endpoint, data) {
        try {
            const response = await axios.post(`${baseURL}${endpoint}`, data, {
                headers: {
                    'Authorization': `${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to make POST request: ${error.message}`);
        }
    }

    // Method to make a POST request to your API
    async registerUser(userId,notificationToken) {
        try {
            const data = {
                userIdentifier:userId,
                notificationToken
            }
            const response = await axios.post(`${baseURL}/subscribeUser`, data, {
                headers: {
                    'Authorization': `${this.apiKey}`
                }
            });
            return true;
        } catch (error) {
            console.log(error)
            throw new Error(`Failed to register User: ${error}`);
        }
        
    }

    async subscribeCampaign(userId,campaignId) {
        try {
            const data = {
                userId
            }
            const response = await axios.post(`${baseURL}/appJoinCampaign/${campaignId}`, data, {
                headers: {
                    'Authorization': `${this.apiKey}`
                }
            });
            return true;
        } catch (error) {
            console.log(error)
            throw new Error(`Failed to register User for campaign: ${error}`);
        }
        
    }

    async unSubscribeCampaign(userId,campaignId) {
        try {
            const data = {
                userId
            }
            const response = await axios.post(`${baseURL}/appUnsubscribeCampaign/${campaignId}`, data, {
                headers: {
                    'Authorization': `${this.apiKey}`
                }
            });
            return true;
        } catch (error) {
            console.log(error)
            throw new Error(`Failed to unsubcribe User for campaign: ${error}`);
        }
        
    }


    
}

module.exports = NotifEase;
