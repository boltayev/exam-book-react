import "./Header.scss"


import Moon from "../../images/moon.png"
import Owa from "../../images/owa_images.png"

function Header(){
    return(
        <div className="header_block ">
            <div><img src={Owa} alt="owa_img" /></div>
            <nav>
                <div><img src={Moon} alt="moon" /></div>
                <button>Log out</button>
            </nav>
        </div>
    )
}

export default Header
