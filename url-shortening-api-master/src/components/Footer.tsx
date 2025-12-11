import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";

const Footer = () => {
    return (
        <div className="bg-purple-900">
            <img src={logo}/>
            <div>
               <div>
                        <div>Features</div>
                         <div>Link Shortening</div>
                         <div>Branded Links</div>
                         <div>Analytics</div>
                    </div>
                    <div>
                        <div>Resources</div> 
                        <div>Blog</div> 
                        <div>Developers</div> 
                        <div>Support</div> 
                    </div>
                    <div>
                        <div>Company</div> 
                        <div>About</div> 
                        <div >Our Team</div> 
                        <div>Careers</div> 
                        <div>Contact</div> 
                    </div>
            </div>
            <div>
                <div> <img src={facebook} /></div>
                 <div> <img src={twitter} /></div>
                  <div> <img src={pinterest} /></div>
                   <div> <img src={instagram} /></div>
            </div>

        </div>
    )
}

export default Footer;