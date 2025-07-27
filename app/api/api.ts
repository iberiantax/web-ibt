import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.7timer.info/bin/astro.php'
});

export {api};