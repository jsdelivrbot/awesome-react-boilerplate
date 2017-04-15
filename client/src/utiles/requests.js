import React, { Component } from 'react';
import axios from 'axios';

async function requestCall(method, url, options, successHandler, errorHandler) {
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

        if(successHandler)
            successHandler(response);
    }
    catch(e) {
        response = e;
        if(errorHandler)
            errorHandler(e);
    }
  
  return response;
}


export default requestCall;
