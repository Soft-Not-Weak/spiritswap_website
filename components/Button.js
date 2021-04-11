import {Children} from 'react';

const Button  = ({bg, ultra, alt, cursor, children, fullWidth, to, className}) => {

	if (ultra)
	{
		return (
				<a target="_blank" href={to} className={`ultra-button animate-scroll rounded-lg p-1 block ${alt ? 'alt' : ''} ${className}`} style={{ background: alt ? 'linear-gradient(to right, #49baa9 0%,#0e6c6c 33%,#121e5d 67%,#c335d8 100%)' :'linear-gradient(to right, #fec204 0%,#fbb711 7%,#f5a02e 19%,#f0894a 28%,#e66576 41%,#e5607e 43%,#e652a8 49%,#e74bbe 53%,#e845ce 58%,#e843d5 62%,#e843d5 64%,#e342d1 65%,#4900aa 83%,#1a0e33 100%)', backgroundSize: '400%', transition: 'all .1s'}}>
					<div className="cursorEdges absolute w-full h-full top-0 left-0">
						<img src="/CursorEdge.svg" className="absolute edge"/>
						<img src="/CursorEdge.svg" className="absolute edge"/>
						<img src="/CursorEdge.svg" className="absolute edge"/>
						<img src="/CursorEdge.svg" className="absolute edge"/>
					</div>
					<div className="rounded-lg p-1" style={{background: bg}}>
						{children}
					</div>
					<style jsx>{`
						.ultra-button {
							position: relative;
							max-width: 364px;
							transform: scale(1);
							transition: transform .164s ease-out;
						}

						.ultra-button:hover {
							transform: scale(1.05);
						}

						.ultra-button::after {
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
							background: linear-gradient(to right, #fec204 0%,#fbb711 7%,#f5a02e 19%,#f0894a 28%,#e66576 41%,#e5607e 43%,#e652a8 49%,#e74bbe 53%,#e845ce 58%,#e843d5 62%,#e843d5 64%,#e342d1 65%,#4900aa 83%,#1a0e33 100%);
							background-size: 400%;
							animation: 'scroll' 4s ease infinite;
						}

						.ultra-button.alt::after {
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

						.cursorEdges > .edge {
							width: 38px;
							opacity: 0;
							transition: all .12s ease-out;
						}

						.cursorEdges > .edge:first-child {
							left: -8px;
							top: -8px;
							transform: translate(-10px,-10px);
						}
						
						.cursorEdges > .edge:nth-child(2) {
							right: -8px;
							top: -8px;
							transform: scaleX(-1) translate(-10px,-10px);
						}

						.cursorEdges > .edge:nth-child(3) {
							left: -8px;
							bottom: -8px;
							transform: scaleY(-1) translate(-10px,-10px);
						}

						.cursorEdges > .edge:last-child {
							right: -8px;
							bottom: -8px;
							transform: scale(-1) translate(-10px,-10px);
						}

						.ultra-button:hover .cursorEdges > .edge {
							opacity: 1;
						}

						.ultra-button:hover .cursorEdges > .edge:first-child {
							transform: translate(0,0);
						}

						.ultra-button:hover .cursorEdges > .edge:nth-child(2) {
							transform: scaleX(-1) translate(0,0);
						}

						.ultra-button:hover .cursorEdges > .edge:nth-child(3) {
							transform: scaleY(-1) translate(0,0);
						}

						.ultra-button:hover .cursorEdges > .edge:last-child {
							transform: scale(-1) translate(0,0);
						}

					
					`}</style>
				</a>
		)
	}

	if (cursor)
	{
		return (
			<a target="_blank" style={{background: bg, maxWidth: fullWidth ? 'unset' :'364px'}} href={to} className={`cursor-button animate-scroll rounded-lg p-3 block ${className}`}>
				<div className="cursorEdges absolute w-full h-full top-0 left-0">
					<img src="/CursorEdge.svg" className="absolute edge"/>
					<img src="/CursorEdge.svg" className="absolute edge"/>
					<img src="/CursorEdge.svg" className="absolute edge"/>
					<img src="/CursorEdge.svg" className="absolute edge"/>
				</div>
				{children}
				<style jsx>{`
					.cursor-button {
						transform: scale(1);
						transition: all .12s ease-out;
					}

					.cursorEdges > .edge {
						width: 38px;
						opacity: 0;
						transition: all .12s ease-out;
					}

					.cursorEdges > .edge:first-child {
						left: -8px;
						top: -8px;
						transform: translate(-10px,-10px);
					}
					
					.cursorEdges > .edge:nth-child(2) {
						right: -8px;
						top: -8px;
						transform: scaleX(-1) translate(-10px,-10px);
					}

					.cursorEdges > .edge:nth-child(3) {
						left: -8px;
						bottom: -8px;
						transform: scaleY(-1) translate(-10px,-10px);
					}

					.cursorEdges > .edge:last-child {
						right: -8px;
						bottom: -8px;
						transform: scale(-1) translate(-10px,-10px);
					}

					.cursor-button:hover {
						transform: scale(1.05);
					}

					.cursor-button:hover .cursorEdges > .edge {
						opacity: 1;
					}

					.cursor-button:hover .cursorEdges > .edge:first-child {
						transform: translate(0,0);
					}

					.cursor-button:hover .cursorEdges > .edge:nth-child(2) {
						transform: scaleX(-1) translate(0,0);
					}

					.cursor-button:hover .cursorEdges > .edge:nth-child(3) {
						transform: scaleY(-1) translate(0,0);
					}

					.cursor-button:hover .cursorEdges > .edge:last-child {
						transform: scale(-1) translate(0,0);
					}


				`}</style>
			</a>
		)
	}

	return (
		<a href={to} target="_blank">
			{children}
		</a>
	)
}

export default Button;