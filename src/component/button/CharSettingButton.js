import './CharSettingButton.css';
import React, { useState } from 'react';
import CharSetting from '../character/CharSetting';

const CharSettingButton=()=>{

    const [ show, setShow ] = useState(false);

    const handleModalClose = (e) => {
        setShow(false);
        console.log(show);
      };
      
      const handleModalOpen = () => {
        setShow(!show);
        console.log(show);
      };

    return(
        <>
            {show?(
              <>
              <div className="modal-background">
                <div className="setting-header">
                  <div className="new-part">
                      <div className="circle cancel" style={{marginBottom:10}}
                            onClick={handleModalClose}></div>
                  </div>
                  캐릭터 설정
                  <div className="new-part"></div>
                </div>
                <CharSetting/>
              </div>
                </>
             ):null}
            <button className="setting-button char"
                    onClick={handleModalOpen}>캐릭터 설정</button>
        </> 
    );
}

export default CharSettingButton;