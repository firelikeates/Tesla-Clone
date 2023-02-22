import React, { useEffect } from 'react'


const Section = (props) => {
    
    const arrow_down_click=()=>{
        window.location.href="#Model3"
    }
    
    
    return (
        <section id={props.id?props.id:""} className={props.className ? props.className:""}  style={{ backgroundImage: `url(${props.img})`}}>
            <div className="model_name-part">
                <h3>{props.title}</h3>
                <p>{props.desc ? props.desc : ""}</p>
            </div>
            <div className="buttons-group">
                <button  className='black'>Custom Order</button><button  className='white'>Existing Inventory</button>
            </div>
            {props.svg?<img onClick={arrow_down_click} src={props.svg} className='svg_arrow_down'/>:""}
        </section>
    )
}

export default Section