import React, { useState } from 'react';
import { Building2, Rocket, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState<'government' | 'startup' | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Shield className="h-12 w-12 text-blue-600 mx-auto" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-navy-900">
          Sign in to Empower India
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Select your portal to continue
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => setSelectedRole('government')}
              className={`p-6 border-2 rounded-xl text-left transition-all ${
                selectedRole === 'government' 
                  ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-200' 
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <Building2 className={`h-8 w-8 mb-3 ${selectedRole === 'government' ? 'text-blue-600' : 'text-gray-400'}`} />
              <h3 className="font-bold text-navy-900 text-lg">Government</h3>
              <p className="text-sm text-gray-500 mt-1">Publish challenges and discover solutions.</p>
            </button>

            <button
              onClick={() => setSelectedRole('startup')}
              className={`p-6 border-2 rounded-xl text-left transition-all ${
                selectedRole === 'startup' 
                  ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-200' 
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <Rocket className={`h-8 w-8 mb-3 ${selectedRole === 'startup' ? 'text-blue-600' : 'text-gray-400'}`} />
              <h3 className="font-bold text-navy-900 text-lg">Startup</h3>
              <p className="text-sm text-gray-500 mt-1">Submit solutions and participate in pilots.</p>
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder={selectedRole === 'government' ? 'official@gov.in' : 'founder@startup.com'}
                  disabled={!selectedRole}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  disabled={!selectedRole}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  disabled={!selectedRole}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  selectedRole 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                disabled={!selectedRole}
              >
                Sign in <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            {!selectedRole && (
              <p className="text-center text-sm text-red-500 mt-2">
                Please select a role above to continue.
              </p>
            )}
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Demo Prototype</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Return to Home
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
