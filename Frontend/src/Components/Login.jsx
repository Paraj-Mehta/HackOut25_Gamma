import React, { useState } from 'react';
import axios from 'axios'; 
import { User, Shield, Eye, EyeOff, Mail, Lock, UserPlus, LogIn, Home, Factory, ShoppingCart, Briefcase, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userType, setUserType] = useState('PRODUCER');
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    organizationName: '',
    walletAddress: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setError('');
    setSuccess('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isLogin) {
      
      const role = isAdmin ? 'ADMIN' : userType;

      const registrationData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          organizationName: formData.organizationName,
          role: role
      };

      console.log(registrationData);

      try {
        // --- MODIFICATION: Replaced fetch with axios ---
        const response = await axios.post('http://localhost:8080/user', registrationData);

        setSuccess(response.data.message || 'Registration successful! Please log in.');
        setIsLogin(true); // Switch to login view after successful registration

      } catch (err) {
        // --- MODIFICATION: Improved error handling with axios ---
        setError(err.response?.data?.message || 'An error occurred during registration.');
      }
    } 
    else {
      const response = await axios.post('http://localhost:8080/users', { email: formData.email, password: formData.password })
      console.log('Logging in...', response.data.message );
      // Logic for login API call using axios would go here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 relative overflow-hidden flex flex-col">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-green-200 to-emerald-300 rounded-full opacity-25 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-bl from-emerald-300 to-green-200 rounded-full opacity-40"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 bg-gradient-to-tr from-teal-300 to-emerald-300 rounded-full opacity-35"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-bl from-green-300 to-teal-200 rounded-full opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded opacity-90"></div>
          </div>
          <span className="text-xl font-bold text-gray-800">HydroChain</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
            <Home size={18} />
            <span className="hidden sm:inline text-sm">Home</span>
          </button>
          </Link>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="bg-emerald-600 text-white px-3 py-2 rounded-full hover:bg-emerald-700 transition-all duration-200 flex items-center space-x-2"
          >
            {isLogin ? <UserPlus size={16} /> : <LogIn size={16} />}
            <span className="hidden sm:inline text-sm">{isLogin ? 'Register' : 'Login'}</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-1 flex-col lg:flex-row items-center justify-center p-4">
        
        {/* Left Side - Content */}
        <div className="lg:w-1/2 max-w-lg mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            A Blockchain-Based Platform for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Green Hydrogen Credits
            </span>
          </h1>
          <p className="text-gray-600 mb-6">
            Trade, verify, and track green hydrogen credits on our secure blockchain platform. 
            Join the future of sustainable energy trading.
          </p>
        </div>

        {/* Right Side - Auth Card */}
        <div className="lg:w-1/2 max-w-md w-full">
          <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {isLogin ? 'Welcome Back' : 'Join HydroChain'}
              </h2>
              <p className="text-gray-600 text-sm">
                {isLogin ? 'Sign in to your account' : 'Create your account'}
              </p>
            </div>

            {/* User/Admin Toggles */}
            {!isLogin && (
                <div className="flex mb-4 bg-gray-100 rounded-full p-1">
                  <button type="button" onClick={() => setIsAdmin(false)} className={`flex-1 py-1.5 rounded-full text-sm font-medium flex items-center justify-center space-x-2 transition-all ${!isAdmin ? 'bg-white text-emerald-600 shadow-md' : 'text-gray-600'}`}> <User size={16} /> <span>User</span> </button>
                  <button type="button" onClick={() => setIsAdmin(true)} className={`flex-1 py-1.5 rounded-full text-sm font-medium flex items-center justify-center space-x-2 transition-all ${isAdmin ? 'bg-white text-emerald-600 shadow-md' : 'text-gray-600'}`}> <Shield size={16} /> <span>Admin</span> </button>
                </div>
            )}
            
            <div className="space-y-3">
              {!isLogin && !isAdmin && (
                <div className="grid grid-cols-2 gap-2">
                  <label className={`flex items-center space-x-2 p-2 border rounded-lg cursor-pointer transition-all ${userType === 'PRODUCER' ? 'bg-emerald-50 border-emerald-300' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <input type="radio" name="userType" value="PRODUCER" checked={userType === 'PRODUCER'} onChange={(e) => setUserType(e.target.value)} className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"/>
                    <Factory size={16} className="text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">Producer</span>
                  </label>
                  <label className={`flex items-center space-x-2 p-2 border rounded-lg cursor-pointer transition-all ${userType === 'BUYER' ? 'bg-emerald-50 border-emerald-300' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <input type="radio" name="userType" value="BUYER" checked={userType === 'BUYER'} onChange={(e) => setUserType(e.target.value)} className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"/>
                    <ShoppingCart size={16} className="text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">Buyer</span>
                  </label>
                </div>
              )}

              {!isLogin && (
                <>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Username" required />
                  </div>
                   <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type="text" name="organizationName" value={formData.organizationName} onChange={handleInputChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Organization Name" required />
                  </div>
                </>
              )}
              
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Email Address" required/>
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleInputChange} className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Password" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"> {showPassword ? <EyeOff size={16} /> : <Eye size={16} />} </button>
              </div>
            </div>

            {error && <p className="mt-3 text-sm text-red-600 text-center">{error}</p>}
            {success && <p className="mt-3 text-sm text-green-600 text-center">{success}</p>}
            <Link to="/user">
            <button type="submit" onSubmit={handleSubmit} className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2.5 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
            </Link>

            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-emerald-600 hover:text-emerald-700 font-medium"> {isLogin ? 'Sign up' : 'Sign in'} </button>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}