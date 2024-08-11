import React from 'react'
import { FaCartArrowDown, FaPlus, FaMinusCircle, FaDollarSign } from "react-icons/fa";

import './Resume.css'

const Resume = () => {
  return (
    <div className='container__resume'>
     <div className='card_resume card__sales'>
        <span className='info__box-icon'>
            <FaCartArrowDown/>
        </span>
        <div className='info__box-content'>
            <span className='info__box-text'>
            TOTAL DE VENTAS
            </span>
            <span className='info__box-number'>10,999,000</span>
            <div className='separator'></div>
            <span className='progress__description'>691 Ventas</span>
        </div>
     </div>
     <div className='card_resume card__shopping'>
     <span className='info__box-icon'>
            <FaPlus/>
        </span>
        <div className='info__box-content'>
            <span className='info__box-text'>
            TOTAL DE COMPRAS
            </span>
            <span className='info__box-number'>2,322,000</span>
            <div className='separator'></div>
            <span className='progress__description'>6 Compras</span>
        </div>
     </div>
     <div className='card_resume card__bills'>
     <span className='info__box-icon'>
            <FaMinusCircle/>
        </span>
        <div className='info__box-content'>
            <span className='info__box-text'>
            TOTAL DE GASTOS
            </span>
            <span className='info__box-number'>1,200.000</span>
            <div className='separator'></div>
            <span className='progress__description'>4 Gastos</span>
        </div>
     </div>
     <div className='card_resume card__profits'>
     <span className='info__box-icon'>
            <FaDollarSign/>
        </span>
        <div className='info__box-content'>
            <span className='info__box-text'>
            GANANCIAS Y PÉRDIDAS
            </span>
            <span className='info__box-number'>6,400.000</span>
            <div className='separator'></div>
            <span className='progress__description'>6,400.000</span>
        </div>
     </div>
    </div>
  )
}

export default Resume
