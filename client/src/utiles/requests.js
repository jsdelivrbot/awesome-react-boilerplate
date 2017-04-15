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

async function get(url, params, successHandler, errorHandler) {
  const request;
  
  try {
    request = await axios.get(url, {params: params});
  } catch(e) {
    request = e;
  }
  
  return request;
}

async function post(url, payload, successHandler, errorHandler) {
  const request;
  
  try {
    request = await axios.post(url, payload);
  } catch(e) {
    request = e;
  }
  
  return request;

}

export defualt requestCall;
