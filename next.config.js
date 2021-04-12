const withPWA = require('next-pwa')
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPWA({
	pwa: {
		dest: 'public'
	},
	
})

module.exports = withPlugins([
	[
		withOptimizedImages
	],
	[withPWA, {
		pwa: {
			dest: 'public'
		}
	}]
	
], {
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