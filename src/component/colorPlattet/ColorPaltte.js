import './ColorPalette.css'

const ColorPalette=(props)=>{
    return(
        <div className="color-palette" style={{backgroundColor: props.color}}></div>
    )
}

export default ColorPalette;
