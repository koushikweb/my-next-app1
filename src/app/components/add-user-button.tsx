'use client'

import React from "react";
import { useState } from "react";

export default function AddUserButton () {
  const [userAdd, setUserAdd] = useState(0);

  const handleClick = () =>  {
    setUserAdd (userAdd + 1);
  }
  return <button onClick={handleClick}> User Add Count ({userAdd})</button>
} 

