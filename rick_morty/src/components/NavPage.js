import React from 'react'
import '../styles/navpage.scss'

const NavPage = (props) => {
  return (
    <div className='navpage'>
      {props.page == 1 ? <p/>:<button onClick={() => props.setPage(props.page - 1)} className='nav-btn'>Page {props.page-1}</button>}
      
      <p>Page: {props.page}</p>
      <button onClick={() => props.setPage(props.page + 1)} className='nav-btn'>Page {props.page+1}</button>
    </div>
  )
}

export default NavPage
