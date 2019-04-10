import _ from 'underscore';
const crypto = require("crypto");


export const VerfyAC = (params, private_key) => {

    const keySort = (params) => {
        let keys = _.keys(params), params_sort = {};
        keys.sort();
        _.each(keys, function (key) {
            params_sort[key] = params[key];
        });
        return params_sort;
    };

    const sha1 = (str) => {
        let crypto = require("crypto").createHash("sha1");
        return crypto.update(str, 'utf8').digest('hex');
    };

    let signature = params['Signature'],
        params_data = "";
    delete params['Signature'];
    params = keySort(params);
    for (let key in params) {
        params_data += key;
        params_data += params[key];
    }

    signature = sha1(params_data + private_key);
    return signature;
};