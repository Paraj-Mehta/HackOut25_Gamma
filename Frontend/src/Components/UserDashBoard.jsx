import React, { useState } from 'react';
import { 
  BarChart3, 
  Droplets, 
  Users, 
  FileText, 
  HelpCircle, 
  Plus,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Zap,
  Calendar,
  Globe
} from 'lucide-react';

const UserDashBoard = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');

  const sidebarItems = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Analytics', icon: TrendingUp },
    { name: 'Token Structure', icon: Zap },
    { name: 'Reports', icon: FileText },
    { name: 'Support', icon: HelpCircle }
  ];

  const creditStats = [
    {
      title: 'Credits Available',
      value: '1,250',
      unit: 'HC',
      change: '+15% from last month',
      positive: true,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Environmental Quality Index',
      value: '85.75',
      unit: '/100%',
      change: '+12% from last month',
      positive: true,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Credits Used This Month',
      value: '847',
      unit: 'HC',
      change: '+8% from last month',
      positive: false,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const processLevels = [
    { label: 'Water Purification', percentage: 78, color: 'bg-green-500' },
    { label: 'Renewable Energy', percentage: 92, color: 'bg-blue-500' },
    { label: 'Waste Processing', percentage: 65, color: 'bg-orange-500' }
  ];

  const energySources = [
    { name: 'Solar Energy', percentage: 34 },
    { name: 'Hydropower', percentage: 28 },
    { name: 'Wind Energy', percentage: 23 },
    { name: 'Geothermal', percentage: 15 }
  ];

  const recentTransactions = [
    { type: 'Credit Purchase', amount: '+500 HC', time: '2 hours ago', status: 'completed' },
    { type: 'Water Treatment', amount: '-25 HC', time: '4 hours ago', status: 'completed' },
    { type: 'Energy Generation', amount: '+75 HC', time: '6 hours ago', status: 'completed' },
    { type: 'Credit Exchange', amount: '-150 HC', time: '1 day ago', status: 'pending' }
  ];

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = '#10b981' }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-64 bg-teal-800 text-white flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg">HydroChain</h1>
              <p className="text-sm text-teal-200">HYDROHAIN</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveSection(item.name)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeSection === item.name
                  ? 'bg-teal-700 text-white'
                  : 'text-teal-200 hover:bg-teal-700 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
              <span className="font-medium">AW</span>
            </div>
            <div>
              <p className="font-medium">Alex Williamson</p>
              <p className="text-sm text-teal-200">ID:HC-5974</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-teal-800 text-white p-4 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Droplets className="w-6 h-6" />
            <h1 className="font-bold">HydroChain</h1>
          </div>
          <button className="p-2">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pt-16 lg:pt-0">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-0">Dashboard</h1>
            <button className="bg-teal-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-teal-700 transition-colors w-fit">
              <Plus className="w-4 h-4" />
              <span>Add Custom Widget</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {creditStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {stat.value}
                      </span>
                      <span className="text-sm text-gray-500">{stat.unit}</span>
                    </div>
                    <p className={`text-sm mt-2 ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <div className={`w-6 h-6 ${stat.color}`}>
                      {index === 0 && <Zap className="w-6 h-6" />}
                      {index === 1 && <TrendingUp className="w-6 h-6" />}
                      {index === 2 && <Clock className="w-6 h-6" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Process Levels */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Process Efficiency Levels</h3>
              <div className="space-y-6">
                {processLevels.map((process, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{process.label}</span>
                      <span className="text-sm font-bold text-gray-900">{process.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${process.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${process.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Renewable Energy */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Renewable Energy Sources</h3>
              <div className="flex justify-center mb-6">
                <CircularProgress percentage={86} color="#10b981" />
              </div>
              <div className="space-y-3">
                {energySources.map((source, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{source.name}</span>
                    <span className="text-sm font-medium">{source.percentage}%</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                View Details
              </button>
            </div>

            {/* Credit Usage Map */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Credits Usage in Manufacturing</h3>
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4 h-48 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Global Distribution</p>
                  <div className="mt-2 px-3 py-1 bg-teal-800 text-white rounded-full text-xs">
                    Ukraine: 23%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Climate Change Index */}
            <div className="bg-gradient-to-r from-teal-800 to-teal-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold">76.2</span>
                  </div>
                  <h3 className="text-lg font-semibold">Climate Impact Index</h3>
                  <p className="text-teal-200 text-sm">Impact of anthropogenic activities on climate</p>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                      }`} />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{transaction.type}</p>
                        <p className="text-xs text-gray-500">{transaction.time}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${
                      transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="mt-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-xl font-bold mb-2">Let's join our community</h3>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="text-green-100">250+ people</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
                  Join Discord
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-400 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;