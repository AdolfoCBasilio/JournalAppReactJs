import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://media.istockphoto.com/photos/blue-background-metal-pattern-picture-id1161683825?k=20&m=1161683825&s=612x612&w=0&h=G6GRKQyjujTtY_s5nin1w2453tA-pdTO21bt7BU8neE=)'
                }}
            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                    nuevo nuevo nuebo nuevo nuevo nuevo nuevo nuevo.
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
