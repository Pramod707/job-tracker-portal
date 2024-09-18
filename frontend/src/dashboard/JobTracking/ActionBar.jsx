import React from 'react'
import { Button } from '@nextui-org/react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PopUp from './PopUp';

const ActionBar = ({ setView }) => {
    return (
        <div className='border-b-3 border-dotted pb-[1rem] flex flex-row justify-between items-center'>
            {/* Views */}
            <div className='flex flex-row justify-center items-center gap-[1rem]'>
                <Button
                    className="bg-[#DCE3E3] font-black"
                    onClick={() => setView("Table")}
                >Table
                </Button>

                <Button
                    className="bg-[#F4F6F6] font-black"
                    onClick={() => setView("Kanban")}
                >Kanban
                </Button>

                <Button
                    className="bg-[#F4F6F6] font-black"
                // onClick={()=>setView("Kanban")}
                >Calendar
                </Button>
            </div>



            {/* Utilities */}
            <div className='flex flex-row justify-center items-center gap-[1rem]'>
                <Dropdown backdrop="blur">
                    <DropdownTrigger>
                        <Button variant="faded" className=" border border-[#EDF1F1] bg-transparent">
                            Column<span><ViewStreamOutlinedIcon className='text-[#4F7471]' /></span>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Select Columns"
                        closeOnSelect={false}
                        disallowEmptySelection
                        selectionMode="multiple"
                    >
                        <DropdownItem key="opportunity">Opportunity Name</DropdownItem>
                        <DropdownItem key="company">Company</DropdownItem>
                        <DropdownItem key="added">Added By</DropdownItem>
                        <DropdownItem key="due">Due date</DropdownItem>
                        <DropdownItem key="status">Status</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown backdrop="blur">
                    <DropdownTrigger>
                        <Button variant="faded" className=" border border-[#EDF1F1] bg-transparent">
                            Filter<span><ExpandMoreOutlinedIcon className='text-[#4F7471]' /></span>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Change View"
                        closeOnSelect={false}
                        disallowEmptySelection
                        selectionMode="multiple"
                    >
                        <DropdownItem key="opportunity">Opportunity</DropdownItem>
                        <DropdownItem key="company">Company</DropdownItem>
                        <DropdownItem key="added">Added By</DropdownItem>
                        <DropdownItem key="due">Due date</DropdownItem>
                        <DropdownItem key="status">Status</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown backdrop="blur">
                    <DropdownTrigger>
                        <Button variant="faded" className=" border border-[#EDF1F1] bg-transparent">
                            Nearest Due Date<span><CalendarMonthOutlinedIcon className='text-[#4F7471]' /></span>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Change View"
                        closeOnSelect={false}
                        disallowEmptySelection
                        selectionMode="multiple"
                    >
                        <DropdownItem key="opportunity">Opportunity</DropdownItem>
                        <DropdownItem key="company">Company</DropdownItem>
                        <DropdownItem key="added">Added By</DropdownItem>
                        <DropdownItem key="due">Due date</DropdownItem>
                        <DropdownItem key="status">Status</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                {/* <Button className="bg-[#0037FF] text-white font-black">
                New <span><AddOutlinedIcon /></span> */}
                <PopUp />
                {/* </Button> */}

                <Dropdown backdrop="blur">
                    <DropdownTrigger className="flex border  rounded-md cursor-pointer">
                        <MoreVertOutlinedIcon className='text-[#4F7471]' />
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Change View"
                        closeOnSelect={false}
                        disallowEmptySelection
                        selectionMode="single"
                    >
                        <DropdownItem key="opportunity">Clear All</DropdownItem>
                        <DropdownItem key="company">Bulk Edit</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    )
}

export default ActionBar