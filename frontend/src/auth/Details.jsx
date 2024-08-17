import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    rollNumber: '',
    phone: '',
    branch: '',
    techStack: '',
    securityQuestions: [],
    interests: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDropdownChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="bg-white px-[2rem] py-[2rem] flex flex-col justify-center items-center gap-[2rem] rounded-xl">
      <div className='flex flex-col justify-center items-center gap-[1rem] max-w-[80%] text-center border-b py-[2rem] border-dotted border-[#adadad]'>
        <h1 className='text-2xl font-bold'>Define Your Goals: Let's Capture What You Want to Achieve!</h1>
      </div>

      <form onSubmit={handleSubmit} className='w-full grid gap-[1rem] grid-cols-2'>
        <Input
          isRequired
          type="text"
          label="Username"
          placeholder='John Doe'
          className="w-full"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <Input
          isRequired
          type="text"
          label="Roll Number"
          placeholder='22AG1A0503'
          className="w-full"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleInputChange}
        />
        <Input
          isRequired
          type="tel"
          label="Phone Number"
          placeholder='9876543210'
          className="w-full"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />

        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button variant="faded" className="h-[3.5rem] w-full">
              Branch<span><ArrowDropDownIcon/></span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Select your Branch"
            closeOnSelect={false}
            disallowEmptySelection
            selectionMode="single"
            onAction={(key) => handleDropdownChange('branch', key)}
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
            <Button variant="faded" className="h-[3.5rem] w-full">
              Tech Stack<span><ArrowDropDownIcon/></span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Select your Tech Stack"
            closeOnSelect={false}
            disallowEmptySelection
            selectionMode="single"
            onAction={(key) => handleDropdownChange('techStack', key)}
          >
            <DropdownItem key="mean">MEAN Stack</DropdownItem>
            <DropdownItem key="mern">MERN Stack</DropdownItem>
            <DropdownItem key="lamp">LAMP Stack</DropdownItem>
            <DropdownItem key="lemp">LEMP Stack</DropdownItem>
            <DropdownItem key="jam">JAM Stack</DropdownItem>
            <DropdownItem key="next">Next Stack</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button variant="faded" className="h-[3.5rem] w-full">
              Security Questions<span><ArrowDropDownIcon/></span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Security Questions"
            closeOnSelect={false}
            disallowEmptySelection
            selectionMode="multiple"
            onSelectionChange={(keys) => handleDropdownChange('securityQuestions', Array.from(keys))}
          >
            <DropdownItem key="q1">
              What is your Dog's Name?
              <Input
                isRequired={false}
                type="text"
                label="Answer"
                placeholder='Scissors'
                maxLength={10}
                className="w-full mt-2"
              />
            </DropdownItem>
            <DropdownItem key="q2">Your Nickname?</DropdownItem>
            <DropdownItem key="q3">Your Favorite Food Item?</DropdownItem>
            <DropdownItem key="q4">Your Lucky Number?</DropdownItem>
            <DropdownItem key="q5">Favorite Color?</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button variant="faded" className="h-[3.5rem] w-full">
              Interests<span><ArrowDropDownIcon/></span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Select your Interests"
            closeOnSelect={false}
            disallowEmptySelection
            selectionMode="multiple"
            onSelectionChange={(keys) => handleDropdownChange('interests', Array.from(keys))}
          >
            <DropdownItem key="internships">Internships</DropdownItem>
            <DropdownItem key="jobs">Jobs</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Submit Button */}
        <div className="col-span-2">
          <Button
            type="submit"
            className='text-white border-2 border-[#0037FF32] bg-[#0037FF] shadow-md w-full'
          >
            Finish Setup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
