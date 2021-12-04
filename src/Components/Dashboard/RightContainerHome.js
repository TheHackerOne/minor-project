import React from 'react'
import './RightContainerHome.css'
import Card from './Card'
import Card2 from './Card2'
import Graph1 from '../../Assets/graph1.PNG'
import Graph2 from '../../Assets/graph2.PNG'
import Graph3 from '../../Assets/graph3.PNG'

function RightContainerHome() {
    return (
        <div className='RCH-outer-container'>
            <div className='RCH-inner-container'>
                <div className='RCH-card-container'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className='RCH-card2-container'>
                    <Card2 img={Graph1}/>
                    <Card2 img={Graph2}/>
                    <Card2 img={Graph3}/>
                </div>
            </div>
        </div>
    )
}

export default RightContainerHome
