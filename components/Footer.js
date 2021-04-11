
const Footer = () => (
	<footer className="flex items-center justify-between p-4 m-auto">
		<div className="icons flex">
			{/* TODO: Add Icons */}
			<a target="_blank" href="https://twitter.com/softnotweak">
				<img src="/Twitter.svg" style={{width: '33px', height: '40px'}}/>
			</a>
			<a target="_blank" href="https://www.instagram.com/softnotweak/">
				<img src="/Instagram.svg" style={{width: '33px', height: '40px'}}/>
			</a>
			<a target="_blank" href="">
				<img src="/Youtube.svg" style={{width: '34px', height: '40px'}}/>
			</a>
			<a target="_blank" href="https://www.tiktok.com/@softnotweak?lang=en">
				<img src="/TikTok.svg" style={{width: '32px', height: '40px'}}/>
			</a>
			
			<a href="mailto:contact@softnotweak.com">
				<img src="/mail.svg" style={{width: '35px', height: '40px'}}/>
			</a>
		</div>
		<a target="_blank" className="text-2xl" href="https://press.softnotweak.com/spiritswap">
			Presskit
		</a>
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
				margin-right:.7rem;
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
			}
		`}</style>
	</footer>
)

export default Footer