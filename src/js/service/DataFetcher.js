import axios from 'axios';

export default class DataFetcher {
    async fetch(endpoint) {
        const response = await axios.get(endpoint);
        return response.data;
    }
}
