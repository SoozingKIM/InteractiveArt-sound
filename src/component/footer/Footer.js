import  './Footer.css'
import { FaMicrophone } from 'react-icons/fa';
import { IoVideocam, IoPeopleSharp,IoChatbox, IoChevronUp } from 'react-icons/io5';
import { MdScreenShare, MdSecurity } from 'react-icons/md'
import { BiRadioCircleMarked, BiHeadphone } from 'react-icons/bi'
import { AiFillSmile } from "react-icons/ai";
import TeamInfoButton from '../button/TeamInfoButton';

export default function Footer(){
    return(
        <div className="footer">
            <div className="container-left">
                <button className="footer-button"
                        onClick={()=>console.log('Mute clicked!')}>
                    <div className="icon-set" style={{alignItems:'center'}}>
                        <BiHeadphone
                            size="2.5em"
                            style={{marginBottom:-10}}
                        />
                        <p className="icon-name">
                            오디오 연결
                        </p>
                    </div>    
                    <button className="more">
                        <IoChevronUp />
                    </button>
                </button>
                <button className="footer-button"
                        onClick={()=>console.log('Start Video clicked!')}>
                    <div className="icon-set" style={{alignItems:'center'}}>
                        <IoVideocam
                            size="2.5em"
                            style={{marginBottom:-7, marginLeft:10}}
                        />
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
                    <div className="icon-set">
                        <MdSecurity
                            size="2.5em"
                            className="participants"
                        />
                        <p className="icon-name">
                            보안
                        </p>
                    </div>
                    <TeamInfoButton/>
                </button>
                <button className="footer-button"
                        onClick={()=>console.log('Participants clicked!')}>
                    <div className="icon-set">
                        <IoPeopleSharp
                            size="3em"
                            className="participants"
                            style={{marginBottom:-5}}
                        />
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
                        <IoChatbox
                            size="3em"
                            style={{marginTop:3, marginBottom:-2}}
                        />
                        <p className="icon-name">
                            채팅
                        </p>
                    </div>
                </button>
                <button className="footer-button"
                        onClick={()=>console.log('Screen Share clicked!')}>
                    <div className="icon-set" style={{alignItems:'center'}}>
                        <MdScreenShare
                            size="3em"
                            className="screenshare"
                            style={{marginBottom:-4}}
                        />   
                        <p className="icon-name" style={{color:"rgb(47, 223, 91)",}}>
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
                            size="4.5em"
                            style={{marginBottom:-10}}
                        />
                        <p className="icon-name">
                            기록
                        </p>
                    </div>
                </button>
                <button className="footer-button center"
                        onClick={()=>console.log('Reaction clicked!')}>
                    <div className="icon-set">
                        <AiFillSmile
                            size="2.8em"
                            style={{marginTop:8}}
                        />
                        <p className="icon-name" style={{marginTop:12}}>
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
