const withPWA = require('next-pwa')

module.exports = withPWA({
	pwa: {
		dest: 'public'
	},
	async redirects() {
		return [
			{
				source: '/press',
				destination: 'https://press.softnotweak.com/spiritswap',
				permanent: true
			}
		]
	}
})