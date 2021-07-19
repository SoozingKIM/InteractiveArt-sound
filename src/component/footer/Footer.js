import  './Footer.css'
import { FaMicrophone } from 'react-icons/fa';
import { IoVideocam, IoPeopleSharp,IoChatbox, IoChevronUp } from 'react-icons/io5';
import { MdScreenShare } from 'react-icons/md'
import { BiRadioCircleMarked } from 'react-icons/bi'

export default function Footer(){
    return(
        <div className="footer">
            <div className="container-left">
                <button className="footer-icon-button"
                        onClick={()=>console.log('Mute clicked!')}>
                    <div>
                    <FaMicrophone 
                        size="3.3em"
                        style={{marginTop:5, marginBottom:-2, marginLeft:20}}
                    />
                    <IoChevronUp 
                        size="1.5em"
                        style={{marginLeft:5, marginBottom:10}}
                    />
                    </div>    
                    <p className="icon-name">
                        Mute  
                    </p>
                </button>
                <button className="footer-icon-button"
                        onClick={()=>console.log('Start Video clicked!')}>
                    <div>
                    <IoVideocam
                        size="4em"
                        style={{marginBottom:-7, marginLeft:10}}
                    />
                    <IoChevronUp 
                        size="1.5em"
                        style={{marginLeft:8, marginBottom:8}}
                    />
                    </div>
                    <p className="icon-name">
                        Start Video 
                    </p>
                </button>

            </div>
            <div className="container-center">
                <button className="footer-icon-button"
                        onClick={()=>console.log('Participants clicked!')}>
                    <IoPeopleSharp
                        size="4em"
                        className="icon-participants"
                        style={{marginBottom:-5}}
                    />
                    <p className="icon-name">
                        Participants
                    </p>
                </button>
                <button className="footer-icon-button"
                        onClick={()=>console.log('Chat clicked!')}>
                    <IoChatbox
                        size="3.5em"
                        style={{marginTop:3, marginBottom:-2}}
                    />
                    <p className="icon-name">
                        Chat
                    </p>
                </button>
                <button className="footer-icon-button"
                        onClick={()=>console.log('Screen Share clicked!')}>
                    <MdScreenShare
                        size="4em"
                        className="icon-screenshare"
                        style={{marginBottom:-4}}
                    />
                    <p className="icon-name" style={{color:"rgb(47, 223, 91)"}}>
                        Screen Share
                    </p>
                </button>
                <button className="footer-icon-button"
                        onClick={()=>console.log('Record clicked!')}>
                    <BiRadioCircleMarked
                        size="5em"
                        style={{marginBottom:-12}}
                        
                    />
                    <p className="icon-name">
                        Record
                    </p>
                </button>
            </div>

            <button id="leave"
                onClick={()=>console.log('Leave cliked!')}>
                Leave
            </button>
        </div>
    )
}
