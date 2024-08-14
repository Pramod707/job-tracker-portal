import React from 'react'
import {Input} from "@nextui-org/react";

const Signup = () => {
  return (
    <div className="bg-white px-[2rem] py-[2rem]">
      <Input
        isRequired
        type="email"
        label="Email"
        defaultValue="junior@nextui.org"
        className="max-w-xs"
      />
    </div>
  )
}

export default Signup