import email from './Icon.png'
import linkd from './linkd.png'
import Link from './App'
export default function Info(){
    return (   <>
    <h1>Harshjeet Singh</h1>
    <h3>Frontend Developer</h3>
    <img className="img1" src={email}/>
    <img className="img2" src={linkd}/>
    <a href="mailto:manitsingh018@gmail.com" target="_blank"><button id="em-btn" >Email</button></a>
    <a href="https://www.linkedin.com/" target="_blank"><button id="li-btn" className="bttn">Linkedin</button></a>
    </>)
}
