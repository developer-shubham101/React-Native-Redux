import { CUSTOMER_TYPE } from '../../types';

export default appOperation => ({

	samplePost: postData => appOperation.post('/update-address', postData, CUSTOMER_TYPE), 

	sampleGet: () => appOperation.get('/V1/customers/me', undefined, undefined, CUSTOMER_TYPE),

});
