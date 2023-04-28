import axios from 'axios';

export default axios.create({
    baseURL:'https://a4d1-2804-431-e7db-9def-3d65-b971-cc99-a93.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});