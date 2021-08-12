import  './Footer.css'
import { IoVideocam, IoPeopleSharp,IoChatbox, IoChevronUp } from 'react-icons/io5';
import { MdScreenShare, MdSecurity } from 'react-icons/md'
import { BiRadioCircleMarked, BiHeadphone } from 'react-icons/bi'
import { AiFillSmile } from "react-icons/ai";
import TeamInfoButton from '../button/TeamInfoButton';

export default function Footer(){
    return(
        <div className="footer">
            <div className="container-left">
                <button className="footer-button-left"
                        onClick={()=>console.log('Mute clicked!')}>
                    <div className="icon-set" style={{marginRight:-5}}>
                        <BiHeadphone size="2.4em"/>
                        <p className="icon-name">
                            오디오 연결
                        </p>
                    </div>    
                    <button className="more">
                        <IoChevronUp />
                    </button>
                </button>
                <button className="footer-button-left"
                        onClick={()=>console.log('Start Video clicked!')}>
                    <div className="icon-set" style={{marginRight:-5}}>
                        <IoVideocam size="2.4em"/>
                        <p className="icon-name">
                            비디오 시작
                        </p>
                    </div>
                    <button className="more">
                        <IoChevronUp />
                    </button>
                </button>
            </div>
            <div className="container-center">
                <button className="footer-button"
                        onClick={()=>console.log('Participants clicked!')}>
                    <div className="icon-set" style={{marginRight:8}}>
                        <MdSecurity size="2.1em" className="transform"/>
                        <p className="icon-name">
                            보안
                        </p>
                    </div>
                    <TeamInfoButton/>
                </button>
                <button className="footer-button"
                        onClick={()=>console.log('Participants clicked!')}>
                    <div className="icon-set" style={{marginRight:5}}>
                        <IoPeopleSharp size="2.3em" className="transform"/>
                        <p className="icon-name">
                            참가자
                        </p>
                    </div>
                    <button className="more">
                        <IoChevronUp />
                    </button>   
                </button>
                <button className="footer-button center"
                        onClick={()=>console.log('Chat clicked!')}>
                    <div className="icon-set">    
                        <IoChatbox size="2.1em"/>
                        <p className="icon-name">
                            채팅
                        </p>
                    </div>
                </button>
                <button className="footer-button" 
                        onClick={()=>console.log('Screen Share clicked!')}>
                    <div className="icon-set" style={{marginRight:-1}}>
                        <MdScreenShare size="2.4em"
                            className="screenshare"
                        />   
                        <p className="icon-name" style={{color:"rgb(47, 223, 91)"}}>
                            화면 공유
                        </p>
                    </div>
                    <button className="more">
                            <IoChevronUp />
                    </button>
                </button>
                <button className="footer-button center" 
                        onClick={()=>console.log('Record clicked!')}>
                    <div className="icon-set" >
                        <BiRadioCircleMarked
                            size="3.3em"
                            style={{marginTop:-7, marginBottom:-5}}
                        />
                        <p className="icon-name">
                            기록
                        </p>
                    </div>
                </button>
                <button className="footer-button center"
                        onClick={()=>console.log('Reaction clicked!')}>
                    <div className="icon-set">
                        <AiFillSmile size="2.2em"/>
                        <p className="icon-name" >
                            반응
                        </p>
                    </div>
                </button>
            </div>

            <button id="leave"
                onClick={()=>console.log('Leave cliked!')}>
                나가기
            </button>
        </div>
    );
}
