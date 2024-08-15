import React from 'react'
import {Input, Button} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Details = () => {
  return (
    <div className="bg-white px-[2rem] py-[2rem] flex flex-col justify-center items-center gap-[2rem] rounded-xl">
      <div className='flex flex-col justify-center items-center gap-[1rem] max-w-[80%] text-center border-b py-[2rem] border-dotted border-[#adadad]'>
        <h1 className='text-2xl font-bold'>Define Your Goals: Let's Capture What You Want to Achieve!</h1>
      </div>


      <form onSubmit={""} className='w-full grid gap-[1rem] grid-cols-2'>
        <Input
          isRequired
          type="username"
          label="Username"
          maxLength={30}
          placeholder='John Doe'
          className="w-full"
        />
        <Input
          isRequired
          type="text"
          label="RollNumber"
          placeholder='22AG1A0503'
          maxLength={10}
          className="w-full uppercase"
        />
        <Input
          isRequired
          type="phone"
          label="Phone Number"
          placeholder='9876543210'
          maxLength={10}
          className="w-full"
        />
        <Dropdown backdrop="blur">
            <DropdownTrigger>
                <Button 
                variant="faded" 
                className="h-[3.5rem]"
                >
                Branch<span><ArrowDropDownIcon/></span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu 
                aria-label="Select your Brach"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="single"
            >
                <DropdownItem key="cse">CSE</DropdownItem>
                <DropdownItem key="iot">IOT</DropdownItem>
                <DropdownItem key="csm">CSM</DropdownItem>
                <DropdownItem key="aids">AIDS</DropdownItem>
                <DropdownItem key="civil">Civil</DropdownItem>
                <DropdownItem key="mech">Mechanical</DropdownItem>
            </DropdownMenu>
        </Dropdown>

        <Dropdown backdrop="blur">
            <DropdownTrigger>
                <Button 
                variant="faded" 
                className="h-[3.5rem]"
                >
                Tech Stack<span><ArrowDropDownIcon/></span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu 
                aria-label="Select your Brach"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="single"
            >
                <DropdownItem key="cse">MEAN Stack</DropdownItem>
                <DropdownItem key="iot">MERN Stack</DropdownItem>
                <DropdownItem key="csm">LAMP Stack</DropdownItem>
                <DropdownItem key="aids">LEMP Stack</DropdownItem>
                <DropdownItem key="civil">JAM Stack</DropdownItem>
                <DropdownItem key="mech">Next Stack</DropdownItem>
            </DropdownMenu>
        </Dropdown>


        <Dropdown backdrop="blur">
            <DropdownTrigger>
                <Button 
                variant="faded" 
                className="h-[3.5rem]"
                >
                Security Questions<span><ArrowDropDownIcon/></span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu 
                aria-label="Security Questions"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="multiple"
            >
                <DropdownItem key="q1">What is your Dog Name?</DropdownItem>
                <DropdownItem key="q2">Your Nick Name?</DropdownItem>
                <DropdownItem key="q3">Your Favourite Food Item?</DropdownItem>
                <DropdownItem key="q4">Your Lucky Number?</DropdownItem>
                <DropdownItem key="q5">Favourite Color?</DropdownItem>
            </DropdownMenu>
        </Dropdown>

        {/* CTA Buttons */}
        <Button
          className='bg-white border-2 border-[#0037FF32] text-[#0037FF] shadow-md w-fit'
        >Submit</Button>
      </form>
    </div>
  )
}

export default Details