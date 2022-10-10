import React from 'react'

export default function Contact() {
  return (
    <>
     <div className="container-fluid bg-primary p-5 text-white text-center">
        <div className="container py-5">
     <h1>Contact Us</h1>
</div>
     </div>
     <div className="container  p-5">
     <form action="">
      <div className="row">
        <div className="col-md-6">
      <input type="text" className='form-control' placeholder='Your Name' /> <br />
      </div>
        <div className="col-md-6">
      <input type="email" className='form-control' placeholder='Your Email' /> <br />
      </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
      <input type="number" className='form-control' placeholder='Mobile Number' /> <br />
      </div>
        <div className="col-md-6">
      <input type="text" className='form-control' placeholder='Subject' /> <br />
      </div>
      <textarea name="" id="" cols="30" rows="10" className='form-control mt-4'></textarea>
        <button type="submit" className='btn btn-primary mt-4'>Submit</button>
      </div>
     </form>
     </div>
    </>
  )
}
