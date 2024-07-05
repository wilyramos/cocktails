import { SocialIcon } from "react-social-icons"


export default function Footer() {
  return (
    <footer>
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-24" src="/logo.svg" alt="Logo" />
                </div>
                <nav className="">
                    < SocialIcon url="https://www.facebook.com/" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 35, width: 35 }} />
                    < SocialIcon url="https://www.instagram.com/" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 35, width: 35 }} />
                    < SocialIcon url="https://www.twitter.com/" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 35, width: 35 }} />
                    < SocialIcon url="https://www.github.com/" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 35, width: 35 }} />
                </nav>
            </div>
        </div>
    </footer>
  )
}
