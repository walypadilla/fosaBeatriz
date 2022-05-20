if (process.env.NODE_ENV !== 'production') {
	const dotenv = require('dotenv');
	const result = dotenv.config();
	if (result.error) {
		throw result.error;
	}
}

module.exports = {
	PORT: process.env.PORT,
	EMAIL: process.env.EMAIL,
	PASSWORD_EMAIL: process.env.PASSWORD_EMAIL,
};
