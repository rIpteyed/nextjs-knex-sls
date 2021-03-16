// next.config.js
module.exports = {
	target: "serverless",
	env: {
		HOST: process.env.HOST,
		USER: process.env.USER,
		PASSWORD: process.env.PASSWORD,
		DATABASE: process.env.DATABASE
	},
}
