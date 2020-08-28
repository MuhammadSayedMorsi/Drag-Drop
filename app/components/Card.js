import React from 'react'

export default function Card(props) {

  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id)

    setTimeout(() => {
      target.style.display = 'none'
    }, 0)

  }

  const dragOver = e  => {
    e.preventDefault();
  }

  return (
    <div
      id={props.id}
      className={props.className}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable={props.draggable}
    >
      { props.children }
    </div>
  )
}