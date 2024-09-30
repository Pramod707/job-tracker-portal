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
// import {Select, SelectItem} from "@nextui-org/react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { color } from "framer-motion";
const techStack = [
  { key: "js", label: "JavaScript" },
  { key: "html", label: "HTML" },
  { key: "css", label: "CSS" },
  { key: "react", label: "React" },
  { key: "nodejs", label: "Node.js" },
  { key: "express", label: "Express" },
  { key: "mongodb", label: "MongoDB" },
  { key: "mysql", label: "MySQL" },
  { key: "typescript", label: "TypeScript" },
  { key: "python", label: "Python" },
  { key: "docker", label: "Docker" },
  { key: "aws", label: "AWS" },
  { key: "git", label: "Git" },
];

export default function PopUp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [values, setValues] = React.useState(new Set(["cat", "dog"]));
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

  const [postedDate, setPostedDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  // const [isFullScreen, setIsFullScreen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const toggleFullScreen = () => {
  //   setIsFullScreen(!isFullScreen);
  // };

  return (
    <>
      <Button onPress={onOpen} color="default" variant="ghost">
        New <AddOutlinedIcon />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        // placement="top-center"
        backdrop={"blur"}
        scrollBehavior="inside"
        // size={isFullScreen ? "full" : "2xl"}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between">
                <Button
                  className="bg-[#FFFFFF] border font-sans hover:font-mono font-bold"
                  // onPress={toggleFullScreen}
                >
                  <OpenInNewIcon />
                  {/* {isFullScreen ? "Exit Full Screen" : "Open Full Screen"}
                   */}
                  Open Full Screen
                </Button>
              </ModalHeader>
              <ModalBody className="font-mono font-bold">
                {/* <div className="bg-[#FFFFFF] rounded-lg"> */}
                {/* <Spacer y={0.5} /> */}

                <Input
                  label="Company Name"
                  name="companyName"
                  placeholder="Enter company name"
                  onChange={handleChange}
                  value={formData.companyName}
                  // fullWidth
                  // variant="faded"
                  labelPlacement="outside"
                  required
                  variant="faded"
                  // className="font-mono"
                />
                {/* <Spacer y={1} /> */}

                <Input
                  label="Job Title"
                  name="jobTitle"
                  placeholder="Enter job title"
                  onChange={handleChange}
                  value={formData.jobTitle}
                  fullWidth
                  required
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                <Textarea
                  label="Responsibilities"
                  name="responsibility"
                  placeholder="List responsibilities"
                  onChange={handleChange}
                  value={formData.responsibility}
                  fullWidth
                  required
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                <Textarea
                  label="Experience"
                  name="experience"
                  placeholder="List experience"
                  onChange={handleChange}
                  value={formData.experience}
                  fullWidth
                  required
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1}/> */}

                <Textarea
                  label="Benefits"
                  name="benefits"
                  placeholder="List benefits"
                  onChange={handleChange}
                  value={formData.benefits}
                  fullWidth
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                <Textarea
                  label="Extra Details"
                  name="extraDetails"
                  placeholder="Additional details"
                  onChange={handleChange}
                  value={formData.extraDetails}
                  fullWidth
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                <Input
                  label="Salary"
                  type="number"
                  name="salary"
                  placeholder="Enter salary"
                  onChange={handleChange}
                  value={formData.salary}
                  fullWidth
                  required
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                <Input
                  label="Locations"
                  name="locations"
                  placeholder="Enter job locations"
                  onChange={handleChange}
                  value={formData.locations}
                  fullWidth
                  required
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                <Input
                  label="Application Link"
                  name="applicationLink"
                  placeholder="Enter application link"
                  onChange={handleChange}
                  value={formData.applicationLink}
                  fullWidth
                  required
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                {/* Posted Date */}
                <DatePicker
                  label="Posted Date"
                  name="postedDate"
                  // value={postedDate}
                  // onChange={(date) => setPostedDate(date)}
                  fullWidth
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                {/* Due Date */}
                <DatePicker
                  label="Due Date"
                  name="dueDate"
                  // value={dueDate}
                  // onChange={(date) => setDueDate(date)}
                  fullWidth
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                <Select
                  label="Tech Stack"
                  selectionMode="multiple"
                  placeholder="Select the tech"
                  selectedKeys={values}
                  className="max-w-xs"
                  onSelectionChange={setValues}
                  fullWidth
                  required
                  variant="faded"
                  labelPlacement="outside"
                >
                  {techStack.map((tch) => (
                    <SelectItem key={tch.key}>{tch.label}</SelectItem>
                  ))}
                </Select>
                {/* <Spacer y={1} /> */}

                <Input
                  label="Eligibility"
                  name="eligibility"
                  placeholder="Enter eligibility criteria"
                  onChange={handleChange}
                  value={formData.eligibility}
                  fullWidth
                  required
                  variant="faded"
                  labelPlacement="outside"
                />
                {/* <Spacer y={1} /> */}

                <Select
                  label="Job Type"
                  name="type"
                  value={formData.type}
                  onChange={(value) =>
                    setFormData({ ...formData, type: value })
                  }
                  fullWidth
                  variant="faded"
                  labelPlacement="outside"
                >
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="part-time">Part-Time</SelectItem>
                  <SelectItem value="full-time">Full-Time</SelectItem>
                </Select>
                {/* <Spacer y={1} /> */}

                <Select
                  label="Remote/On-Site"
                  name="remote"
                  value={formData.remote}
                  onChange={(value) =>
                    setFormData({ ...formData, remote: value })
                  }
                  fullWidth
                  variant="faded"
                  labelPlacement="outside"
                >
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="on-site">On-Site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </Select>
                {/* <Spacer y={1} /> */}

                <Select
                  label="Added By"
                  name="addedBy"
                  value={formData.addedBy}
                  onChange={(value) =>
                    setFormData({ ...formData, addedBy: value })
                  }
                  fullWidth
                  variant="faded"
                  labelPlacement="outside"
                >
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Placements">Placements</SelectItem>
                  <SelectItem value="You">You</SelectItem>
                </Select>
                {/* </div> */}
              </ModalBody>
              <ModalFooter>
                <Button
                  className="font-bold"
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  className="font-bold"
                  color="success"
                  variant="flat"
                  onPress={onClose}
                >
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
