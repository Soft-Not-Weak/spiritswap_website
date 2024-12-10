import Button from "./Button"

const Footer = ({ hero }) => (
	<footer className={`flex items-center justify-between p-4 m-auto`}>
		<div className={`icons flex ${hero ? "footer-hero" : ""}`}>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak twitter" href="https://softnotweak.bsky.social">
				<img src="/bluesky_icon.svg" alt="twitter" style={{width: '43px', height: '50px'}}/>
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak youtube" href="https://www.youtube.com/channel/UC8aq14JaN7BbCe2Tnrda10A">
				<img src="/Youtube.svg" alt="youtube" style={{width: '44px', height: '50px'}}/>
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak instagram" href="https://www.instagram.com/softnotweak/">
				<img src="/Instagram.svg" alt="instagram" style={{width: '43px', height: '50px'}}/>
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak tiktok" href="https://www.tiktok.com/@softnotweak?lang=en">
				<img src="/TikTok.svg" alt="tiktok" style={{width: '42px', height: '50px'}}/>
			</a>
			<a href="mailto:contact@softnotweak.com" rel="noreferrer" aria-label="soft not weak contact email">
				<img src="/mail.svg" alt="mail" style={{width: '45px', height: '50px'}}/>
			</a>
		</div>
		{hero && 
			<>
				
				<div className="buttons">
					<Button cursor alt bg="rgba(26, 14, 51, 0.72)" className="steam-button" ultra aria="spirit swap steam page relative" to="https://store.steampowered.com/app/1592170/Spirit_Swap_Lofi_Beats_to_Match3_To">
						Play the Demo!
					</Button>
					<Button cursor alt bg="rgba(26, 14, 51, 0.72)" className="steam-button" ultra aria="spirit swap steam page relative" to="https://store.steampowered.com/app/1592170/Spirit_Swap_Lofi_Beats_to_Match3_To">
						<img src="/icons/computer_icon.svg" alt="steam logo" className="text-white mr-6 my-1" style={{width: '4rem', height : '4rem'}}/> PC | Mac | Linux
					</Button>
					{/* <Button cursor alt bg="rgba(26, 14, 51, 0.72)" className="steam-button" ultra aria="spirit swap steam page relative" to="https://store.steampowered.com/app/1592170/Spirit_Swap_Lofi_Beats_to_Match3_To">
						<img src="/icons/XboxLogo.svg" alt="steam logo" className="text-white mr-6 my-1" style={{width: '3.5rem', height : '4rem'}}/> Xbox
					</Button> */}
					{/* <Button cursor alt bg="rgba(26, 14, 51, 0.72)" className="steam-button" ultra aria="spirit swap steam page relative" to="https://store.steampowered.com/app/1592170/Spirit_Swap_Lofi_Beats_to_Match3_To">
						<img src="/icons/NintendoSwitchLogo.svg" alt="steam logo" className="text-white mr-6 my-1" style={{width: '3.5rem', height : '4rem'}}/> Nintendo Switch
					</Button> */}
				</div>
			</>
			
		}
		<div className={`right-links ${hero ? "footer-hero" : ""}`}>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak presskit" className="text-3xl mr-8" href="https://drive.google.com/drive/u/0/folders/1SJsoiyeSjcMrvgqYyZhDJUzxgNBgI0lA">
				Presskit
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak presskit" className="text-3xl mr-8" href="https://k1zwm815u8b.typeform.com/to/CZBiZ0mu">
				Request Key
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak presskit" className="text-3xl mr-8" href="/humans.txt">
				Humans
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak presskit" className="text-3xl" href="/privacy">
				Privacy
			</a>
		</div>
		<style jsx>{`
			footer {
				border-top: 2px solid #fff8ea96;
				max-width: 1700px;
				padding-left: 1%;
				padding-right: 1%;
			}

			.buttons {
				position: absolute;
				width: 100%;
				left: 50%;
				transform: translateX(-50%);
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: flex-end;
				bottom: 8rem;
			}

			.footer-hero.icons {
				display: flex;
			}

			.mobile {
				display: none;
			}

			.icons a {
				display: flex; 
				align-items: center; 
				margin-right:1.64rem;
			}

			.desktop-only {
						display: initial;
					} 

			@media (max-width: 1770px)
				{
					.buttons {
						display: none;
					}
				}

			@media (max-width:1770px)
				{
				.footer-hero {
					display: none;
				}

				.footer-hero.icons {
					width: 100%;
					justify-content: center;
				}

				}

			@media (max-width: 600px)
			{
				footer {
					flex-direction: column; 
				}

				
				.icons {
					justify-content: space-evenly;
					flex-direction: row;
					margin-bottom: 2rem;
					width: 100%; 
				}
				.icons a {
					margin-right: 5vw;}

				.right-links a:first-of-type {
					margin-right: 2rem;
				}
			}
		`}</style>
	</footer>
)

export default Footer