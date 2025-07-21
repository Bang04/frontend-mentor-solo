import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [isOpen, setIsOpen ] = useState(false);
  const handlerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col'>
        <div className="bg-[url('/src/assets/images/mobile/image-header.jpg')] bg-cover  md:bg-[url('/src/assets/images/desktop/image-header.jpg')] bg-center bg-no-repeat">
          
            <div className='flex flex-row justify-between pt-10 px-7'>
            {/* 로고 */}
            <div className='text-blue-600'>
                <img src='/src/assets/images/logo.svg' alt='logo'/>
            </div>

            {/* 사이드 메뉴& 햄버거 버튼 */}
            <div>
                <div className='md:hidden'><button onClick={handlerMenu}><img src='/src/assets/images/icon-hamburger.svg' /></button></div>
                <div className='flex flex-row hidden md:flex'>
                    <div className='text-white text-sm px-3 py-2 hover:font-bold  hover:text-black hover:bg-white hover:rounded-full'>About</div> 
                    <div className='text-white text-sm px-3 py-2 hover:font-bold  hover:text-black hover:bg-white hover:rounded-full'>Services</div> 
                    <div className='text-white text-sm px-3 py-2 hover:font-bold  hover:text-black hover:bg-white hover:rounded-full'>Projects</div> 
                    <div className='text-white text-sm px-3 py-2  hover:font-bold  hover:text-black hover:bg-white hover:rounded-full'>Contact</div> 
                     
                </div>
            </div>
            </div>
            
            <div className='flex flex-col'>
                <p className='fraunces-900 pt-20 text-center font-bold text-white tracking-[.25em] text-4xl md:text-5xl'>WE ARE CREATIVES</p>
                <img className='h-40 mt-5 mb-24 md:mb-50 object-scale-down' src='/src/assets/images/icon-arrow-down.svg' />
            </div>
      </div>


     
      <div className='flex flex-col'>  
            {/* 계란 */}
            <div className='flex flex-col md:flex-row-reverse'>
                <div className="felx h-50 md:h-90 md:w-1/2 bg-[url('/src/assets/images/mobile/image-transform.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className='flex flex-col h-90 max-w-md  md:w-1/2 m-auto justify-center  items-center md:items-start gap-y-5'>
                  <div className='md:max-w-3xs fraunces-900 text-2xl text-center md:text-left'>Transform your brand</div>
                  <div className='barlow text-gray-400 text-base tracking-wide text-center md:text-left '>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. </div>
                  <div className='flex w-30 border-b-8 border-yellow-100 fraunces-700'>LEARN MORE</div>
                </div>
            </div>

            {/* 컵 */}
            <div className='flex flex-col md:flex-row'>
                <div className="felx h-50 md:h-90 md:w-1/2 bg-[url('/src/assets/images/mobile/image-stand-out.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className='flex flex-col h-90 max-w-md  md:w-1/2 m-auto justify-center  items-center md:items-start gap-y-5'>
                  <div className='md:max-w-3xs fraunces-900 text-2xl text-center md:text-left'>Stand out to the right audience</div>
                  <div className='barlow text-gray-400 text-base tracking-wide text-center md:text-left '> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places</div>
                  <div className='flex w-30 border-b-8 border-red-100 fraunces-700'>LEARN MORE</div>
                </div>
            </div>


            
      </div>
      
      <div className='flex flex-col md:flex-row text-center'>
         {/* 체리 */}
            <div className="md:w-1/2 h-150 bg-cover bg-center bg-[url('/src/assets/images/mobile/image-graphic-design.jpg')] bg-no-repeat">
                <div className='flex flex-col mt-100'>
                    <div className='m-auto w-3xs fraunces-900 text-3xl text-gray-700'>Great design </div>
                    <div className='mt-8 m-auto max-w-sm barlow text-gray-600'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</div>
                </div>
            </div>
            {/* 귤 */}
            <div className="md:w-1/2 h-150 bg-cover bg-center bg-[url('/src/assets/images/mobile/image-photography.jpg')] bg-no-repeat">
                <div className='flex flex-col mt-100'>
                    <div className='m-auto w-3xs fraunces-900 text-3xl text-gray-700'>Photography </div>
                    <div className='mt-8 m-auto w-xs barlow text-gray-600'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
                </div>
            </div>
      </div>

      <div className='flex flex-col  mt-15 mb-15'>
           <div className='flex justify-center tracking-widest fraunces-700 text-base text-gray-400'>CLIENT TESTIMONIALS</div>
           <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-1/3 w-full text-center'>
                    <div className="mt-15 mb-8  m-auto rounded-full bg-[url('/src/assets/images/image-emily.jpg')] bg-no-repeat bg-center bg-cover w-18 h-18" ></div>
                    <div className='m-auto max-w-sm text-base barlow text-gray-500'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. </div>
                    <div className='mt-8 text-lg fraunces-900  text-gray-700'>Emily R. </div>
                    <div className='mt-2 text-sm barlow text-gray-400'>Marketing Director </div>
                </div>
                <div className='w-1/3 w-full text-center'>
                    <div className="mt-15 mb-8 m-auto rounded-full bg-[url('/src/assets/images/image-thomas.jpg')] bg-no-repeat bg-center bg-cover w-18 h-18"></div>
                    <div className='m-auto max-w-sm text-base barlow text-gray-500'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</div>
                    <div className='mt-8 text-lg fraunces-900  text-gray-700'>Thomas S.</div>
                    <div className='mt-2 text-sm barlow text-gray-400'>Chief Operating Officer</div>
                </div>
                <div className='w-1/3 w-full text-center'>
                    <div className="mt-15 mb-8 m-auto rounded-full bg-[url('/src/assets/images/image-jennie.jpg')] bg-no-repeat bg-center bg-cover w-18 h-18"></div>
                    <div className='m-auto max-w-sm text-base barlow text-gray-500'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</div>
                    <div className='mt-8 text-lg fraunces-900  text-gray-700'>Jennie F.</div>
                    <div className='mt-2 text-sm barlow text-gray-400'>Business Owner</div>
                </div>
           </div>
         
      </div>

      <div className='flex flex-col md:flex-row'>
          <div className='flex flex-row w-full h-50'>
              <div className="w-1/2 bg-[url('/src/assets/images/mobile/image-gallery-milkbottles.jpg')] bg-cover bg-center"></div>
              <div className="w-1/2 bg-[url('/src/assets/images/mobile/image-gallery-orange.jpg')] bg-cover bg-center"></div>
          </div>
          <div className='flex flex-row w-full h-50'>
              <div className="w-1/2 bg-[url('/src/assets/images/mobile/image-gallery-cone.jpg')] bg-cover bg-centerr"></div>
              <div className="w-1/2 bg-[url('/src/assets/images/mobile/image-gallery-sugar-cubes.jpg')] bg-cover bg-center"></div>
          </div> 
      </div>

      {/* footer */}
      <div className='flex flex-col py-15 text-center bg-[#8fd4c6]'>
          <div className=' text-4xl md:text-2xl fraunces-900 text-[#2D7568]'>sunnyside</div>
          <div className='flex flex-row w-full py-10 barlow'>
              <div className='w-1/3 text-[#2D7568] md:text-sm'>About</div>
              <div className='w-1/3 text-[#2D7568] md:text-sm'>Services</div>
              <div className='w-1/3 text-[#2D7568] md:text-sm'>Projects</div>
          </div>
          <div className='flex flex-row  m-auto w-50  py-8'>
              <div className='w-1/4'><img src='/src/assets/images/icon-facebook.svg'/> </div>
              <div className='w-1/4'><img src='/src/assets/images/icon-instagram.svg'/></div>
              <div className='w-1/4'><img src='/src/assets/images/icon-twitter.svg'/></div>
              <div className='w-1/4'><img src='/src/assets/images/icon-pinterest.svg'/></div>
          </div>
      </div>


      {/* Menu */}
        <div className={`${isOpen ? 'flex' : 'hidden'} absolute inset-0 flex items-center justify-center my-10 mx-8 md:hidden`}>
            <div className='flex min-w-3xs  bg-white text-center'>
                <div className='flex-col md:flex-row my-7 mx-4'>
                    <div className='text-2xl text-gray-400 px-15 py-5 hover:font-bold  hover:text-gray-800 hover:bg-yellow-300 hover:rounded-full'>About</div>
                    <div className='text-2xl text-gray-400 px-15 py-5 hover:font-bold  hover:text-gray-800 hover:bg-yellow-300 hover:rounded-full'>Services</div>
                    <div className='text-2xl text-gray-400 px-15 py-5 hover:font-bold  hover:text-gray-800 hover:bg-yellow-300 hover:rounded-full'>Projects</div>
                    <div className='text-2xl text-gray-400 px-15 py-5 hover:font-bold  hover:text-gray-800 hover:bg-yellow-300 hover:rounded-full'>CONTACT</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App


