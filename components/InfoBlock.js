
const InfoBlock = ({heading, footage, description, children}) => (
	<div>
		{children}

		<style jsx>
			{
				`
					& > img::after {
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
							transform: scaleX(1) scaleY(0.7);
							background: linear-gradient(to right, #49baa9 0%,#0e6c6c 33%,#121e5d 67%,#c335d8 100%);
							background-size: 400%;
							animation: 'scroll' 4s ease infinite;
					}
				`
			}
		</style>
	</div>
)

export default InfoBlock;