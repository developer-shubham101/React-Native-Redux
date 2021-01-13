export const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min + 1;
}



export const getMediaUrl = (fileName) => {
	// console.log(`https://gohood.ezxdemo.com/storage/${fileName}`);
	return `https://gohood.ezxdemo.com/storage/${fileName}`;
}

