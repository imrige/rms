import Axios from 'axios';

const request = Axios.create({
    responseType: "json",
    validateStatus: (status => {
        return status === 200;
    })
});


request.interceptors.request.use(
    config => {
        return config;
    }, err => {
        return Promise.reject(err);
    }
);

request.interceptors.response.use(
    res => {
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);

export default {
    // GET
    get(url, params) {
        let _params;
        if (Object.is(params, undefined)) _params = '';
        else {
            _params = '?';
            for (let key in params) {
                if (params.hasOwnProperty(key) && params[key] !== null) _params += `${key}=${params[key]}&`;
            }
            _params = _params.slice(0, _params.length - 1);
        }

        return request.get(`${url}${_params}`);
    },
    // POST
    post(url, params) {
        return request.post(url, params, {
            transformRequest: [
                params => {
                    let result = '';
                    if (!params) return;
                    Object.keys(params).forEach(key => {
                        if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&';
                    });
                    return result;
                }
            ]
        });
    },
    // PUT
    put(url, params) {
        return request.put(url, params, {
            transformRequest: [(params) => {
                let result = '';
                Object.keys(params).forEach((key) => {
                    if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
                        result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
                    }
                });
                return result
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },
    // DELETE
    delete(url, params) {
        let _params;
        if (Object.is(params, undefined)) _params = '';
        else {
            _params = '?';
            for (let key in params) {
                if (params.hasOwnProperty(key) && params[key] !== null) _params += `&${key}=${params[key]}`;
            }
            _params = _params.replace("&", "");
        }
        return request.delete(`${url}${_params}`);
    }
};
