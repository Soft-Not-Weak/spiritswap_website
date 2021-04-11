import Head from 'next/head'
import config from '../config'

export default function SEO({description, title}) {
	const siteTitle = `${config.title} | ${title}`;
	const siteDescription = description || config.description || '';

	return (
		<Head>
			<title>{siteTitle}</title>
			<meta name="description" content={siteDescription} />
			
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
		</Head>
	)
}