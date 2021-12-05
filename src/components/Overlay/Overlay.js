import './Overlay.css';
import './Content.css';
import './Hide.css';

export default function Overlay(props){

    return(
        <div className={`Background ${props.invisibility}`}>
            <div className={`Content`} onClick={(e)=>{
                props.setInvisibility(e);
            }}>
                Contentrr
            </div>
        </div>
    )
};