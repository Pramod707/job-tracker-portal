import {Input ,Button } from "@nextui-org/react";
import {Link } from "react-router-dom";

const App = () => 
{
  return (
  <div className="container bg-grey flex flex-col items-center justify-center h-96 5 h-screen">
    <div className="bg-grey text-black p-4 flex flex-col gap-4 justify-center w-1/3 rounded-lg">
    <h1 className="text-3xl font-bold mb-2 text-justify"> Signup</h1>
    <div>
    <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
    </div>
    <div>
    <Input
      isClearable
      type="password"
      label="Password"
      variant="bordered"
      placeholder="Enter your Password"
      
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
    </div>

    <div>
      <Link to="/login">
      <Button className="w-36 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex">
        Signup with OTP 
      </Button>
      </Link>
    </div>
    <div className="text-black underline flex gap-4">
          <p className="text-lg font-sans mb-4 "> Already have an Account : </p>
          <Link to="/page">
          <Button className="w-20 bg-slate-700 text-white py-1 h-8 rounded-lg hover:bg-blue-600 flex">Login</Button>
          </Link>
        </div> 
    
    </div>
  </div>
  );
}
export default App;

