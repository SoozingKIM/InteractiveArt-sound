import './NewCharacter.css'
import CharSettingButton from '../button/CharSettingButton';

const NewCharacter=()=>{
    return(
        <>
            <div className="new-container">
                <input className="nick-name" type="text" 
                        placeholder="닉네임 입력" maxlength="15">
                </input>
                <div className="preview"></div>
                <CharSettingButton/>
                <button className="setting-button background">가상배경 설정</button>
            </div>
        </>
    )
}

export default NewCharacter;