import './TeamInfo.css'
import React, { useState } from 'react';

const TeamInfo=()=>{
    return(
        <div className="modal-back">
            <div className="card">
                <div className="title">
                    <p  style={{fontSize:12}}>Sound Visualization 2021</p>
                </div>
                <div className="member">
                    <div className="part">
                        <div className="a developer">개발</div>
                        <div className="a">사운드</div>
                        <div className="a">디자인</div>
                    </div>
                    <div className="Kr">
                        <div className="a developer"><div>김수진<br/>조진수</div></div>
                        <div className="a"><div>김혜나</div></div>
                        <div className="a"><div>전유나</div></div>
                    </div>
                    <div className="En">
                        <div className="a developer"><div>Soo Jin Kim<br/>Jin Su Jo</div></div>
                        <div className="a"><div>Hye Na Kim</div></div>
                        <div className="a"><div>Yu Na Jeon</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamInfo;