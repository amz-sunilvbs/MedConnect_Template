'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navigation() {
  const { isAuthenticated, userType, login, logout } = useAuth();
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const handleLogin = (type: 'patient' | 'provider' | 'staff') => {
    login(type);
    setShowLoginDropdown(false);
  };

  if (isAuthenticated) {
    return (
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                MedConnect
              </Link>
            </div>

            {/* Center Menu Items */}
            <div className="hidden md:flex space-x-8">
              <Link href="/ai-assistant" className="text-gray-700 hover:text-blue-600 font-medium">
                AI Assistant
              </Link>
              <Link href="/prescription" className="text-gray-700 hover:text-blue-600 font-medium">
                Prescription
              </Link>
              <Link href="/results" className="text-gray-700 hover:text-blue-600 font-medium">
                Results
              </Link>
              <Link href="/pay-bill" className="text-gray-700 hover:text-blue-600 font-medium">
                Pay Bill
              </Link>
              <Link href="/appointments" className="text-gray-700 hover:text-blue-600 font-medium">
                Appointments
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact Us
              </Link>
            </div>

            {/* Logout Button */}
            <div>
              <button
                onClick={logout}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MedConnect
            </Link>
          </div>

          {/* Center Menu Items */}
          <div className="hidden md:flex space-x-8">
            <Link href="/ai-assistant" className="text-gray-700 hover:text-blue-600 font-medium">
              AI Assistant
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/providers" className="text-gray-700 hover:text-blue-600 font-medium">
              Providers
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact Us
            </Link>
          </div>

          {/* Login/Register Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
              Register
            </Link>
            <div className="relative">
              <button
                onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
              {showLoginDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={() => handleLogin('patient')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Patient
                  </button>
                  <button
                    onClick={() => handleLogin('provider')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Provider
                  </button>
                  <button
                    onClick={() => handleLogin('staff')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Staff
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}