import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-row'>
     <div className="bg-[url(/assets/images/image-header.jpg)]">
      
        <div>
          <div className='text-blue-600'>logo</div>
          <div>
            <ul>
              <li>About</li> 
               <li>Services</li> 
                <li>Projects</li> 
                 <li>Contact</li> 
            </ul>
          </div>
        </div>
          
         <div>We are creatives </div>
     
     </div>
     <div>  
        <div>
            <div>
              <div>Transform your brand</div>
              <div>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. </div>
              <div>Learn more</div>
            </div>
            <div>img</div>
        </div>
         <div>
            <div>
              <div>Stand out to the right audience </div>
              <div>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places</div>
              <div>Learn more</div>
            </div>
            <div>img</div>
        </div>
       
        
     </div>
     <div>
        <div>
            <div>Graphic design Great design </div>
            <div> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</div>
        </div>
        <div>
            <div>Photography </div>
            <div>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
        </div>
     </div>
     <div>
        <div>Client testimonials</div>
        <div>
            <div>frofile</div>
            <div>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. </div>
            <div>Emily R. </div>
            <div>Marketing Director </div>
        </div>
        <div>
            <div>frofile</div>
            <div>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</div>
            <div>Thomas S.</div>
            <div>Chief Operating Officer</div>
        </div>
        <div>
            <div>frofile</div>
            <div>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</div>
            <div>Jennie F.</div>
            <div>Business Owner</div>
        </div>
      </div>
      <div>
          <div>img1</div>
          <div>img2</div>
          <div>img3</div>
          <div>img4</div>
      </div>
      <div>
          <div></div>
          <div>
              <div>About</div>
              <div>Services</div>
              <div>Projects</div>
          </div>
           <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
    </div>
  )
}

export default App
