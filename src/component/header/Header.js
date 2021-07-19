import './Header.css'
import { AiOutlineFullscreen, AiFillSafetyCertificate, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsGrid1X2Fill } from 'react-icons/bs'



export default function Header(){
    return(
        <div className="header">
            <div className="header-container-left">
                <button className="header-button left"
                    onClick={()=>console.log('info clicked!')}>
                    <AiOutlineInfoCircle
                        size="2em"
                        style={{marginTop:5, marginBottom:3}}
                        className="icon-info"
                    />
                </button>
                <button className="header-button left"
                        onClick={()=>console.log('Security clicked!')}>
                    <AiFillSafetyCertificate
                        size="2em"
                        style={{marginTop:5, marginBottom:3}}
                        className="icon-security"
                    />
                </button>
            </div>
            <div className="header-container-right"> 
                <button className="header-button right"
                        onClick={()=>console.log('Speaker View clicked!')}>
                    <BsGrid1X2Fill
                        size="1.1em"
                        className="icon-view"
                    />
                    <p style={{margin: '0px 6px', fontSize:12}}>
                        Speaker View
                    </p>
                </button>

                <button className="header-button right"
                        onClick={()=>console.log('Full Screen clicked!')}>
                    <AiOutlineFullscreen
                        size="1.5em"
                        className="icon-screen"
                    />
                </button>
            </div>




        </div>
    )
}