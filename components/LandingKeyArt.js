import Button from '../components/Button'
import Timer from '../components/Timer'
import Footer from './Footer';

const LandingKeyArt = () => (
	<header className="relative" role="main">
		{/* Background */}
		<div className="relative">
			<img src="/keyart/KeyArt_BG.png" alt="moonlit background with halftone styling" className="absolute h-screen object-cover object-center w-screen "/>
			<img src="/keyart/KeyArt_Samar.png" alt="Samar holding out their hand" className="samar-key absolute h-screen object-cover object-center w-screen max-width"/>
			<img src="/keyart/KeyArt_Spirits.png" alt="Spirit shapes looking cute with some key Spirit Swap characters hanging from them" className="spirit-key absolute h-screen object-cover object-center w-screen max-width"/>
		</div>
		{/* Foreground */}
		<div className="absolute w-full h-full z-20 max-width">
			<div className="gamelogo absolute">
				<img src="/keyart/KeyArt_Logo.png" alt="spirit swap logo" className="m-auto w-full mb-4"/>
				
				<div className="cta-container rounded-full">
					<h1 className="launch-cta"> 
						Coming Feb 3, 2025
					</h1>
				</div>
				<div className="buttons">
					<Button cursor alt bg="rgba(26, 14, 51, 0.72)" className="steam-button logo" ultra aria="spirit swap demo link" to="https://store.steampowered.com/app/1592170/Spirit_Swap_Lofi_Beats_to_Match3_To">
						Play the Demo!
					</Button>
					<Button cursor alt bg="rgba(26, 14, 51, 0.72)" className="steam-button logo" ultra aria="spirit swap steam page" to="https://store.steampowered.com/app/1592170/Spirit_Swap_Lofi_Beats_to_Match3_To">
						<img src="/icons/computer_icon.svg" alt="steam logo" className="text-white mr-6 my-1" style={{width: '4rem', height : '4rem'}}/> PC | Mac | Linux
					</Button>
					<Button cursor alt bg="rgba(26, 14, 51, 0.72)" className="steam-button logo" ultra aria="spirit swap press kit" to="https://drive.google.com/drive/u/0/folders/1SJsoiyeSjcMrvgqYyZhDJUzxgNBgI0lA">
						Presskit
					</Button>
					<Button cursor alt bg="rgba(26, 14, 51, 0.72)" className="steam-button logo" ultra aria="spirit swap request a key form" to="https://k1zwm815u8b.typeform.com/to/CZBiZ0mu">
						Request Key
					</Button>
				</div>
			</div>
			
			<div className="footer-container rounded-lg">
				<Footer hero/>
				<div className="chevron-container content mb-24 text-center">
					<img src="/chevron.svg" alt="scroll indicator" className="chevron bottom-0 animate-bounce m-auto"/>
				</div>
			</div>
			<img src="/Logo_SNW_White.png" alt="Soft Not Weak Logo White" className="snw-logo"/>
		</div>
		
		<style jsx>
			{`
				header { 
					height: 94vh;
				}

				.desktop-only {
					display: initial;
				}

				.max-width {
					max-width: 2560px;
					left: 50%;
					transform: translateX(-50%);
				}

				.snw-logo {
					width: 12rem;
					position: absolute;
					right: 1rem;
					top: 1rem;
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
					font-size: 3rem;
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
					width: 34vw;
					min-width: 510px;
					max-width: 760px;
					left: 6%;
					top: 3rem;
					transform: unset;
					text-align: center;
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

				.buttons {
				display: none;
				}

				@media (max-width: 1770px)
				{
					.launch-cta {
						font-size: 2.5rem;
					}

					.buttons {
						display: flex; 
						flex-direction: column;
						align-items: center;
						margin-top: 0.5rem;
					}
				}

				@media (max-width:2206px)
				{
					.cta-container {
						width: 100%;
					}
				}

				@media (max-width:1770px)
				{
					.desktop-only {
						display: none;
					} 

					.chevron-container {
						position: absolute;
						left: 50%;
						top:110%;
						transform: translate(-50%, -50%);
					}
				}

				@media (max-width: 1220px)
				{
				
					.samar-key {
						width: 200%;
						left: 33%;
					}

					.spirit-key {
						display: none;
					}

					.gamelogo {
						left: 50%;
						transform: translateX(-50%);
						top: unset;
						bottom: 5rem;
						width: 100vw;
					}

					.gamelogo img {
						width: 80%;
					}

					.buttons {
						display: grid;
						justify-content: center;
						grid-template-columns: repeat(2, 1fr);
						gap: 0.5rem;
					}
				}

				@media (max-width: 985px)
				{
					.desktop-only {
						display: none;
					} 
				}

				@media (max-width: 873px)
				{
				header { 
					height: 100vh;
				}
					.buttons {
						display: grid;
						justify-content: center;
						grid-template-columns: repeat(1, 1fr);
						gap: 0.5rem;
					}

					.snw-logo {
						width: 7rem;
					}

					.launch-cta {
						font-size: 5vw;
					}

					.footer-container {
						bottom: -5rem;
					}

				
				}

			`}
		</style>
	</header>
)

export default LandingKeyArt;
