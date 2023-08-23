import React from 'react'
import {logo} from '../assests'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo"  className="w-28 object-contain"/>
        <button type="button"
          onClick={() => window.open('http://github.com/DKsavasan')}
          className='black_btn'
        >GitHub Link</button>
      </nav>

      <h1 className="head_text">
        Sumarize Articles with <br 
        className="max-md:hidden" />
        <span className="orange_gradient">
          OPENAI GPT-4
        </span>
      </h1>

      <h2 className="desc">
        Summarize any PDF with the power of AI
      </h2>

    </header>

  )
}

export default Hero