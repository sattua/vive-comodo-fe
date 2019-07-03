import axios from 'axios';

const HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
};

export const post = (url, data, headers) => {
    return axios({
        method: 'post',
        url: url,
        data: data,
        params: data,
        config: { headers: {...HEADERS, ...headers }},
        headers: {...HEADERS, ...headers },
    });
};

export const get = (url, requestParams, headers) => {
    return axios({
        method: 'get',
        url: url,
        params: requestParams,
        config: { headers: {...HEADERS, ...headers }},
        headers: {...HEADERS, ...headers },
    });
};