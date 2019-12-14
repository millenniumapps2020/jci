import { NetInfo } from 'react-native'
import { services } from './services';

const APP_TYPE = 1;
const PRODUCTION_BASE_URL = 'https://www.gracemarketing.in/jcierode.com/';
const DEVELOPMENT_BASE_URL = 'https://www.gracemarketing.in/jcierode.com/';

const URL = APP_TYPE == 1 ? PRODUCTION_BASE_URL : DEVELOPMENT_BASE_URL;

export const POST = (sub_url_key, bodyData) => {
    var sub_url = services[sub_url_key];
    var base_url = URL + sub_url
    var data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData.body)
    }
    console.log('POST_METHOD', base_url, JSON.stringify(bodyData))

    return fetch(base_url, data).then((response) => {
        return response.json();
    })
}
export const GET = (sub_url_key, bodyData) => {
    var sub_url=services.sub_url_key;
    var base_url = URL + sub_url;
    // console.log('DELETE_METHOD', base_url, JSON.stringify(bodyData))

    var data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }
    console.log('GET_METHOD', base_url, JSON.stringify(data))
    return fetch(base_url, data).then(res => res.json());
}