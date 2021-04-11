import Image from 'next/image'

const LandingKeyArt = () => (
	<div className="relative h-screen">
		{/* Background */}
		<div className="relative">
			<img src="/keyart/Background.png" className="absolute h-screen object-cover object-left w-screen"/>
			<img src="/keyart/Fireflies_BG.png" className="absolute h-screen object-cover object-left w-screen"/>
		</div>
		{/* Characters and Logo */}
		<div className="absolute z-10 w-full h-full overflow-hidden">
			<img src="/keyart/Samar.png" className="absolute bottom-0 z-10" style={{width: '46%', maxWidth: '704px', minWidth: '514px', right: '-5%'}}/>
			<img src="/keyart/Dio.png" className="absolute -bottom-5" style={{width: '43%', maxWidth: '628px', minWidth: '500px', right: '18%'}}/>
			<img src="/keyart/Kedsi.png" className="absolute bottom-0" style={{width: '20%', maxWidth: '298px', minWidth: '232px', left: '6%'}}/>
		</div>
		{/* Foreground */}
		<div className="absolute w-full h-full z-10">
			<img src="/keyart/Fireflies.png" className="absolute h-full w-full object-cover"/>
			<img src="/keyart/Overlay.png" className="absolute opacity-50 h-full w-full object-cover"/>
			<img src="/keyart/Bushes_BG.png" className="absolute h-full w-full object-cover object-bottom"/>
			<img src="/GameLogo.png" className="absolute" style={{width: '30%', minWidth: '500px', maxWidth: '600px', left: '22%', top: '6vw'}}/>
		</div>
	</div>
)

export default LandingKeyArt;