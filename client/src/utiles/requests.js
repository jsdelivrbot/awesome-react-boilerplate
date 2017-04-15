import React, { Component } from 'react';
import axios from 'axios';

async function requestCall(method, url, params, successHandler, errorHandler) {
  const response = {};
  
  try {
      switch (method) {
        case: 'get':
            response = await axios.get(url, {params: params});
            break;
        case: 'post':
            response = await axios.post(url, payload);
            break;
      }
      
      successHandler(response);
  } 
  catch(e) {
    response = e;
    errorHandler(e);
  }
  
  return response;
}

export defualt requestCall;
