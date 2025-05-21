import React,{useState,} from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const SignUp = () => {
    const navigate=useNavigate();
        
    const [form, setForm] = useState({
        name:'',
        phone:'',
        email:'',
        birthday:'',
        password:'',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            swal("회원가입 완료!");
            navigate("/");
        }
    };

    const isValid = Object.values(form).every((value) => value.trim() !== "");
    
    return(
        <div className="min-h-screen bg-blue-100  flex items-center justify-center px-4">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md w-full max-w-md flex flex-col gap-4 ph:max-w-sm dt:max-w-xl ">
            <h1 className= "text-center font-inter font-bold">Sign Up</h1>
            <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            />
            <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            />
            <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            />
            <input
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={handleChange}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            />       
            <button
            disabled={!isValid}
            className={`py-2 px-4 rounded-[6px] font-medium transition text-white
                ${isValid 
                ? 'bg-[#4F46E5] hover:bg-blue-600 cursor-pointer' 
                : 'bg-gray-400'}`}
            >Sign Up</button>
        </form>
        </div>
    )
}

export default SignUp;