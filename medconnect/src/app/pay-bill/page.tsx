'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PayBill() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [selectedBills, setSelectedBills] = useState<string[]>([]);

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
          <p className="text-gray-600">Please log in to access your billing information.</p>
        </div>
      </div>
    );
  }

  const bills = [
    {
      id: "INV-2024-001",
      date: "2024-06-15",
      description: "Annual Physical Examination",
      provider: "Dr. Emily Chen",
      amount: 250.00,
      insurance: 200.00,
      patientResponsibility: 50.00,
      status: "Outstanding",
      dueDate: "2024-07-15"
    },
    {
      id: "INV-2024-002",
      date: "2024-06-20",
      description: "Lab Work - Complete Blood Count",
      provider: "MedConnect Laboratory",
      amount: 125.00,
      insurance: 100.00,
      patientResponsibility: 25.00,
      status: "Outstanding",
      dueDate: "2024-07-20"
    },
    {
      id: "INV-2024-003",
      date: "2024-05-10",
      description: "Consultation - Follow-up",
      provider: "Dr. Sarah Rodriguez",
      amount: 150.00,
      insurance: 120.00,
      patientResponsibility: 30.00,
      status: "Paid",
      dueDate: "2024-06-10"
    },
    {
      id: "INV-2024-004",
      date: "2024-04-25",
      description: "Prescription - Metformin",
      provider: "MedConnect Pharmacy",
      amount: 45.00,
      insurance: 35.00,
      patientResponsibility: 10.00,
      status: "Paid",
      dueDate: "2024-05-25"
    }
  ];

  const outstandingBills = bills.filter(bill => bill.status === "Outstanding");
  const paidBills = bills.filter(bill => bill.status === "Paid");
  const totalOutstanding = outstandingBills.reduce((sum, bill) => sum + bill.patientResponsibility, 0);

  const handleBillSelection = (billId: string) => {
    setSelectedBills(prev => 
      prev.includes(billId) 
        ? prev.filter(id => id !== billId)
        : [...prev, billId]
    );
  };

  const selectedTotal = outstandingBills
    .filter(bill => selectedBills.includes(bill.id))
    .reduce((sum, bill) => sum + bill.patientResponsibility, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Billing & Payments</h1>
          <p className="text-purple-100">
            Manage your medical bills, view payment history, and make secure online payments
          </p>
        </div>
      </section>

      {/* Account Summary */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Current Balance</h3>
              <p className="text-2xl font-bold text-purple-600">${totalOutstanding.toFixed(2)}</p>
              <p className="text-gray-600 text-sm mt-1">{outstandingBills.length} outstanding bill(s)</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Next Due Date</h3>
              <p className="text-lg font-semibold text-gray-900">
                {outstandingBills.length > 0 
                  ? new Date(Math.min(...outstandingBills.map(b => new Date(b.dueDate).getTime()))).toLocaleDateString()
                  : "No bills due"
                }
              </p>
              <p className="text-gray-600 text-sm mt-1">Earliest due date</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Payment Methods</h3>
              <p className="text-gray-700 mb-3">Manage saved payment methods</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Manage Cards
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Outstanding Bills */}
      {outstandingBills.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Outstanding Bills</h2>
              {selectedBills.length > 0 && (
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold text-purple-600">
                    Selected Total: ${selectedTotal.toFixed(2)}
                  </span>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Pay Selected Bills
                  </button>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              {outstandingBills.map((bill) => (
                <div key={bill.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <input
                      type="checkbox"
                      checked={selectedBills.includes(bill.id)}
                      onChange={() => handleBillSelection(bill.id)}
                      className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <div className="flex-1">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-2">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{bill.description}</h3>
                              <p className="text-gray-600">Provider: {bill.provider}</p>
                              <p className="text-gray-600">Invoice: {bill.id}</p>
                            </div>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                              {bill.status}
                            </span>
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-700">
                              <span className="font-medium">Service Date:</span> {new Date(bill.date).toLocaleDateString()}
                            </p>
                            <p className="text-gray-700">
                              <span className="font-medium">Due Date:</span> {new Date(bill.dueDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Billing Breakdown</h4>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-700">
                              <span className="font-medium">Total Charges:</span> ${bill.amount.toFixed(2)}
                            </p>
                            <p className="text-gray-700">
                              <span className="font-medium">Insurance Paid:</span> ${bill.insurance.toFixed(2)}
                            </p>
                            <p className="text-lg font-semibold text-purple-600">
                              Your Responsibility: ${bill.patientResponsibility.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                            Pay This Bill
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                            View Details
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                            Download PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Payment Options */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Credit/Debit Card</h3>
              <p className="text-gray-600 text-sm mb-4">Pay instantly with your credit or debit card</p>
              <p className="text-xs text-gray-500">Visa, MasterCard, American Express accepted</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="font-semibold text-gray-900 mb-2">Bank Transfer</h3>
              <p className="text-gray-600 text-sm mb-4">Direct transfer from your bank account</p>
              <p className="text-xs text-gray-500">ACH transfer - takes 2-3 business days</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Payment Plan</h3>
              <p className="text-gray-600 text-sm mb-4">Set up monthly payment arrangements</p>
              <p className="text-xs text-gray-500">Contact our billing department to set up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment History */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment History</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Invoice
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount Paid
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
                  {paidBills.map((bill) => (
                    <tr key={bill.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {bill.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{bill.description}</div>
                        <div className="text-sm text-gray-500">{bill.provider}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(bill.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${bill.patientResponsibility.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {bill.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">View</button>
                        <button className="text-blue-600 hover:text-blue-900">Receipt</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Information */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="text-2xl">🏥</div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Insurance Information</h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <p><span className="font-medium">Primary Insurance:</span> Blue Cross Blue Shield</p>
                  <p><span className="font-medium">Policy Number:</span> BCBS123456789</p>
                  <p><span className="font-medium">Group Number:</span> GRP987654</p>
                  <p><span className="font-medium">Copay:</span> $25 for office visits</p>
                </div>
                <div className="mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Update Insurance Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help with Billing?</h3>
            <p className="text-gray-600 mb-4">
              Our billing department is here to help with payment arrangements, insurance questions, and billing inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5551234569"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Call Billing: (555) 123-4569
              </a>
              <a
                href="mailto:billing@medconnect.com"
                className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Email Billing Department
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}