import { GUEST_TYPE } from '../../types';

export default appOperation => ({
	samplePost: customer => appOperation.post('/user-create', customer, GUEST_TYPE),

	sampleGet: cartId => appOperation.get(`/V1/guest-carts/${cartId}`, undefined, undefined, GUEST_TYPE),

});
