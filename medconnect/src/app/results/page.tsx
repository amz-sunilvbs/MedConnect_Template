'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Results() {
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
          <p className="text-gray-600">Please log in to access your test results.</p>
        </div>
      </div>
    );
  }

  const testResults = [
    {
      id: 1,
      testName: "Complete Blood Count (CBC)",
      orderDate: "2024-06-15",
      resultDate: "2024-06-16",
      status: "Complete",
      provider: "Dr. Emily Chen",
      priority: "Routine",
      results: [
        { parameter: "White Blood Cells", value: "7.2", unit: "K/uL", range: "4.0-11.0", status: "Normal" },
        { parameter: "Red Blood Cells", value: "4.5", unit: "M/uL", range: "4.2-5.8", status: "Normal" },
        { parameter: "Hemoglobin", value: "14.2", unit: "g/dL", range: "12.0-15.5", status: "Normal" },
        { parameter: "Hematocrit", value: "42.1", unit: "%", range: "36.0-46.0", status: "Normal" }
      ]
    },
    {
      id: 2,
      testName: "Lipid Panel",
      orderDate: "2024-06-10",
      resultDate: "2024-06-11",
      status: "Complete",
      provider: "Dr. Sarah Rodriguez",
      priority: "Routine",
      results: [
        { parameter: "Total Cholesterol", value: "198", unit: "mg/dL", range: "<200", status: "Normal" },
        { parameter: "HDL Cholesterol", value: "58", unit: "mg/dL", range: ">40", status: "Normal" },
        { parameter: "LDL Cholesterol", value: "112", unit: "mg/dL", range: "<100", status: "High" },
        { parameter: "Triglycerides", value: "140", unit: "mg/dL", range: "<150", status: "Normal" }
      ]
    },
    {
      id: 3,
      testName: "Thyroid Function Panel",
      orderDate: "2024-06-27",
      resultDate: "2024-06-27",
      status: "Pending",
      provider: "Dr. Emily Chen",
      priority: "Routine",
      results: []
    },
    {
      id: 4,
      testName: "Vitamin D Level",
      orderDate: "2024-05-20",
      resultDate: "2024-05-21",
      status: "Complete",
      provider: "Dr. Emily Chen",
      priority: "Routine",
      results: [
        { parameter: "25-Hydroxy Vitamin D", value: "28", unit: "ng/mL", range: "30-100", status: "Low" }
      ]
    }
  ];

  const pendingResults = testResults.filter(r => r.status === "Pending");
  const recentResults = testResults.filter(r => r.status === "Complete").slice(0, 3);
  const allResults = testResults.filter(r => r.status === "Complete");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Normal":
        return "bg-green-100 text-green-800";
      case "High":
        return "bg-red-100 text-red-800";
      case "Low":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Urgent":
        return "bg-red-100 text-red-800";
      case "STAT":
        return "bg-red-500 text-white";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">My Test Results</h1>
          <p className="text-blue-100">
            View your laboratory results, diagnostic reports, and test history
          </p>
        </div>
      </section>

      {/* Pending Results Alert */}
      {pendingResults.length > 0 && (
        <section className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex items-center">
                <div className="text-2xl mr-3">⏳</div>
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">Pending Results</h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    You have {pendingResults.length} test result(s) pending. We'll notify you when they're available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Actions */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Download Results</h3>
              <p className="text-gray-600 text-sm mb-4">Get PDF copies of your test results</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Download All
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Discuss Results</h3>
              <p className="text-gray-600 text-sm mb-4">Schedule a consultation about your results</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Schedule Call
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Share Results</h3>
              <p className="text-gray-600 text-sm mb-4">Securely share with other providers</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                Share Results
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Results */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Test Results</h2>
          <div className="space-y-6">
            {recentResults.map((test) => (
              <div key={test.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{test.testName}</h3>
                    <p className="text-gray-600">Ordered by {test.provider}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-2 lg:mt-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(test.priority)}`}>
                      {test.priority}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {test.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
                  <p className="text-gray-700">
                    <span className="font-medium">Order Date:</span> {new Date(test.orderDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Result Date:</span> {new Date(test.resultDate).toLocaleDateString()}
                  </p>
                </div>

                {test.results.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Parameter</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Reference Range</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {test.results.map((result, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 text-sm font-medium text-gray-900">{result.parameter}</td>
                            <td className="px-4 py-2 text-sm text-gray-900">{result.value} {result.unit}</td>
                            <td className="px-4 py-2 text-sm text-gray-600">{result.range}</td>
                            <td className="px-4 py-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                                {result.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    View Full Report
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    Download PDF
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    Share Results
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pending Tests */}
      {pendingResults.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pending Test Results</h2>
            <div className="space-y-4">
              {pendingResults.map((test) => (
                <div key={test.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{test.testName}</h3>
                      <p className="text-gray-600">Ordered by {test.provider}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Ordered on {new Date(test.orderDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                        {test.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Test History */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Test History</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Test Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Provider
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Result Date
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
                  {allResults.map((test) => (
                    <tr key={test.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{test.testName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {test.provider}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(test.resultDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {test.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">View</button>
                        <button className="text-blue-600 hover:text-blue-900">Download</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="text-xl">ℹ️</div>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Understanding Your Results</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    These results are for your reference. Please discuss any questions or concerns with your healthcare provider.
                    Values outside the reference range don't always indicate a problem and should be interpreted by your doctor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}