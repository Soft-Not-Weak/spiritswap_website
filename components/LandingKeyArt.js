import Image from 'next/image'

const LandingKeyArt = () => (
	<div className="relative h-screen">
		{/* Background */}
		<div className="relative">
			<img src="/keyart/Background.png" alt="moonlit background" className="absolute h-screen object-cover object-left w-screen"/>
			<img src="/keyart/Fireflies_BG.png" alt="fireflies" className="absolute h-screen object-cover object-left w-screen"/>
		</div>
		{/* Characters and Logo */}
		<div className="absolute z-10 w-full h-full overflow-hidden">
			<img src="/keyart/Samar.png" alt="samar" className="samar absolute bottom-0 z-10"/>
			<img src="/keyart/Dio.png" alt="dio" className="dio absolute -bottom-5"/>
			<img src="/keyart/Kedsi.png" alt="kedsi" className="kedsi absolute bottom-0" />
		</div>
		{/* Foreground */}
		<div className="absolute w-full h-full z-10">
			<img src="/keyart/Fireflies.png" alt="fireflies" className="fireflies absolute h-full w-full object-cover"/>
			<img src="/keyart/Overlay.png" alt="grain overlay" className="overlay absolute opacity-50 h-full w-full object-cover"/>
			<img src="/keyart/Bushes_BG.png" alt="bushes" className="bushes absolute h-full w-full object-cover object-bottom"/>
			<img src="/GameLogo.png" alt="spirit swap logo" className="gamelogo absolute"/>
		</div>
		<style jsx>
			{`
				.gamelogo {
					width: 30%;
					min-width: 500px;
					max-width: 780px;
					left: 22%;
					top: 6vw;
					transform: unset;
				}

				.samar {
					width: 46%; 
					max-width: 704px;
					min-width: 514px;
					right: -5%;
				}

				.dio {
					width: 43%;
					max-width: 628px;
					min-width: 500px;
					right: 18%;
				}

				.kedsi {
					width: 20%;
					max-width: 298px;
					min-width: 232px;
					left: 6%; 
				}

				@media (max-width: 985px)
				{
					.samar {
						width: 49%;
						min-width: unset; 
						right: -7%;
					}

					.dio {
						width: 44%;
						max-width: 628px;
						min-width: unset;
						right: 17%; 
					}

					.kedsi {
						width: 25%; 
						max-width: 298px;
						min-width: unset;
						left: 6%; 
					}

					.gamelogo {
						left: 50%;
						transform: translateX(-50%);
					}

					.bushes {
						width: 100vw;
						object-fit: contain;
					}
	
					.fireflies {
						width: 100vw;
						opacity: 0.32;
						object-fit: contain;
					}
				}

				@media (max-width: 600px) {
					.samar {
						width: 74%;
						right: -24%;
					}

					.dio {
						width: 74%;
						right: 30%;
						z-index: 0;
					}

					.kedsi {
						min-width: unset; 
						z-index:0;
						transform: scaleX(-1);
						width: 45%; 
						right: 26%;
						left: unset;
						bottom: -4%; 
					}

					.gamelogo {
						min-width: unset; 
						width: 100%; 
						top: 9%; 
						max-width: 435px;
					}
				}

			`}
		</style>
	</div>
)

export default LandingKeyArt;