import  './Footer.css'
import { IoVideocam, IoPeopleSharp,IoChatbox, IoChevronUp } from 'react-icons/io5';
import { MdScreenShare, MdSecurity } from 'react-icons/md'
import { BiRadioCircleMarked, BiHeadphone } from 'react-icons/bi'
import { AiFillSmile } from "react-icons/ai";
import TeamInfoButton from '../button/TeamInfoButton';
import CharacterButton from '../button/CharacterButton';

export default function Footer(){
    return(
        <div className="footer">
            <div className="container-left">
                <button className="footer-button-left"
                        onClick={()=>console.log('Mute clicked!')}>
                    <div className="icon-set" style={{marginRight:-5}}>
                        <BiHeadphone size="2.4em"/>
                        오디오 연결
                    </div>    
                    <button className="more">
                        <IoChevronUp />
                    </button>
                </button>
                <button className="footer-button-left"
                        onClick={()=>console.log('Start Video clicked!')}>
                    <div className="icon-set" style={{marginRight:-5}}>
                        <IoVideocam size="2.4em"/>
                        비디오 시작
                    </div>
                    <CharacterButton/>
                </button>
            </div>
            <div className="container-center">
                <button className="footer-button"
                        onClick={()=>console.log('Participants clicked!')}>
                    <div className="icon-set" style={{marginRight:8}} >
                        <MdSecurity size="1.8em" className="transform" style={{marginBottom:3}}/>
                        보안
                    </div>
                    <TeamInfoButton/>
                </button>
                <button className="footer-button"
                        onClick={()=>console.log('Participants clicked!')}>
                    <div className="icon-set" style={{marginRight:5}}>
                        <IoPeopleSharp size="2.4em" className="transform"/>
                        참가자
                    </div>
                    <button className="more">
                        <IoChevronUp />
                    </button>   
                </button>
                <button className="footer-button center"
                        onClick={()=>console.log('Chat clicked!')}>
                    <div className="icon-set">    
                        <IoChatbox size="2.1em" style={{marginBottom:3}}/>
                        채팅
                    </div>
                </button>
                <button className="footer-button screenshare" 
                        onClick={()=>console.log('Screen Share clicked!')}>
                    <div className="icon-set screenshare" style={{marginRight:-1}}>
                        <MdScreenShare size="2.4em" style={{marginBottom:1}}/>   
                        화면 공유
                    </div>
                    <button className="more">
                            <IoChevronUp />
                    </button>
                </button>
                <button className="footer-button center" 
                        onClick={()=>console.log('Record clicked!')}>
                    <div className="icon-set" >
                        <BiRadioCircleMarked
                            size="3.2em"
                            style={{marginTop:-5, marginBottom:-3}}
                        />
                        기록
                    </div>
                </button>
                <button className="footer-button center"
                        onClick={()=>console.log('Reaction clicked!')}>
                    <div className="icon-set">
                        <AiFillSmile size="2em" style={{marginBottom:5}}/>
                        반응
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
