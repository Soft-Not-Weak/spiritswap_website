
const CTACard = ({icon, iconWidth, bg, children}) => (
	<div className="cta-card rounded-xl p-2 relative " style={{background: bg}}>
		{icon &&
			<img className="absolute icon" style={{width: iconWidth}} src={icon}/>
		}
		<div className="rounded-xl p-6 pt-12 content h-full w-full flex justify-between flex-col text-center" style={{background: 'rgba(26, 14, 51, 0.72)'}}>
			{children}
		</div>
		<style jsx>
			{`
				.icon {
					width: 190px;
					max-height: 168px;
					object-fit: contain;
					left: 50%;
					transform: translateX(-50%);
					top: -113px;
				}

				.content > * {
					margin: auto;
				}

				

				.content::before {
					position: absolute;
					content: '';
					top: 0;
					left: 0;
					right: 0;
					z-index: -1;
					height: 100%;
					width: 100%;
					margin: 0 auto;
					filter: blur(40px);
					transform: scaleX(1) scaleY(0.864);
					background: ${bg};
					background-size: 400%;
					animation: scroll 4s ease infinite;
				}
			
			
			`}
		</style>
	</div>
);

export default CTACard;