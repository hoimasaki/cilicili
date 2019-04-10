import reqwest from 'reqwest'
import Vue from 'vue';
import CONFIG from '../config/config';
import { VerfyAC } from './index';

export default function Request(params) {
    
    const commonParams = {
        ...params,
        PublicKey: CONFIG.PUBLIC_KEY
    };

    return reqwest({
        url: `${CONFIG.GATEWAY_BASE_URL}`,
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            ...commonParams,
            Signature: VerfyAC(commonParams, CONFIG.PRIVATE_KEY),
        })
    })
}

