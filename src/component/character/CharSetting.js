import './CharSetting.css';
import { HiArrowLeft } from "react-icons/hi";
import ColorPalette from '../colorPlattet/ColorPaltte';

const CharSetting=()=>{

    return(
        <>
        <div className="setting-container">
            <div className="setting-side">
                <div className="setting-part1">
                    
                </div>
                <div className="setting-part2">색상
                    <div className="color">
                        <ColorPalette color="black"></ColorPalette>
                        <ColorPalette color="gray"></ColorPalette>
                        <ColorPalette color="black"></ColorPalette>
                        <ColorPalette color="gray"></ColorPalette>
                    </div>
                    <div className="color">
                        <ColorPalette color="gray"></ColorPalette>
                        <ColorPalette color="black"></ColorPalette>
                        <ColorPalette color="gray"></ColorPalette>
                        <ColorPalette color="black"></ColorPalette>
                    </div>


                </div>
                <div className="setting-part3">
                    <div className="retry">
                        <div className="back">
                            <HiArrowLeft/>
                        </div>
                        <div className="init">
                            캐릭터 초기화
                        </div>
                    </div>
                    <button className="store">저장</button>
                </div>

            </div>
            <div className="setting-preview">

            </div>
        </div>
        </>
    );
}

export default CharSetting;