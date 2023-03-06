import React, {useState} from 'react';
import Sresult from './Sresult';

const Search = () => {
    const [img, setImg] = useState();
    const heading = {
        fontWeight:"bold",
        display:"flex",
        justifyContent:"center",
        textAlign:"center",
        alignItem:"center",
        // textTransform:"capitilization"

    }

    const handleChange = (event)=>{
        const data = event.target.value;
        console.log(data)
        setImg(data);
    }

  return (
    <>
      <input style={heading} type="text" placeholder='search' value={img}  onChange={handleChange}/>

      {
      img===""  
       ?null
       :<Sresult name={img}></Sresult>
      } 
    </>
  );
}

export default Search;
