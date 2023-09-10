import React from 'react'
import './Carditem.css'
export default function CardItem({ data }) {
    return (
        <div class="card">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={data.image_url} style={{ width: '100px', height: '200px' }} alt='img' />
            </div>
            <h5 style={{marginBlockEnd:'unset'}}>{data.name}</h5>
            <p style={{fontSize:'14px',marginBlockEnd:'unset'}}>{data.tagline}</p>
            <p className='example' style={{overflow:'auto',fontSize:'small',marginBlockEnd:'unset'}}>{data.description}</p>
        </div>
    )
}
