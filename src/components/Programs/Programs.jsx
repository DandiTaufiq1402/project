import React from 'react'
import './Programs.css'
import program_1 from '../../assets/technology-.jpg'
import program_2 from '../../assets/movie.jpg'
import program_3 from '../../assets/connection-bond.jpg'
import program_icon_1 from '../../assets/icon-ti-p.jpg'
import program_icon_2 from '../../assets/icon-perfileman-b.jpg'
import program_icon_3 from '../../assets/icon-cn-p.jpg'

// ganti sesuai fakultas prodi

function Programs() {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>information technology
                </p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Film, Television & Media Studies</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Information System</p>
            </div>
        </div>

    </div>
  )
}
export default Programs
