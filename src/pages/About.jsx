import React from 'react'

function About() {
  return (
    <div>
      <div className="main-container">
        <div className="my-12 w-full">
          <h1 className="text-4xl capitalize font-bold text-center mb-10">let us know <span className="text-orange-500">what you think of us</span></h1>

          <div className="w-10/12 mx-auto">
            <label className="form-control">
              <div className="label">
                <span className="label-text capitalize text-2xl font-semibold ml-3">Comment your opinion</span>
              </div>
              <textarea className="textarea textarea-bordered mb-4 h-40 text-lg resize-none" placeholder="Type Here..."></textarea>
            </label>
            <button className='btn hover:bg-[#a65f13] bg-[#DC780B] text-white font-medium text-base capitalize'>
              set comment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About