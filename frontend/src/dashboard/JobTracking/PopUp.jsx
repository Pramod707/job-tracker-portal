import React from "react";
// import {Button, ButtonGroup} from "@nextui-org/button";
import { Chip } from "@nextui-org/react";
import { DatePicker,Input,Select, SelectItem, Progress, Textarea } from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function PopUp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-[#0037FF] text-white font-black">
        {" "}
        New{" "}
        <span>
          <AddOutlinedIcon />
        </span>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent className="bg-[#B9C7C6]">
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col gap-1">
                <div>
                  <Button className="bg-[#FFFFFF] border">
                    <OpenInNewIcon />
                    Open Full Screen
                  </Button>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="bg-[#FFFFFF] rounded-lg">
                  <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <p className="text-lg text-bold">Job Title</p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <div className="Fields ">
                        <div className="flex space-x-8 p-2">
                          
                          <Input type="text" labelPlacement="outside-left" label="Company Name"className="font-bold "/>
                        </div>
                        <div className="flex space-x-8 p-2 font-bold ">
                          <div>Added By </div>
                          <Chip onClose={() => console.log("close")}>Admin</Chip>
                        </div>
                        <div className="flex space-x-8 p-2 font-bold ">
                          <div>Due Date</div>
                          {/* <div>15-06-2023</div> */}
                          <DatePicker className="max-w-[284px]" />
                        </div>
                        <div className="flex space-x-8 p-2 font-bold ">
                          <div>Apply Now</div>
                          <Select
                            label="Status"
                            placeholder=""
                            selectionMode="single"
                            className="max-w-xs"
                          >
                            {["Apply Now", "In Progress", "Rejected"].map(
                              (status, index) => (
                                <SelectItem key={index}>
                                  {/* <Chip>{status}</Chip> */}
                                  {status}
                                </SelectItem>
                              )
                            )}
                          </Select>
                        </div>
                        <div className="flex space-x-8 p-2 font-bold ">
                          {/* Progress */}
                          {/* <Button>60%</Button> */}
                          <Progress
                          labelPlacement="outside-left" label="Progress"
                            color="success"
                            aria-label="Loading..."
                            value={60}
                            className="max-w-md font-bold "
                          />
                        </div>
                        <div className="flex space-x-8 p-2 font-bold ">
                          <div>Description </div>
                          <Textarea
                            label="Description"
                            placeholder="Enter your description"
                            className="max-w-xs"
                          />
                        </div>
                      </div>
                    </CardBody>
                    <Divider />
                    <CardFooter></CardFooter>
                  </Card>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" variant="light" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
