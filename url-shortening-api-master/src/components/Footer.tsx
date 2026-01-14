import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-4">
                <div>
                    <a href="#" className="text-2xl font-bold">LOGO</a>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Features</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Link Shortening</a></li>
                        <li><a href="#" className="hover:text-white">Branded Links</a></li>
                        <li><a href="#" className="hover:text-white">Analytics</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Resources</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Developers</a></li>
                        <li><a href="#" className="hover:text-white">Support</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Our Team</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;