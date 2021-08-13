import { useState } from 'react';
import './Category.css'

const Category=(props)=>{

    const [ click, setClick ] = useState(false);

    const handleClickYes = (e) => {
        setClick(true);
        console.log(click);
      };
      
      const handleClickNo = () => {
        setClick(false);
        console.log(click);
      };

    return(
        <>
        { click?(
                <div className="category-clicked" onClick={handleClickNo}>
                    <div className="category-image"></div>
        {props.name}</div>
            ):
            (<div className="category" onClick={handleClickYes}>
                <div className="category-image"></div>
        {props.name}</div>)
        }

        </>

    )
}

export default Category;