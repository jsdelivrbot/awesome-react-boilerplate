import axios from 'axios';

async function request(config, successHandler, errorHandler) {
    let response = {};
    
    try {
        response = await axios(config);       
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
