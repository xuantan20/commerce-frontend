import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website
        </p>
        <p>
          aaaaaaaaaaaaaaa
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox