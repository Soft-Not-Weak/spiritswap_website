
const Footer = () => (
	<footer className="flex items-center justify-between p-4 m-auto">
		<div className="icons flex">
			{/* TODO: Add Icons */}
			<a target="_blank" rel="noreferrer" aria-label="soft not weak twitter" href="https://twitter.com/softnotweak">
				<img src="/Twitter.svg" alt="twitter" style={{width: '33px', height: '40px'}}/>
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak instagram" href="https://www.instagram.com/softnotweak/">
				<img src="/Instagram.svg" alt="instagram" style={{width: '33px', height: '40px'}}/>
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak youtube" href="https://www.youtube.com/channel/UC8aq14JaN7BbCe2Tnrda10A">
				<img src="/Youtube.svg" alt="youtube" style={{width: '34px', height: '40px'}}/>
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak tiktok" href="https://www.tiktok.com/@softnotweak?lang=en">
				<img src="/TikTok.svg" alt="tiktok" style={{width: '32px', height: '40px'}}/>
			</a>
			
			<a href="mailto:contact@softnotweak.com" rel="noreferrer" aria-label="soft not weak contact email">
				<img src="/mail.svg" alt="mail" style={{width: '35px', height: '40px'}}/>
			</a>
		</div>
		<div className="right-links">
			<a target="_blank" rel="noreferrer" aria-label="soft not weak presskit" className="text-2xl mr-8" href="https://press.softnotweak.com/spiritswap">
				Presskit
			</a>
			<a target="_blank" rel="noreferrer" aria-label="soft not weak presskit" className="text-2xl" href="/humans.txt">
				Humans
			</a>
		</div>
		<style jsx>{`
			footer {
				border-top: 2px solid #fff8ea96;
				max-width: 1700px;
				padding-left: 1%;
				padding-right: 1%;
			}

			.icons a {
				display: flex; 
				align-items: center; 
				margin-right:1.64rem;
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
					margin-right: unset;
				}

				.right-links a:first-of-type {
					margin-right: 2rem;
				}
			}
		`}</style>
	</footer>
)

export default Footer