import TeamInfo from "../teamInfo/TeamInfo";
import React, { useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';
import './TeamInfoButton.css'

const TeamInfoButton=()=>{

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
                    <div
                    className="modal-back"
                    onClick={handleModalClose}
                    >
                        <TeamInfo/>
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
    );
}

export default TeamInfoButton;