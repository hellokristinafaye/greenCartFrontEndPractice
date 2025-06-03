import React from 'react'

// Input Field Component
const inputfield = (() => (
    <input type="text" className="" />
))

const AddAddress = () => {
  return (
      <div className="mt-16 pb-16">
          <p className="text-2xl md:text-3xl text-gray-500">Add Shipping <span className="font-semibold text-primary">Address</span></p>
    </div>
  )
}

export default AddAddress