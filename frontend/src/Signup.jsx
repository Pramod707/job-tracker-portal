import {Input ,Button } from "@nextui-org/react";
import {Link } from "react-router-dom";
const Signup = () => 
    {
      return (
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-white text-black p-4 flex flex-col gap-4 justify-center w-1/3 rounded-lg">
        <div><h2 className="text-2xl font-bold mb-4 text-justify"> Signup Page </h2></div>
        <div>
        <Input
          isClearable
          type="firstname"
          label="Firstname"
          variant="bordered"
          placeholder="Enter your First Name"
          
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        </div>
        <div>
        <Input
          isClearable
          type="lastname"
          label="Lastname"
          variant="bordered"
          placeholder="Enter your Last Name"
          
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        </div>
        <div>
        <Input
          isClearable
          type="roll no"
          label="Roll id"
          variant="bordered"
          placeholder="Enter your Student id"
          
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        </div>
        <div>
        <Input
          isClearable
          type="fieldofinterest"
          label="fieldofinterest"
          variant="bordered"
          placeholder="Enter your Interest"
          
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        </div>
        <div>
        <Input
          isClearable
          type="username"
          label="username"
          variant="bordered"
          placeholder="Enter your Username"
          
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        </div>
        <div>
        <Input
          isClearable
          type="password"
          label="password"
          variant="bordered"
          placeholder="Enter your Password"
          
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        </div>
    
        <div>
          <Link to="/home">
          <Button className="w-48 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex">
            Signup
          </Button>
          </Link>
        </div>
        
        
        </div>
      </div>
      );
    }
    export default Signup;

