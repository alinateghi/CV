import './Header.css'
import EmailImage from './Email.png'
import LinkedInImage from './Linkedin.png'
import PhoneImage from './Whatsapp.png'
import GeoImage from './Geo.png'

const Header = () => {
    return (
        <>
            <div className='header-content'>
                <div className='info'>
                    <h1 className="name">Ali<br />Nateghi</h1>
                    <p className='role'>Backend Developer</p>
                </div>
                <div className='contact'>
                    <p><img src={GeoImage} alt='geo icon' /> Tehran, Iran</p>
                    <p><img src={PhoneImage} alt='geo icon' /> +98 936 596 7648</p>
                    <p><img src={EmailImage} alt='geo icon' /> nateghi.dev@gmail.com</p>
                    <p><img src={LinkedInImage} alt='geo icon' /> <a href="https://linkedin.com/in/alinateghi">linkedin.com/in/alinateghi</a></p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Header;