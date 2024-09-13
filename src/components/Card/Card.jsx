import React from 'react'
import './Card.css'
import Icon from '../icons/icon'

function Card({player,onPlay,index}) {

    let icon=<Icon/>
    if(player =='x'){
        icon= <Icon name='cross'/>
    }
    else if(player=='o'){
        icon= <Icon name='circle'/>

    }    
    
  return (

    <div className='card'onClick={()=>onPlay(index)}>
        {icon}
      
    </div>
  )
}

export default Card
