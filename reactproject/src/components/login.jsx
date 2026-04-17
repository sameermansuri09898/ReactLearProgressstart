import { Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="flex items-center border rounded-lg px-3 mt-1 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="flex items-center border rounded-lg px-3 mt-1 focus-within:ring-2 focus-within:ring-blue-500">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <span className="text-blue-600 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-400 my-4">or</div>

        {/* Google login */}
        <button className="w-full border py-2 rounded-lg hover:bg-gray-50 transition">
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}