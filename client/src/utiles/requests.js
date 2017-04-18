import axios from 'axios';

async function request(config) {

    return new Promise(async (resolve, reject) => {

        let response = {};

        try {
            response = await axios(config);
            response.error = false;

            resolve(response);

        }
        catch(e) {
            response = e.response;
            response.error = true;

            reject(response);

        }

    });

}

export default request;
