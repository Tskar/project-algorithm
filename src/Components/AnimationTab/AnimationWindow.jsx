import './animationWindow.css'
import React from 'react';


function AnimationWindow ({array, compare, color, quantity}) {

    return (
        <div className='displayPage'>
            {array.map((item, id) => {
                let bgcolor = '#ffe3e3'

                if(id === compare[0] || id === compare[1]){
                    bgcolor = color
                } 

                const style = {
                    'backgroundColor': bgcolor,
                    'color' : `${(parseInt(quantity) >= 15)? 'transparent' : 'black'}`,
                    'height': `${item}px`,
                    'width' : `${300/ parseInt(quantity)}px`
                }

                return (<div key={id} className='array-bars'
                    style={style}>
                        {item}
                </div>)
            })
            }
        </div>
    );
};

export default AnimationWindow;