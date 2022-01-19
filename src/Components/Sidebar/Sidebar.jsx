import './sidebar.css'
import React, {useState, useEffect} from 'react';


function Sidebar({generate, handleSpeed, handleQuantity, algorithmType, sort, playing, quantity, speed}) {

    const [open, setOpen] = useState(false);

    useEffect (() => {
        algorithmType === null ? setOpen(false): setOpen(true)
    }, [algorithmType]);
    
    
    return (
        <div className='sidebar'>
            <div className={open? 'dd-menu active' : 'dd-menu'}>
                <i className="fas fa-chevron-down" onClick={() => setOpen(!open)}></i>
                <div className='dd-buttons'>
                    <button className= "generate" 
                        onClick={generate} 
                        disabled={playing}
                        >Generate</button>
                    <button className= "sort" 
                        onClick={sort} 
                        disabled={playing}
                        >Sort</button>
                </div>
                <div className='sliders'>
                    <label>Speed</label>
                    <input className='slider-item'
                        type='range' 
                        onChange={handleSpeed} 
                        min="1" 
                        max="10" 
                        step="1" 
                        value={speed}
                        disabled={playing}/>
                    <label>Quantity</label>
                    <input className='slider-item'
                        type='range' 
                        onChange={handleQuantity} 
                        min="5" 
                        max="100" 
                        step="5" 
                        value={quantity}
                        disabled={playing}></input>
                </div>


            </div>
        </div>
    );
};

export default Sidebar;