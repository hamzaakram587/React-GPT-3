import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../asset/logo.svg'
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => {
    return (
      <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT</a></p>
        <p><a href="#possibiltiy">Open AI</a></p>
        <p><a href="#feature">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
      </>
    );
  }
  return (
    <div className='gpt__navbar'>

      <div className='gpt__navbar__links'>
        <div className='gpt__navbar__links__logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt__navbar__links__container'>
          <Menu />
        </div>

      </div>
      <div className='gpt__navbar__sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>

      </div>
      <div className='gpt__navbar-menu'>
        <div>
          {toggleMenu ? <RiCloseLine size={27} color="#fff" onClick={() => setToggleMenu(false)} /> :
            <RiMenu3Line size={27} color="#fff" onClick={() => setToggleMenu(true)} />
          }
          {
            toggleMenu &&
            <div className='gpt__navbar-menu__container scale-up-center'>
              <div className='gpt__navbar-menu__container__links'>
                <Menu />
                <div className='gpt__navbar-menu__container__links__sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>

      </div>
              </div>
            </div>

          }
        </div>

      </div>
    </div>
  )
}

export default Navbar