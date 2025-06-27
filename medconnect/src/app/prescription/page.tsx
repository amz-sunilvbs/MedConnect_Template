'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Prescription() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">Please log in to access your prescriptions.</p>
        </div>
      </div>
    );
  }

  const prescriptions = [
    {
      id: 1,
      medication: "Metformin 500mg",
      prescriber: "Dr. Emily Chen",
      instructions: "Take twice daily with meals",
      quantity: "60 tablets",
      refillsRemaining: 2,
      lastFilled: "2024-05-15",
      nextRefillDate: "2024-06-15",
      status: "Active",
      pharmacy: "Main Street Pharmacy"
    },
    {
      id: 2,
      medication: "Lisinopril 10mg",
      prescriber: "Dr. Sarah Rodriguez",
      instructions: "Take once daily in morning",
      quantity: "30 tablets",
      refillsRemaining: 1,
      lastFilled: "2024-06-01",
      nextRefillDate: "2024-07-01",
      status: "Active",
      pharmacy: "Main Street Pharmacy"
    },
    {
      id: 3,
      medication: "Vitamin D3 2000 IU",
      prescriber: "Dr. Emily Chen",
      instructions: "Take once daily with food",
      quantity: "90 capsules",
      refillsRemaining: 3,
      lastFilled: "2024-04-20",
      nextRefillDate: "2024-07-20",
      status: "Active",
      pharmacy: "HealthCare Pharmacy"
    },
    {
      id: 4,
      medication: "Amoxicillin 875mg",
      prescriber: "Dr. Emily Chen",
      instructions: "Take twice daily for 10 days",
      quantity: "20 tablets",
      refillsRemaining: 0,
      lastFilled: "2024-03-10",
      nextRefillDate: "N/A",
      status: "Completed",
      pharmacy: "Main Street Pharmacy"
    }
  ];

  const activePrescriptions = prescriptions.filter(p => p.status === "Active");
  const completedPrescriptions = prescriptions.filter(p => p.status === "Completed");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">My Prescriptions</h1>
          <p className="text-green-100">
            Manage your medications, request refills, and track prescription history
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Request Refill</h3>
              <p className="text-gray-600 text-sm mb-4">Request refills for your current medications</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Request Refill
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Find Pharmacy</h3>
              <p className="text-gray-600 text-sm mb-4">Locate nearby pharmacies and transfer prescriptions</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Find Pharmacy
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact Provider</h3>
              <p className="text-gray-600 text-sm mb-4">Ask questions about your medications</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                Message Provider
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Prescriptions */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Prescriptions</h2>
          <div className="space-y-4">
            {activePrescriptions.map((prescription) => (
              <div key={prescription.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{prescription.medication}</h3>
                        <p className="text-gray-600">Prescribed by {prescription.prescriber}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {prescription.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">
                        <span className="font-medium">Instructions:</span> {prescription.instructions}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Quantity:</span> {prescription.quantity}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Pharmacy:</span> {prescription.pharmacy}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Refill Information</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700">
                        <span className="font-medium">Refills left:</span> {prescription.refillsRemaining}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Last filled:</span> {new Date(prescription.lastFilled).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Next refill:</span> {new Date(prescription.nextRefillDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      Request Refill
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      Transfer Pharmacy
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prescription History */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prescription History</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Medication
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prescriber
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Filled
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {completedPrescriptions.map((prescription) => (
                    <tr key={prescription.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{prescription.medication}</div>
                          <div className="text-sm text-gray-500">{prescription.instructions}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {prescription.prescriber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(prescription.lastFilled).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                          {prescription.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="text-xl">⚠️</div>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Important Medication Information</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Always follow your prescribed dosage and timing instructions</li>
                    <li>Contact your provider before stopping any medication</li>
                    <li>Report any side effects or concerns to your healthcare team</li>
                    <li>Keep all medications out of reach of children</li>
                    <li>Check expiration dates regularly and dispose of expired medications safely</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}