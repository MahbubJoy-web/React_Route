import React from 'react'

const Navber = () => {
  return (
    <nav className='flex justify-center gap-[1000px] py-5 bg-[#133E87]'>
        <div className="container w-auto[">
            <div className="navber flex justify-between items-center">
        <div className="logo"><img className='w-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6paT-X70Sq8AaVVsJX3cgSsGSwqZaewXyw&s" alt="" /></div>
             <ul className='flex gap-[32px]'>
                  <li><a className='font-[Roboto] text-[34px] text-[#F3F3E0]' href="/">Home</a></li>
                  <li><a className='font-[Roboto] text-[34px] text-[#F3F3E0]' href="/about">About</a></li>
                  <li><a className='font-[Roboto] text-[34px] text-[#F3F3E0]' href="/contract">Contract</a></li>
                  <li><a className='font-[Roboto] text-[34px] text-[#F3F3E0]' href="travelling">Travel</a></li>
             </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navber