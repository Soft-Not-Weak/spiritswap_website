module.exports = {
	async redirects() {
		return [
			{
				source: '/press',
				destination: 'https://press.softnotweak.com/spiritswap',
				permanent: true
			}
		]
	}
}