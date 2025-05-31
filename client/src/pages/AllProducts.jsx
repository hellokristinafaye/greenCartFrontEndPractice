import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

const AllProducts = () => {

    const { products, searchQuery, setSearchQuery } = useAppContext();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        
    },[])

  return (
      <div className="mt-16 flex flex-col">
          <div className="flex flex-col items-end w-max">
              <p className="text-2xl font-medium uppercase">All Products</p>
              <div className="w-16 h-0.5 bg-primary rounded-full"></div>
          </div>

          <div className="">
              
        </div>

    </div>
  )
}

export default AllProducts