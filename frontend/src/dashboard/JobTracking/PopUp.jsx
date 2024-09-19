import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
  DatePicker,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Spacer,
} from "@nextui-org/react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function PopUp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    responsibility: "",
    experience: "",
    benefits: "",
    extraDetails: "",
    salary: "",
    locations: "",
    applicationLink: "",
    techStack: "",
    eligibility: "",
    type: "full-time",
    remote: "on-site",
    addedBy: "Admin",
  });

  // State to manage postedDate and dueDate separately
  const [postedDate, setPostedDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Button onPress={onOpen} color="default" variant="ghost">
        New <AddOutlinedIcon />
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        scrollBehavior="inside"
        size="md"
      >
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Button className="bg-[#FFFFFF] border">
                  <OpenInNewIcon />
                  Open Full Screen
                </Button>
              </ModalHeader>
              <ModalBody style={{ maxHeight: "400px", overflowY: "auto" }}>
                <div className="bg-[#FFFFFF] rounded-lg">
                  <Spacer y={0.5} />

                  <Input
                    label="Company Name"
                    name="companyName"
                    placeholder="Enter company name"
                    onChange={handleChange}
                    value={formData.companyName}
                    fullWidth
                    required
                  />
                  <Spacer y={1} />

                  <Input
                    label="Job Title"
                    name="jobTitle"
                    placeholder="Enter job title"
                    onChange={handleChange}
                    value={formData.jobTitle}
                    fullWidth
                    required
                  />
                  <Spacer y={1} />

                  <Textarea
                    label="Responsibilities"
                    name="responsibility"
                    placeholder="List responsibilities"
                    onChange={handleChange}
                    value={formData.responsibility}
                    fullWidth
                    required
                  />
                  <Spacer y={1} />

                  <Textarea
                    label="Experience"
                    name="experience"
                    placeholder="List experience"
                    onChange={handleChange}
                    value={formData.experience}
                    fullWidth
                    required
                  />
                  <Spacer y={1}/>

                  <Textarea
                    label="Benefits"
                    name="benefits"
                    placeholder="List benefits"
                    onChange={handleChange}
                    value={formData.benefits}
                    fullWidth
                  />
                  <Spacer y={1} />

                  <Textarea
                    label="Extra Details"
                    name="extraDetails"
                    placeholder="Additional details"
                    onChange={handleChange}
                    value={formData.extraDetails}
                    fullWidth
                  />
                  <Spacer y={1} />

                  <Input
                    label="Salary"
                    type="number"
                    name="salary"
                    placeholder="Enter salary"
                    onChange={handleChange}
                    value={formData.salary}
                    fullWidth
                    required
                  />
                  <Spacer y={1} />

                  <Input
                    label="Locations"
                    name="locations"
                    placeholder="Enter job locations"
                    onChange={handleChange}
                    value={formData.locations}
                    fullWidth
                    required
                  />
                  <Spacer y={1} />

                  <Input
                    label="Application Link"
                    name="applicationLink"
                    placeholder="Enter application link"
                    onChange={handleChange}
                    value={formData.applicationLink}
                    fullWidth
                    required
                  />
                  <Spacer y={1} />

                  {/* Posted Date */}
                  <DatePicker
                    label="Posted Date"
                    name="postedDate"
                    // value={postedDate}
                    // onChange={(date) => setPostedDate(date)}
                    fullWidth
                  />
                  <Spacer y={1} />

                  {/* Due Date */}
                  <DatePicker
                    label="Due Date"
                    name="dueDate"
                    // value={dueDate}
                    // onChange={(date) => setDueDate(date)}
                    fullWidth
                  />
                  <Spacer y={1} />

                  <Input
                    label="Tech Stack"
                    name="techStack"
                    placeholder="Enter tech stack"
                    onChange={handleChange}
                    value={formData.techStack}
                    fullWidth
                  />
                  <Spacer y={1} />

                  <Input
                    label="Eligibility"
                    name="eligibility"
                    placeholder="Enter eligibility criteria"
                    onChange={handleChange}
                    value={formData.eligibility}
                    fullWidth
                    required
                  />
                  <Spacer y={1} />

                  <Select
                    label="Job Type"
                    name="type"
                    value={formData.type}
                    onChange={(value) => setFormData({ ...formData, type: value })}
                    fullWidth
                  >
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="part-time">Part-Time</SelectItem>
                    <SelectItem value="full-time">Full-Time</SelectItem>
                  </Select>
                  <Spacer y={1} />

                  <Select
                    label="Remote/On-Site"
                    name="remote"
                    value={formData.remote}
                    onChange={(value) => setFormData({ ...formData, remote: value })}
                    fullWidth
                  >
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="on-site">On-Site</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </Select>
                  <Spacer y={1} />

                  <Select
                    label="Added By"
                    name="addedBy"
                    value={formData.addedBy}
                    onChange={(value) => setFormData({ ...formData, addedBy: value })}
                    fullWidth
                  >
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Placements">Placements</SelectItem>
                    <SelectItem value="You">You</SelectItem>
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" variant="flat" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
