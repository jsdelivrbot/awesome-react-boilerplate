import React, { Component } from 'react';
import axios from 'axios';

async function request(method, url, options, successHandler, errorHandler) {
    let response = {};

    try {
        switch (method) {
            case 'get':
                response = await axios.get(url, {params: options});
                break;
            case 'post':
                response = await axios.post(url, options);
                break;
        }

        response.error = false;

        if(typeof successHandler === "function")
            successHandler(response);
    }
    catch(e) {
        response = e;
        response.error = true;

        if(typeof errorHandler === "function")
            errorHandler(e);
    }

    return response;
}


export default request;
