import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data.js'

const MyWork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
            return <img key={index} src= {work.work_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
      </div>
    </div>
  )
}

export default MyWork
