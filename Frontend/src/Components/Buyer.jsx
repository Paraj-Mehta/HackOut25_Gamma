import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Wallet, 
  LogOut, 
  ExternalLink, 
  Calendar,
  Hash,
  Package,
  CheckCircle,
  X,
  Eye,
  Filter,
  Search,
  Factory,
  Zap,
  Clock,
  TrendingUp
} from 'lucide-react';

export default function Buyer() {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [selectedCredit, setSelectedCredit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock wallet/portfolio data
  const portfolioData = {
    currentPrice: 11.00,
    priceChange: 22.00,
    priceChangePercent: 0,
    totalPurchased: 22339,
    creditsHeld: 12240,
    creditsRetired: 2799,
    creditsUsed: 7300
  };

  // Mock data for available credits
  const availableCredits = [
    {
      id: 'HC001',
      producerAddress: '0x1a2b3c4d5e6f7g8h9i0j',
      amount: 500,
      pricePerCredit: 45,
      metadataUri: 'https://ipfs.io/ipfs/QmXYZ123...',
      productionDate: '2024-08-15',
      location: 'California, USA',
      verificationStatus: 'Verified'
    },
    {
      id: 'HC002',
      producerAddress: '0x2b3c4d5e6f7g8h9i0j1k',
      amount: 1000,
      pricePerCredit: 42,
      metadataUri: 'https://ipfs.io/ipfs/QmABC456...',
      productionDate: '2024-08-20',
      location: 'Texas, USA',
      verificationStatus: 'Verified'
    },
    {
      id: 'HC003',
      producerAddress: '0x3c4d5e6f7g8h9i0j1k2l',
      amount: 750,
      pricePerCredit: 48,
      metadataUri: 'https://ipfs.io/ipfs/QmDEF789...',
      productionDate: '2024-08-25',
      location: 'New York, USA',
      verificationStatus: 'Pending'
    }
  ];

  // Mock data for retired credits
  const retiredCredits = [
    {
      creditId: 'HC001-R001',
      amount: 100,
      retirementDate: '2024-08-28',
      metadataUri: 'https://ipfs.io/ipfs/QmXYZ123...',
      originalProducer: '0x1a2b3c4d5e6f7g8h9i0j',
      purpose: 'Carbon Offset - Q3 2024'
    },
    {
      creditId: 'HC002-R002',
      amount: 250,
      retirementDate: '2024-08-22',
      metadataUri: 'https://ipfs.io/ipfs/QmABC456...',
      originalProducer: '0x2b3c4d5e6f7g8h9i0j1k',
      purpose: 'Regulatory Compliance'
    }
  ];

  const handleBuyCredit = (credit) => {
    setSelectedCredit(credit);
    setShowPurchaseModal(true);
  };

  const handleConfirmPurchase = () => {
    console.log('Purchasing credit:', selectedCredit);
    setShowPurchaseModal(false);
    setSelectedCredit(null);
  };

  const filteredCredits = availableCredits.filter(credit =>
    credit.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    credit.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    credit.producerAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-green-200 to-emerald-300 rounded-full opacity-25 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-bl from-emerald-300 to-green-200 rounded-full opacity-40"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-sm border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded opacity-90"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">HydroChain</h1>
                <p className="text-sm text-emerald-600 font-medium">Buyer Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                <Wallet size={18} className="text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">0x1234...5678</span>
              </div>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors bg-white px-4 py-2 rounded-full shadow-md">
                <LogOut size={18} />
                <span className="text-sm font-medium">Disconnect</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 space-y-8">
        
        {/* Top 3-Card Layout - Narrower */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column - Buy Credits */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Buy New Green
                  </h1>
                  <h1 className="text-2xl font-bold text-emerald-500 mb-4">
                    Hydrogen Credits
                  </h1>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Purchase verified green hydrogen credits from the marketplace. 
                    Each credit represents sustainable hydrogen production.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors">
                    <Search size={16} />
                    Explore
                  </button>
                  <button 
                    onClick={() => setShowPurchaseModal(true)}
                    className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors"
                  >
                    <ShoppingCart size={16} />
                    Start Buying
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="font-medium">Blockchain</span>
                    <span className="font-mono text-xs">4611.068.6025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Marketplace Card */}
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl p-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Factory size={24} className="text-white" />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white/80 text-xs mb-1">Featured Credits</div>
                <div className="text-white text-sm font-semibold">Premium Green H₂ Credits</div>
              </div>
            </div>

            {/* Right Column - Portfolio Stats */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
              <div className="space-y-4">
                {/* Current Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-sm">C</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        £{portfolioData.currentPrice.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500">Current price</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-500 font-semibold text-sm">
                      ${portfolioData.priceChange.toFixed(2)} ({portfolioData.priceChangePercent})
                    </div>
                  </div>
                </div>

                {/* Portfolio Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Package size={16} className="text-gray-400" />
                      <span className="text-gray-600 text-sm">Total Purchased</span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {portfolioData.totalPurchased.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-emerald-500" />
                      <span className="text-gray-600 text-sm">Credits Held</span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {portfolioData.creditsHeld.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-blue-500" />
                      <span className="text-gray-600 text-sm">Credits Retired</span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {portfolioData.creditsRetired.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-teal-500" />
                      <span className="text-gray-600 text-sm">Available</span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {portfolioData.creditsHeld.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* View Portfolio Button */}
                <button className="w-full bg-emerald-500 text-white py-3 rounded-2xl font-semibold hover:bg-emerald-600 transition-colors text-sm">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Credits Marketplace */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Credits Marketplace</h2>
              <p className="text-gray-600">Discover and purchase verified green hydrogen credits</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search credits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>
              <button className="flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-200 transition-colors">
                <Filter size={18} />
                <span className="text-sm font-medium">Filter</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCredits.map((credit) => (
              <div key={credit.id} className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Hash size={18} className="text-emerald-600" />
                    <span className="font-bold text-gray-800">{credit.id}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    credit.verificationStatus === 'Verified' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {credit.verificationStatus}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Producer Address</p>
                    <p className="font-mono text-sm text-gray-800 bg-gray-100 px-3 py-1 rounded">
                      {credit.producerAddress.substring(0, 10)}...{credit.producerAddress.slice(-8)}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Amount</p>
                      <div className="flex items-center space-x-2">
                        <Package size={16} className="text-emerald-600" />
                        <span className="font-semibold text-gray-800">{credit.amount} credits</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Price per Credit</p>
                      <span className="font-semibold text-emerald-600">${credit.pricePerCredit}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Location</p>
                    <span className="text-sm text-gray-800">{credit.location}</span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Production Date</p>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-800">{credit.productionDate}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Metadata URI</p>
                    <a 
                      href={credit.metadataUri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      <ExternalLink size={14} />
                      <span>View Details</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-gray-800">
                      Total: ${(credit.amount * credit.pricePerCredit).toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => handleBuyCredit(credit)}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart size={18} />
                    <span>Buy Credits</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Retired Credits History */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Retired Credits History</h2>
            <p className="text-gray-600">Track your compliance and carbon offset claims</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Credit ID</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Amount</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Retirement Date</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Original Producer</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Purpose</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Metadata</th>
                </tr>
              </thead>
              <tbody>
                {retiredCredits.map((credit, index) => (
                  <tr key={credit.creditId} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-emerald-50 transition-colors`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="font-mono text-sm">{credit.creditId}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold">{credit.amount} credits</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-sm">{credit.retirementDate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm">
                        {credit.originalProducer.substring(0, 6)}...{credit.originalProducer.slice(-4)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-700">{credit.purpose}</span>
                    </td>
                    <td className="py-4 px-4">
                      <a 
                        href={credit.metadataUri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700"
                      >
                        <Eye size={16} />
                        <span className="text-sm">View</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Purchase Credits Modal */}
      {showPurchaseModal && selectedCredit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Confirm Purchase</h3>
              <button
                onClick={() => setShowPurchaseModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Credit Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Credit ID:</span>
                    <span className="font-mono">{selectedCredit.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold">{selectedCredit.amount} credits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per Credit:</span>
                    <span className="font-semibold">${selectedCredit.pricePerCredit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Producer:</span>
                    <span className="font-mono text-xs">
                      {selectedCredit.producerAddress.substring(0, 8)}...{selectedCredit.producerAddress.slice(-6)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">Total Amount:</span>
                  <span className="text-2xl font-bold text-emerald-600">
                    ${(selectedCredit.amount * selectedCredit.pricePerCredit).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowPurchaseModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPurchase}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
              >
                Confirm Transaction
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                This will trigger a MetaMask transaction to transfer credits to your wallet
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}