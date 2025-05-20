import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
      <div className="relative">
          <img src={assets.main_banner_bg} alt="banner" className="w-full hidden md:block" />
          <img src={assets.main_banner_bg_sm} alt="banner" className="w-full md:hidden" />
          <div className="">
              <h1 className="">Freshness You Can Trust, Savings You Will Love! </h1>
          </div>
          <div className="">
              <Link className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer">
                  Shop now
                  <img src={assets.white_arrow_icon} alt="arrow icon" className="md:hidden transition group-focus:translate-x-1" />
              </Link>
          </div>
    </div>
  )
}

export default MainBanner