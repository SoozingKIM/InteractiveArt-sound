import './AudioButton.css'

const AudioButton=()=>{
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
        <div className="setting-header">
        <div className="new-part">
            <div className="circle cancel" style={{marginBottom:10}}
                  onClick={handleModalClose}></div>
        </div>
        오디오 설정
        <div className="new-part"></div>
      </div>
      )
}

export default AudioButton;