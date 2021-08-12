import './CharacterButton.css';
import React, { useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';
import NewCharacter from '../character/NewCharacter';

const CharacterButton=()=>{

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
        {show? ( 
                <div className="modal-background">
                    <div className="new-header">
                        <div className="new-part">
                            <div className="circle cancel" onClick={handleModalClose}></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        내 캐릭터 생성
                        <div className="new-part"></div>
                    </div>
                    <NewCharacter/>
                    <div className="new-bottom">
                        <button className="new-complete"
                                onClick={handleModalClose}>
                            완료
                        </button>
                    </div>
                </div>
            ) 
            : null 
        }
        <button className="more"
                onClick={handleModalOpen}
                >
            <IoChevronUp/>
        </button> 
    </>  
      )
}

export default CharacterButton;