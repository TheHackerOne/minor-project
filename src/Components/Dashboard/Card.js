import React from 'react'
import './Card.css'
import ChairIcon from '@mui/icons-material/Chair';

function Card() {
    return (
        <div className='card-container'>
            <div className='card-container--icon-container'>
                <div className='card-container--icon-square'>
                    <div className='card-container--icon-box'>
                        <ChairIcon fontSize='medium' className='icon'/>
                    </div>
                </div>
                <div className='card-container--icon-text'>
                    <p>Today's Money</p>
                    <h2>$53k</h2>
                </div>
            </div>

            <div className='card-container--text-container'><span>&nbsp;+55% </span>&nbsp;than last week</div>
        </div>
    )
}

export default Card
