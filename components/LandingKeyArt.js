import Button from '../components/Button'
import Timer from '../components/Timer'
import Footer from './Footer';

const LandingKeyArt = () => (
	<header className="relative" role="main">
		{/* Background */}
		<div className="relative">
			<img src="/keyart/KeyArt_BG.png" alt="moonlit background with halftone styling" className="absolute h-screen object-cover object-left w-screen"/>
			<img src="/keyart/KeyArt_Samar.png" alt="Samar holding out their hand" className="absolute h-screen object-cover object-left w-screen"/>
			<img src="/keyart/KeyArt_Spirits.png" alt="Spirit shapes looking cute with some key Spirit Swap characters hanging from them" className="absolute h-screen object-cover object-left w-screen"/>
		</div>
		{/* Foreground */}
		<div className="absolute w-full h-full z-20">
			<div className="gamelogo absolute">
				<img src="/keyart/KeyArt_Logo.png" alt="spirit swap logo" className="m-auto w-full mb-4"/>
				
				<div className="cta-container rounded-full">
					<h1 className="launch-cta"> 
						Coming Feb 3, 2025
					</h1>
				</div>
			</div>
			
			<div className="footer-container rounded-lg">
				<Footer hero/>
				<div className="chevron-container content mb-24 text-center">
					<img src="/chevron.svg" alt="scroll indicator" className="chevron bottom-0 animate-bounce m-auto"/>
				</div>
			</div>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak main site" href="https://press.softnotweak.com/">
			<img src="/Logo_SNW_White.png" alt="Soft Not Weak Logo White" className="snw-logo"/>
			</a>
		</div>
		
		<style jsx>
			{`
				header { 
					height: 94vh;
				}

				.snw-logo {
					width: 12rem;
					position: absolute;
					right: 1rem;
					bottom: 1rem;
					filter: drop-shadow(0 0 0.5rem #0B031ACC);
				}

				.cta-container {
					background: #0B031ACC;
					padding: 1rem;
					backdrop-filter: blur(10px);
					width: 80%;
					margin: auto;
				} 

				.launch-cta {
					text-align: center;
					font-size: 3.5rem;
					font-weight: unset;
					font-family: NutmegHeadline-Black;
					background: -webkit-linear-gradient( -90deg, #FFDA5C 5%, #FFDA5C 53%, #FC9C67 71% );
					background-clip: border-box;
					-webkit-background-clip: text;
					-webkit-text-stroke: 10px transparent;
					color: #0B031A;
					white-space: no-wrap;
				}

				.chevron-container {
					position: absolute;
					left: 50%;
					top:70%;
					transform: translate(-50%, -50%);
				}

				.footer-container {
					position: absolute;
					bottom: -3rem;
					max-width: 1700px;
					width: 100%;
					left: 50%;
					transform: translateX(-50%);
					background: #0B031ACC;
					padding: 1rem;
					backdrop-filter: blur(10px);
	
				}
				.gamelogo {
					width: 80%;
					min-width: 500px;
					max-width: 860px;
					left: 6%;
					top: 3vw;
					transform: unset;
				}

				.gamelogo .cta-heading {
					font-size: 3rem;
					margin-bottom: 1rem;
					line-height: normal;
				}

				.samar {
					width: 46%; 
					max-width: 554px;
					min-width: 514px;
					right: -5%;
				}

				.dio {
					width: 43%;
					max-width:508px;
					min-width: 500px;
					right: 18%;
				}

				.kedsi {
					width: 20%;
					max-width: 298px;
					min-width: 232px;
					left: 6%; 
				}

				.chevron {
					width: 6rem;
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

					.gamelogo .content {
						padding-left: 28px;
						padding-right: 28px;
					}

					.gamelogo .cta-heading {
						font-size: 10vw;
					}

					.chevron {
						width: 20vw; 
					}
				}

			`}
		</style>
	</header>
)

export default LandingKeyArt;
