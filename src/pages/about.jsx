// importing media images
import { useNavigate } from 'react-router-dom'
import earthImg from '../assets/Earth-PNG-Image-Background.png'
import personPcImg from '../assets/personConnected.png'
import personPcImg2 from '../assets/personConnected2.png'


// importing Navbar
import Navbar from '../components/Navbar'


// About Page Template
function About() {

    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <div className="about">
                <div className="left-about">
                    <img src={earthImg} alt="" />
                </div>
                <div className="right-about">
                    <h1>I AM: Afirmmation social media</h1>
                    <h4>Tap in!</h4>
                    <div className="personConnecteds">
                        <img src={personPcImg} alt="" style={{marginRight:'35px'}} />
                        <img src={personPcImg2} alt="" />
                    </div>
                    <p>I Am is the first-and-last social media platform you should use daily. </p>
                    <button onClick={() => {
                        navigate('/login')
                    }}>Claim It</button>
                </div>
            </div>
        </>
    )
}

export default About;
