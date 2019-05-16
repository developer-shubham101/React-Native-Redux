import { BASE_URL } from '../constants/misc';
import serviceTemplate from '../shared_lib/serviceTemplate';

const SERVICE_URL = BASE_URL + 'users';
console.log("getNotifications");
console.log(SERVICE_URL);
export const getNotifications = async () =>
    await serviceTemplate(
        fetch(`${SERVICE_URL}`, {
            method: 'GET'
        }),SERVICE_URL
    );
