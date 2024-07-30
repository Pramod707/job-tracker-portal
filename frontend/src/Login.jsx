import {Input ,Button } from "@nextui-org/react";
import {Link } from "react-router-dom";
const LoginPage = () => 
    {
      return (
      <div className="flex justify-center items-center h-96 w-full">
        <div className="bg-white text-black p-4 flex flex-col gap-4 justify-center w-1/3 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-justify"> Login Page </h2>
        <div>
        <Input
          isClearable
          type="username"
          label="username"
          variant="bordered"
          placeholder="Enter your username"
          
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
          placeholder="Enter your password"
          
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        </div>
        
        <div>
          <Link to="/Home">
          <Button className="w-48 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex">
            Login
          </Button>
          </Link>
        </div>
        
        </div>
      </div>
      );
    }
    export default LoginPage;


