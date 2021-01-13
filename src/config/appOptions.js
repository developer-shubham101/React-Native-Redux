 
export const appOptions = {
	url: 'https://gro-hood.ezxdemo.com/',
	home_cms_block_id: '19',
	store: 'default', // store code // Stores > All Stores > Store View > Code
	authentication: {
		integration: {
			access_token: 'cdlodltsj3wfwd1jrx08q9nfprb5idq4',
		},
	},
};

/**
 * Magento 2 REST API doesn't return currency symbol,
 * so manually specify all currency symbol(that your store support)
 * along side their currency code.
 */
export const currencySymbols = Object.freeze({
	USD: '$',
	EUR: '€',
	AUD: 'A$',
	GBP: '£',
	CAD: 'CA$',
	CNY: 'CN¥',
	JPY: '¥',
	SEK: 'SEK',
	CHF: 'CHF',
	INR: '₹',
	KWD: 'د.ك',
	RON: 'RON',
});
