import {useRef, useEffect} from 'react';

import SEO from '../components/SEO'
import GameboardLayout from '../components/GameboardLayout'
import LandingKeyArt from '../components/LandingKeyArt'
import Button from '../components/Button'
import Youtube from '../components/Youtube'
import InfoBlock from '../components/InfoBlock'
import CTACard from '../components/CTACard'
import Footer from '../components/Footer'
import Timer from '../components/Timer'

export default function Home() {
  const swapVideo = useRef();
  const bondVideo = useRef();
  const styleVideo = useRef();
  const frogBop = useRef();

  useEffect(() => {

    swapVideo.current.play();
    bondVideo.current.play();
    styleVideo.current.play();
    
  }, [])

  return (
    <main style={{color: '#fff8ea'}}>
      <SEO title="Lofi Beats to Match-3 To"/>
      <LandingKeyArt/>
      <GameboardLayout>
        <div className="mb-24">
          <h1 className="font-header text-6xl mb-6 cta-heading">Support us on</h1> 
          <Button bg="rgba(26, 14, 51, 0.72)" aria="spirit swap kickstarter" ultra className="m-auto mb-3" to="https://www.kickstarter.com/projects/softnotweak/spirit-swap">
            <img src="/KickstarterLogo.svg" alt="kickstarter logo"/>
          </Button>
          <Timer deadline={new Date(2021, 4, 13)} className="z-10"/>
        </div>
        <div className="mb-24"> 
          <h1 className="font-header text-6xl mb-6 cta-heading">Wishlist on</h1>
          {/* TODO: Get Steam page link for game. */}
          <Button cursor  bg="rgb(132 63 148 / 35%)" aria="spirit swap steam page" to="https://store.steampowered.com/app/1592170/Spirit_Swap_Lofi_Beats_to_Match3_To" className="m-auto">
            <img src="/SteamLogo.svg" alt="steam logo" className="text-white m-auto" style={{maxWidth: '176px'}}/>
          </Button>
        </div>
        <div>
        <h1 className="font-header text-6xl mb-6 cta-heading">Tune in and</h1>
          <Button alt bg="rgba(26, 14, 51, 0.72)" aria="spirit swap demo" ultra className="m-auto mb-28" to="https://softnotweak.itch.io/spirit-swap-lofi-beats-to-match-3-to">
              <h1 className="font-header text-4xl p-3">Play the Demo!</h1>
          </Button>
        </div>

        <h1 className="video-cta font-header text-6xl mb-6 leading-relaxed m-auto" style={{maxWidth: '1400px'}}>
            
            <span className="gradient-text pb-2">Cast spells, be queer, <br/>and crash the biggest concert of the year!</span>

        </h1>

        <div className="m-auto mb-7" style={{maxWidth: '1364px'}}>
          <Youtube embed="Fe4p3xl4RAk" />
        </div>

        <p className="video-subtext m-auto text-4xl leading-relaxed w-full mb-28" style={{maxWidth: '1283px'}}>
          Spirit Swap is an action-puzzle game set in a lush, narrative-driven world of witchy demons.  
        </p>
        {/* Features */}
        <div className="info-grid">
          <InfoBlock>
            <h1 className="font-header text-7xl leading-relaxed">
              <span className="gradient-text pb-2">
                Swap
              </span>
            </h1>
            <div className="footage swap">
              <video preload="true" ref={swapVideo} autoplay muted loop type="video/mp4" src="/footage/Match.mp4" className="rounded-xl drop-shadow-2xl object-cover mb-4">
              </video>
            </div>
            <p className="text-2xl leading-relaxed">
              Swap to the beat and cast powerful spells as you reassemble lost spirits on your own or together with friends (local co-op)!
            </p>
          </InfoBlock>
          <InfoBlock>
            <h1 className="font-header text-7xl leading-relaxed">
              <span className="gradient-text pb-2">
                Bond
              </span>
            </h1>
            <div className="footage bond">
              <video preload="true" ref={bondVideo} autoplay muted loop type="video/mp4" src="/footage/Bond.mp4" className="rounded-xl drop-shadow-2xl object-cover mb-4">
              </video>
            </div>
            <p className="text-2xl leading-relaxed"> 
              Bond with a cast of witches and demons. Plan a pizza party together, crash a concert, maybe even smooch!
            </p>
          </InfoBlock>
          <InfoBlock>
            <h1 className="font-header text-7xl leading-relaxed">
              <span className="gradient-text pb-2">
                Style
              </span>
            </h1>
            <div className="footage style">
              <video preload="true" ref={styleVideo} autoplay muted loop type="video/mp4" src="/footage/Decorate.mp4" className="rounded-xl drop-shadow-2xl object-cover mb-4">
              </video>
            </div>
            <p className="text-2xl leading-relaxed">
              Style and decorate your bedroom with trinkets and keepsakes from your bonds to mixup your runs!
            </p>
          </InfoBlock>
        </div>

        {/* Music */}
        <div className="music m-auto flex flex-row mb-32">
          <div className="characters relative">
            <img src="/samar_kick.png" className="samar absolute h-full object-cover right-0" />
            <video preload="true" ref={frogBop} autoplay muted loop type="video/webm" src="/frog_bop.webm" className="frog absolute bottom-0"/>
          </div>
          <div className="content text-left flex flex-col justify-around px-5" style={{flex: '2'}}>
            <p className="info text-4xl leading-relaxed">
              {/* TODO: Link to meltycanon and eyesonbrandon? */}
              Coast your swap cursor to a custom lofi hip hop soundtrack by the incredible Meltycanon and eyesonbrandon.
            </p>
            <div className="flex soundcloud-container">
              <div className="soundcloud  mr-10 flex-1">
              <iframe className="rounded-lg" title="soundcloud spirit swap theme by meltycanon" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1024044487&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </div>
              <div className="soundcloud flex-1">
              <iframe className="rounded-lg" title="soundcloud sugarplum by eyelovebrandon" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1024093933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </div>
            </div>
          </div>
        </div>


        {/* More Stuff */}
        <div>
          <h1 className="on-beat-header font-header text-7xl mb-36 leading-relaxed">
            <span className="gradient-text pb-2">
              Stay on Beat!
            </span>
          </h1>
          <div className="info-grid on-beat">
            <CTACard icon="/samar.png" alt="samar emoji" bg="#7289DA">
              <h1 className="cta-card-header text-4xl font-header mb-5">
                {/* TODO: Get narrative to say something for Samar */}
                Join our Discord <br/><p className="text-3xl mt-2">(SFW 18+ only!)</p>
              </h1>
              <Button cursor fullWidth to="https://discord.gg/pSYhWbq2J8" aria="soft not weak discord" bg="rgba(26, 14, 51, 0.72)">
                <div>
                  <img src="/Discord.svg" className="cta-card-button-image" alt="discord logo" style={{maxHeight: '60px'}}/>
                </div>
              </Button>
            </CTACard>
            <CTACard icon="/ishk.png" alt="ishkandar emoji" iconWidth="130px" bg="#D882BF">
              <h1 className="cta-card-header text-4xl font-header mb-5">
                {/* TODO: Get narrative to say something for Samar */}
                Subscribe to our Newsletter
              </h1>
              <Button cursor to="http://eepurl.com/ht8xNb" aria="soft not weak newsletter" fullWidth bg="rgba(26, 14, 51, 0.72)">
                <div>
                  <img src="/mail.svg" className="cta-card-button-image" alt="subscription letter" style={{maxHeight: '60px'}}/>
                </div>
              </Button>
            </CTACard>
            <CTACard icon="/mo.png" alt="mo emoji" bg="#5EB795">
              <h1 className="cta-card-header text-4xl font-header mb-5">
                {/* TODO: Get narrative to say something for Samar */}
                Wishlist on Steam
              </h1>
              <Button cursor to="https://store.steampowered.com/app/1592170/Spirit_Swap_Lofi_Beats_to_Match3_To" fullWidth aria="spirit swap steam page" bg="rgba(26, 14, 51, 0.72)">
                <div>
                  <img src="/SteamLogo.svg" className="cta-card-button-image" alt="steam logo" style={{maxHeight: '60px'}}/>
                </div>
              </Button>
            </CTACard>
          </div>
        </div>
        <Footer/>
      </GameboardLayout>
      <style jsx>{`
        .gradient-text {
          background-color: #1A0E33;
          
          background-image: linear-gradient(to bottom,#FFDA5C 43%,#FF457A);
          background-size: 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent; 
          -moz-text-fill-color: transparent;
          -webkit-box-decoration-break: clone;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 3rem;
          padding-left: 32px;
          padding-right: 32px;
          max-width: 1700px;
          margin: auto;
          margin-bottom: 9rem;
        }

        .soundcloud {
          position: relative;
        }

        .soundcloud::before {
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
          transform: scaleX(1) scaleY(0.864);
          background: linear-gradient(to right,#243666,#412253);

        }

        .footage {
          position: relative;
        }

        .footage img {
          min-height: '289px';
        }

        .footage.swap::before {
          background: linear-gradient(to right, #49baa9 0%,#0e6c6c 33%,#121e5d 67%,#c335d8 100%);
        }

        .footage.bond::before {
          background:linear-gradient(to right,#FFDA5C 43%,#FF457A)
        }

        .footage.style::before {
          background: linear-gradient(to right, #fec204 0%,#fbb711 7%,#f5a02e 19%,#f0894a 28%,#e66576 41%,#e5607e 43%,#e652a8 49%,#e74bbe 53%,#e845ce 58%,#e843d5 62%,#e843d5 64%,#e342d1 65%,#4900aa 83%,#1a0e33 100%);
        }
        
        .footage::before {
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
            transform: scaleX(1) scaleY(0.864);
            background-size: 400%;
            animation: scroll 4s ease infinite;
					}

          .music {
            max-width: 1550px;
          }

          .music .characters {
            min-height: 600px;
            max-width: 600px;
            flex: 3;
          }

          .music .characters .frog {
             max-height: 280px; 
             left: 20px;
          }

          .music .content {
            flex: 2;
          }

          .cta-card-button-image {
            margin: auto;
          }



          @media (max-width: 1200px)
          {
            .info-grid {
              grid-template-columns: unset;
              grid-template-rows: 1fr 1fr 1fr;
              grid-row-gap: 2rem;
            }

            .info-grid h1 {
              margin-bottom: 1.75rem;
            }

            .info-grid p {
              font-size: 1.7rem;
            }

            .info-grid img {
              width: 100%;
            }

            .info-grid.on-beat {
              grid-row-gap: 9rem;
            }

            .music {
              margin-bottom: 4em;
            }

            .music .characters {
              max-height: 774px;
            }

            .music .characters { 
              max-height: 774px;
            }

            .music .characters .samar {
              right: 24px; 
              max-height: 774px;
            }

            .music .content {
              flex: 3; 
              padding-left: 0; 
              padding-right: 0; 
            }

            .music .content .info {
              text-align: left; 
              margin-bottom: 1rem;
              line-height: 1.4;
            }

            .music .content .soundcloud-container {
              text-align: center; 
              flex-direction: column; 
            }

            .music .content .soundcloud-container > *:first-child {
              margin-right: 0; 
              margin-bottom: 2rem; 
            }
          }

          @media (max-width: 600px) {
            .cta-heading, .video-cta, .on-beat-header  {
              font-size: 10vw;
              
            }

            .video-cta {
              line-height: 1.4;
              text-align: left;
            }

            .video-subtext {
              text-align: left; 
              font-size: 1.7rem;
              margin-bottom: 3rem;
            }

            .info-grid {
              padding-left: 0; 
              padding-right:0;
              grid-row-gap: 1rem;
              grid-template-rows: 1fr;
              margin-bottom: 3rem;
            }

            .info-grid p {
              text-align: left;
            }

            .info-grid h1 {
              text-align: left;
              margin-bottom: 0.2rem;
              font-size: 3.64rem;
            }
            
            .info-grid .footage img {
              min-height: 209px;
            }

            .info-grid .footage::before {
              transform: scaleX(1) scaleY(0.764);
            }

            .music {
              flex-direction: column;
              margin-bottom: 3rem;
            }

            .music .characters {
              width: 100%; 
              margin-bottom: 2.64rem;
              min-height: 390px;
            }

            .music .characters .samar {
              max-height: 390px; 
              right: unset;
            }

            .music .characters .frog {
              max-height: 180px; 
              left: unset; 
              bottom: -17px;
            }

            .music .content .info {
              font-size: 1.7rem;
              margin-bottom: 2rem;
            }
            
            .on-beat-header {
              font-size: 3.64rem;
            }

            .info-grid .cta-card-header {
              font-size: 9vw;
              line-height: 1.2;
              text-align: center; 
              margin-bottom: 1rem; 
            }

            .info-grid .cta-card-header p {
              text-align: center; 
            }

            .info-grid a img {
              min-height: unset; 
            }
          }
      `}</style>
    </main>
  )
}
