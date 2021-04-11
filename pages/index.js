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


  return (
    <div style={{color: '#fff8ea'}}>
      <SEO title="Lofi Beats to Match-3 To"/>
      <LandingKeyArt/>
      <GameboardLayout>
        <div className="mb-32">
          <h1 className="font-header text-6xl mb-9">Support us on</h1> 
          <Button bg="rgba(26, 14, 51, 0.72)" ultra className="m-auto mb-3" to="https://www.kickstarter.com/projects/softnotweak/spirit-swap">
            <img src="/KickstarterLogo.svg"/>
          </Button>
          <Timer deadline={new Date(2021, 4, 13)} className="z-10"/>
        </div>
        <div className="mb-32">
          <h1 className="font-header text-6xl mb-12">Wishlist on</h1>
          {/* TODO: Get Steam page link for game. */}
          <Button cursor  bg="rgb(132 63 148 / 35%)" to="https://store.steampowered.com" className="m-auto">
            <img src="/SteamLogo.svg" className="text-white m-auto" style={{maxWidth: '176px'}}/>
          </Button>
        </div>
        <Button alt bg="rgba(26, 14, 51, 0.72)" ultra className="m-auto mb-28" to="https://softnotweak.itch.io/spirit-swap-lofi-beats-to-match-3-to">
            <h1 className="font-header text-4xl p-3">Play the Demo!</h1>
        </Button>

        <img src="/CastSpellsBeQueer.png" className="m-auto w-full mb-6" style={{maxWidth: '1370px'}}/>
        {/* TODO: Insert "Cast Spells, Be Queer" GFX */}

        <div className="m-auto mb-7" style={{maxWidth: '1364px'}}>
          <Youtube embed="zo-LEmtSIY4" />
        </div>

        <p className="m-auto text-3xl leading-relaxed w-full" style={{maxWidth: '1283px'}}>
          Spirit Swap is an action-puzzle game set in a lush, narrative-driven world of witchy demons.  
        </p>

        {/* Features */}
        <div>
          <InfoBlock>
            <img src="/Swap.png"/>
            <img src="/footage/Swap.gif"/>
            <p>
              Swap to the beat and cast powerful spells as you reassemble lost spirits solo or together with friends!
            </p>
          </InfoBlock>
          <InfoBlock>
            <img src="/Match.png"/>
            <img src="/footage/Match.gif"/>
            <p>
              Match and arrange spirits into special patterns to unlock potent powers!
            </p>
          </InfoBlock>
          <InfoBlock>
            <img src="/Bond.png"/>
            <img src="/footage/Bond.gif"/>
            <p>
              Bond with a cast of witches and demons. Plan a pizza party together, crash a concert, maybe even smooch!
            </p>
          </InfoBlock>
          <InfoBlock>
            <img src="/Decorate.png"/>
            <img src="/footage/Decorate.gif"/>
            <p>
              Decorate your bedroom. Earn trinkets and keepsakes as you play, then place them in Samar’s room to impact your runs!
            </p>
          </InfoBlock>
        </div>

        {/* Music */}
        <div>
          <div>
            {/* TODO: Add Samar GIF */}
            {/* TODO: Add Frog GIF */}
          </div>
          <div>
            {/* TODO: Beats to Match-3 To Graphic */}
            <p>
              {/* TODO: Link to meltycanon and eyesonbrandon? */}
              Coast your swap cursor to a custom chillhop soundtrack by the incredible Meltycanon and eyesonbrandon.
            </p>
            <div>
              <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1024044487&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1024093933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
          </div>
        </div>


        {/* More Stuff */}
        <div>
        <CTACard icon="samar" discord>
            {/* TODO: Add Discord SVG */}
            <p>
              {/* TODO: Get narrative to say something for Samar */}
              Join our Discord!~
            </p>
            <Button>
              Join the Discord
            </Button>
          </CTACard>
          <CTACard icon="ishk" newsletter>
            {/* TODO: Add Newsletter SVG */}
            <p>
              {/* TODO: Get narrative to say something for Samar */}
              Join our Newsletter!~
            </p>
            <Button to="http://eepurl.com/ht8xNb">
              Join the Newsletter
            </Button>
          </CTACard>
          <CTACard icon="mo" wishlist>
            {/* TODO: Add Steam SVG */}
            <p>
              {/* TODO: Get narrative to say something for Samar */}
              Wishlist on Steam
            </p>
            <Button to="TBD">
              Wishlist on Steam
            </Button>
          </CTACard>
        </div>
        <Footer/>
      </GameboardLayout>
    </div>
  )
}
