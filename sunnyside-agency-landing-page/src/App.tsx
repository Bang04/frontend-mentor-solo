import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col'>
      <div className="bg-[url('/src/assets/images/mobile/image-header.jpg')] bg-cover  md:bg-[url('/src/assets/images/desktop/image-header.jpg')] bg-center bg-no-repeat">
          <div className='flex flex-row content-between'>


            <div className='text-blue-600'><img src='/src/assets/images/logo.svg' /></div>
            
            <div>
              <div className='md:hidden'><button><img src='/src/assets/images/icon-hamburger.svg' /></button></div>
              <div className='flex flex-row hidden md:flex'>
                  <div>About</div> 
                  <div>Services</div> 
                  <div>Projects</div> 
                  <div>Contact</div> 
              </div>
            </div>
            
          </div>
            
          <div className='text-5xl font-bold text-white'>We are creatives </div>
          <img src='/src/assets/images/icon-arrow-down.svg' />
      </div>

      <div className='text-center'>  
            <div>
                <div>
                  <div>Transform your brand</div>
                  <div>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. </div>
                  <div>Learn more</div>
                </div>
                <div className="bg-[url('/src/assets/images/mobile/image-transform.jpg')]">img</div>
            </div>
            <div>
                <div>
                  <div>Stand out to the right audience </div>
                  <div>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places</div>
                  <div>Learn more</div>
                </div>
                <div className="bg-[url('/src/assets/images/mobile/image-stand-out.jpg')]">img</div>
            </div>
      </div>
      
      <div className='text-center'>
          <div className="bg-[url('/src/assets/images/mobile/image-graphic-design.jpg')]">
              <div>Graphic design Great design </div>
              <div>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</div>
          </div>
          <div className="bg-[url('/src/assets/images/mobile/image-photography.jpg')]">
              <div>Photography </div>
              <div>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
          </div>
      </div>
      <div className='text-center'>
          <div>Client testimonials</div>
          <div>
              <div className="m-auto rounded-full bg-[url('/src/assets/images/image-emily.jpg')] bg-no-repeat bg-center bg-cover w-20 h-20" ></div>
              <div>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. </div>
              <div>Emily R. </div>
              <div>Marketing Director </div>
          </div>
          <div>
              <div className="m-auto rounded-full bg-[url('/src/assets/images/image-thomas.jpg')] bg-no-repeat bg-center bg-cover w-20 h-20"></div>
              <div>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</div>
              <div>Thomas S.</div>
              <div>Chief Operating Officer</div>
          </div>
          <div>
              <div className="m-auto rounded-full bg-[url('/src/assets/images/image-jennie.jpg')] bg-no-repeat bg-center bg-cover w-20 h-20"></div>
              <div>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</div>
              <div>Jennie F.</div>
              <div>Business Owner</div>
          </div>
      </div>
      <div className='flex flex-col'>
          <div className='flex flex-row w-full h-40'>
              <div className="w-1/2 h-50 bg-[url('/src/assets/images/mobile/image-gallery-milkbottles.jpg')] bg-cover"></div>
              <div className="w-1/2 bg-[url('/src/assets/images/mobile/image-gallery-orange.jpg')] bg-cover"></div>
          </div>
          <div className='flex flex-row w-full h-40'>
              <div className="w-1/2 bg-[url('/src/assets/images/mobile/image-gallery-cone.jpg')] bg-cover"></div>
              <div className="w-1/2 bg-[url('/src/assets/images/mobile/image-gallery-sugar-cubes.jpg')] bg-cover"></div>
          </div> 
      </div>
      <div>
          <div></div>
          <div className='flex flex-row'>
              <div className='w-1/3'>About</div>
              <div className='w-1/3'>Services</div>
              <div className='w-1/3'>Projects</div>
          </div>
          <div className='flex flex-row'>
              <div><img src='/src/assets/images/icon-facebook.svg'/> </div>
              <div><img src='/src/assets/images/icon-instagram.svg'/></div>
              <div><img src='/src/assets/images/icon-twitter.svg'/></div>
              <div><img src='/src/assets/images/icon-pinterest.svg'/></div>
          </div>
      </div>
    </div>
  )
}

export default App


