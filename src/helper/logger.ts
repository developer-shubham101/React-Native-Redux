// import { Client } from 'bugsnag-react-native';
// const bugsnag = new Client('f1e939802a0abb0832574304f55776a5');

export const logError = (error) => {
	// console.log(`%c ${error}`, 'background: #222; color: #f00');
	console.log(`%c ${error}`, 'color: #f00');
	// if (error instanceof Error) {
	// 	bugsnag.notify(error);
	// } else if (typeof error === 'string') {
	// 	bugsnag.notify(new Error(error));
	// }
};
