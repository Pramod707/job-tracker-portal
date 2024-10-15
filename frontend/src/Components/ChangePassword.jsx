import React from "react";
import { useState } from "react";
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
} from "@nextui-org/react";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";
const handlePasswordChange = () => {
  // toast.success("Password Changed Successfully");
};
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="">
      <Button onPress={onOpen} color="default" variant="ghost">
        ChangePassword
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop={"blur"}
        scrollBehavior="inside"
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between">
                
              </ModalHeader>
              <ModalBody className="font-mono font-bold">
                <Input
                  type="password"
                  label="Old Password"
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  labelPlacement="outside"
                />
                <Input
                  type="password"
                  label="New Password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  labelPlacement="outside"
                />
                <Input
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  labelPlacement="outside"
                />
                
              </ModalBody>
              <ModalFooter>
                <Button
                  className="font-bold"
                  color="success"
                  variant="flat"
                  onPress={handlePasswordChange}
                >
                  Change Password
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ChangePassword;
