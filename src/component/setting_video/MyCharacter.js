import './MyCharacter.css'
import CharSettingButton from './character/CharSettingButton';
import BackSettingButton from './background/BackSettingButton';
const MyCharacter=()=>{
    return(
        <>
            <div className="new-container">
                <input className="nick-name" type="text" 
                        placeholder="닉네임 입력" maxlength="15">
                </input>
                <div className="preview"></div>
                <CharSettingButton/>
                <BackSettingButton/>
            </div>
        </>
    )
}

export default MyCharacter;