import React from 'react'
import group81 from '../../asset/Group 81.png'
import Illustration from '../../asset/Illustration.png'
import './header.css'
const Header = () => {
  return (
    <div className='gpt3-header section__padding ' id='home'>
      <div className='gpt3-header__content'>
        <h1 className='gradient__text'> Let's Build Something Amazing With GPT3 Open AI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3-header__content__input'>
          <input type='email' placeholder='Enter Email' />
          <button>Get Started</button>

        </div>
        <div className='gpt3-header__content__people'>
          <img src={group81} alt='People' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
      <img src={Illustration} />
    </div>


    </div>
  )
}

export default Header