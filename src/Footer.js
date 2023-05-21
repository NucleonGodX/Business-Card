import instagram from "./Instagram.png"
import github from "./GitHub.png"
import twitter from "./Twitter Icon.png"
export default function Footer(){
    return(<><p className="footer"></p>
    <bruv className="images">
    <a href="https://instagram.com/nuclo._.manit?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><img className="insta" src={instagram}/></a> 
    <a href="https://github.com/NucleonGodX" target="_blank"><img className="git" src={github}/></a> 
  
    <a href="https://twitter.com/Nucleon67" target="_blank"><img className="twit" src={twitter}/></a> 
    </bruv>
    </>
    )

}