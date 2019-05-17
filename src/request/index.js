import axios from 'axios';

const HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
};

export const post = (url, requestParams) => {
    return axios({
        method: 'post',
        url: url,
        data: requestParams,
        params: requestParams,
        headers: HEADERS,
    });
};