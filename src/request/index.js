import axios from 'axios';

const HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
};

export const post = (url, data, requestParams, headers) => {
    debugger;
    return axios({
        method: 'post',
        url: url,
        data: data,
        params: requestParams,
        config: { headers: {...headers, ...HEADERS }},
        headers: {...headers, ...HEADERS },
    });
};

export const get = (url, requestParams) => {
    return axios({
        method: 'get',
        url: url,
        data: requestParams,
        params: requestParams,
        headers: HEADERS,
    });
};