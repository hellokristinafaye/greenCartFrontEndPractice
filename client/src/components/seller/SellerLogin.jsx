import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const SellerLogin = () => {
    const { isSeller, setIsSeller, navigate } = useAppContext();
    const [email, setEmail] = useState("");
    

  return (
      <div>
          
    </div>
  )
}

export default SellerLogin