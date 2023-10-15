import React from 'react'
import './card-css.css'

export default function Card({subtitle , title , isCompleted}) {
  return (
    <div className="card">
      <div className="card__checkbox-wrapper">
        <input id={title} type="checkbox" defaultChecked={isCompleted} />
        <label htmlFor={title} />
      </div>

      <div className="card__title">{title}</div>
      <div className="card__subtitle">{subtitle}</div>
    </div>
  )
}
