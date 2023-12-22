import React from 'react'
import './ColorCards.css'

function ColorCards(props) {
    return (
        <div style={{
            padding:"50px",
            boxShadow:"0 0 5px gray",
            margin:"20px",
            borderRadius:"10px",
            height:'250px',
       
        }}>
          <div style={{
            backgroundColor:props.colorCode,
            height:'200px',
            width:'100px',
            boxShadow:"0 0 5px gray",
            borderRadius:"10px"

          }}>

          </div>
          <h3>{props.colorCode}</h3>
          <p style={{
            color:props.colorCode
          }}>{props.name}</p>

          
        </div>
       
    )
}

export default ColorCards
