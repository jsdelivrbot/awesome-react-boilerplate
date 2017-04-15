import React, { Component } from 'react';
import axios from 'axios';

function requestCall(method, url, options, successHandler, errorHandler) {
  // add here your code before any request call, for example loading spinner.
  
  switch (method) {
    case: 'get':
      get(url, options, successHandler, errorHandler);
      break;
     case: 'post':
      get(url, options, successHandler, errorHandler);
      break;
  }

}

function* get(url, params, successHandler, errorHandler) {
  const request = yield axios.get(url, {params: params});
  
  return request;
}

function* post(url, payload, successHandler, errorHandler) {
  const request = yield axios.post(url, payload);
  
  return request;
}


export defualt requestCall;
