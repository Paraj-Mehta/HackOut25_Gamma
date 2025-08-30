import React, { useState } from 'react';
import { User, Shield, Plus, Download, Search, Filter, CheckCircle, Clock, XCircle, Factory, Zap, Recycle, Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

// FIX 1: Renamed component to start with a capital letter
export default function LandingPage() {
  const [formData, setFormData] = useState({
    amount: '',
    metadataUri: ''
  });

  const [credits] = useState([
    { id: 'HYD001', amount: 5790, status: 'available', metadataUri: 'https://ipfs.io/ipfs/QmX...abc123', date: '2025-08-15' },
    { id: 'HYD002', amount: 3200, status: 'sold', metadataUri: 'https://ipfs.io/ipfs/QmY...def456', date: '2025-08-20' },
    { id: 'HYD003', amount: 2799, status: 'retired', metadataUri: 'https://ipfs.io/ipfs/QmZ...ghi789', date: '2025-08-25' },
    { id: 'HYD004', amount: 6450, status: 'available', metadataUri: 'https://ipfs.io/ipfs/QmA...jkl012', date: '2025-08-28' },
    { id: 'HYD005', amount: 4100, status: 'sold', metadataUri: 'https://ipfs.io/ipfs/QmB...mno345', date: '2025-08-29' }
  ]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Issuing new credits:', formData);
    setFormData({ amount: '', metadataUri: '' });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'sold': return 'bg-blue-100 text-blue-800';
      case 'retired': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available': return <CheckCircle size={14} />;
      case 'sold': return <Clock size={14} />;
      case 'retired': return <XCircle size={14} />;
      default: return <Clock size={14} />;
    }
  };

  const totalIssued = credits.reduce((sum, credit) => sum + credit.amount, 0);
  const totalSold = credits.filter(c => c.status === 'sold').reduce((sum, credit) => sum + credit.amount, 0);
  const totalRetired = credits.filter(c => c.status === 'retired').reduce((sum, credit) => sum + credit.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)`
             }}>
        </div>
      </div>

      {/* Header Navigation */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
              </div>
              <span className="text-xl font-bold text-gray-800">HydroChain</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Preview</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Catalogs</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Contact</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">More</a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <Settings size={20} />
              </button>
              <Link to="/login">
              {/* <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors font-medium"> */}
                Sign In
              {/* </button> */}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8">
          
          {/* Left Side - Main Content */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-emerald-100 h-full">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                Issue New Green 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 block">
                  Hydrogen Credits
                </span>
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mint verified green hydrogen credits to the blockchain. Each credit represents sustainable hydrogen production.
              </p>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button className="flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors">
                  <Search size={16} />
                  <span>Explore</span>
                </button>
                <button className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition-colors">
                  <Plus size={16} />
                  <span>Start Issuing</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-600">Blockchain</span>
                </div>
                <div className="text-gray-800 font-medium">4611.068.6025</div>
              </div>
            </div>
          </div>

          {/* Center - Visual Element */}
          <div className="lg:col-span-4 xl:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 rounded-3xl shadow-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 via-teal-600 to-green-600 rounded-3xl shadow-xl p-8 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Factory className="text-emerald-600" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Credit Summary */}
          <div className="lg:col-span-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-emerald-100 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">£11.00</h3>
                    <p className="text-xs text-gray-500">Current price</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-emerald-600 text-sm font-medium">$22.00 (0)</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Factory size={16} className="text-gray-600" />
                    </div>
                    <span className="text-sm text-gray-600">Total Issued</span>
                  </div>
                  <span className="font-semibold text-gray-800">{totalIssued.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Zap size={16} className="text-emerald-600" />
                    </div>
                    <span className="text-sm text-gray-600">Credits Sold</span>
                  </div>
                  <span className="font-semibold text-gray-800">{totalSold.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Recycle size={16} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-600">Credits Retired</span>
                  </div>
                  <span className="font-semibold text-gray-800">{totalRetired.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Clock size={16} className="text-teal-600" />
                    </div>
                    <span className="text-sm text-gray-600">Available</span>
                  </div>
                  <span className="font-semibold text-gray-800">{(totalIssued - totalSold - totalRetired).toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-emerald-500 text-white py-3 rounded-2xl font-semibold hover:bg-emerald-600 transition-colors mt-6">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Issue Credits Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-emerald-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <Plus className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Issue New Credits</h2>
                <p className="text-gray-600 text-sm">Mint verified hydrogen credits</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Credit Amount (tCO₂e)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white/50"
                  placeholder="Enter credit amount"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Metadata URI
                </label>
                <input
                  type="url"
                  name="metadataUri"
                  value={formData.metadataUri}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white/50"
                  placeholder="https://ipfs.io/ipfs/..."
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  Link to verifiable production data
                </p>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <Plus size={20} />
                <span>Issue Credits</span>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-emerald-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {credits.slice(0, 4).map((credit) => (
                <div key={credit.id} className="flex items-center justify-between p-4 bg-gray-50/80 rounded-2xl hover:bg-gray-100/80 transition-colors">
                  <div className="flex items-center space-x-3">
                    {/* FIX 2: Corrected className syntax */}
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(credit.status)}`}>
                      {getStatusIcon(credit.status)}
                      <span className="capitalize">{credit.status}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{credit.id}</p>
                      <p className="text-xs text-gray-600">{credit.amount.toLocaleString()} tCO₂e</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{credit.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Factory size={20} className="text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Production Hub</h3>
                <p className="text-xs text-gray-500">Manage hydrogen output</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Monitor and track your hydrogen production facilities and output metrics.</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-800">75,200.18</span>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Search size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Filter size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                <Zap size={20} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Energy Source</h3>
                <p className="text-xs text-gray-500">Renewable verification</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Track renewable energy sources used in your hydrogen production process.</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-800">2,500.58</span>
              <div className="flex space-x-2">
                <button className="p-2 text-emerald-500 hover:text-emerald-600 transition-colors">
                  <CheckCircle size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Clock size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                <Recycle size={20} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Carbon Impact</h3>
                <p className="text-xs text-gray-500">Environmental tracking</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Monitor the environmental impact and carbon offset of your hydrogen credits.</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-800">26,900.7</span>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Search size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Credits History Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-emerald-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-800">Credits History</h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search credits..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white/50"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <Filter size={18} />
                  <span className="hidden sm:inline text-sm">Filter</span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Credit ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Metadata</th>
                </tr>
              </thead>
              <tbody className="bg-white/50 divide-y divide-gray-100">
                {credits.map((credit) => (
                  <tr key={credit.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-semibold text-gray-900">{credit.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900 font-medium">{credit.amount.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">tCO₂e</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* FIX 3: Corrected className syntax */}
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(credit.status)}`}>
                        {getStatusIcon(credit.status)}
                        <span className="capitalize">{credit.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 text-sm">
                      {credit.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a 
                        href={credit.metadataUri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center space-x-1"
                      >
                        <span>View</span>
                        <Download size={14} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-gray-600">
                Showing {credits.length} of {credits.length} credits
              </p>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                  Previous
                </button>
                <button className="px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}