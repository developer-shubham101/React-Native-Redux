import { ADMIN_TYPE } from '../../types';

export default appOperation => ({
	sampleGet: () => appOperation.get('/V1/', undefined, undefined, ADMIN_TYPE),

	samplePut: (id, customer) => appOperation.put(`/V1/customers/${id}`, customer, undefined, ADMIN_TYPE),

	sampleDelete: (cartId) => appOperation.delete(`/V1/carts/${cartId}/coupons`, undefined, ADMIN_TYPE),

	samplePost: customerId => appOperation.post(`/V1/customers/${customerId}/carts`, undefined, ADMIN_TYPE),

});
