import React , {useRef} from 'react'
import logoorganic from '../assets/logoorganic.jpg'
const ImageEx=()=>{
    let imageEl=useRef(null);
    return <div>
        <img src={logoorganic} alt="RefEx" width="50%" ref={imageEl}/>
        <button onClick={()=>{
            console.log(imageEl.current)
        }}>Click</button>

      
    </div>
}
export default ImageEx