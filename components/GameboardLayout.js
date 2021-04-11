
const GameboardLayout = ({children}) => (
	<div className="overflow-hidden text-center" style={{ background: 'linear-gradient(-180deg,#4b2962 ,#07011e 64%)' }}>
		<span className="block absolute w-full z-10" style={{height: '10%', background: 'linear-gradient(to bottom, #4b2962, transparent)'}}></span>
		<div className="border-container p-3 rounded-4xl -mt-11" style={{background: 'linear-gradient(to top, #fec204 0%,#fbb711 7%,#f5a02e 19%,#f0894a 28%,#e66576 41%,#e5607e 43%,#e652a8 49%,#e74bbe 53%,#e845ce 58%,#e843d5 62%,#e843d5 64%,#e342d1 65%,#4900aa 83%,#1a0e33 100%)'}}>
			<div className="block rounded-4xl pb-3 relative" style={{ background: 'linear-gradient(-180deg,#4b2962 -104%,#07011e)' }}>
				<img src="/BoardShine.svg" className="w-full h-full object-cover opacity-20 absolute"/>
				<img src="/Halftone.svg" className="w-full h-full object-cover absolute" style={{opacity: '0.064'}}/>
				<content className="block px-6 pt-28 relative z-20 text-center">
					{children}
				</content>
			</div>
		</div>
		<style jsx>
			{`
				@media (max-width: 600px){
					.border-container {
						padding: 0.5rem;
					}
				}
			
			`}
		</style>
	</div>
)

export default GameboardLayout;