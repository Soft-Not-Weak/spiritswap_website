import Head from 'next/head'
import config from '../config'

export default function SEO({description, title}) {
	const siteTitle = `${config.title} | ${title}`;
	const siteDescription = description || config.description || '';

	return (
		<Head>
			<title>{siteTitle}</title>
			<meta name="description" content={siteDescription} />
			<link rel="author" href="/humans.txt"/>
			{
				config.social &&
				<>
					<meta property="og:type" content="website" />
					<meta property="og:title" content={siteTitle} />
					<meta property="og:description" content={siteDescription} />
					<meta property="og:site_name" content={siteTitle}/>
					<meta property="og:image" content={config.social.image} />
					<meta property="og:url" content={config.social.url} />
				</>
			}
			
			{
				config.social.twitter &&
				<>
					<meta property="twitter:card" content={config.social.twitter.cardType} />
					<meta property="twitter:creator" content={config.social.twitter.profile} />
					<meta property="twitter:site" content={config.social.twitter.profile} />
					<meta property="twitter:title" content={siteTitle} />
					<meta property="twitter:image" content={config.social.image} />
					<meta property="twitter:description" content={config.social.twitter.description || siteDescription} />
				</>
			}
			<meta name='application-name' content={siteTitle} />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-status-bar-style' content='default' />
		<meta name='apple-mobile-web-app-title' content={siteTitle} />
		<meta name='description' content={siteDescription} />
		<meta name='format-detection' content='telephone=no' />
		<meta name='mobile-web-app-capable' content='yes' />
		<meta name='msapplication-TileColor' content='#13051c' />
		<meta name='msapplication-tap-highlight' content='no' />
		<meta name='theme-color' content='#4b2962' />
				
		<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
		<link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
		<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
		<link rel='manifest' href='/manifest.json' />
		</Head>
	)
}