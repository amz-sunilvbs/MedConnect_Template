'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Appointments() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('');

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
          <p className="text-gray-600">Please log in to access your appointments.</p>
        </div>
      </div>
    );
  }

  const appointments = [
    {
      id: 1,
      date: "2024-07-15",
      time: "10:00 AM",
      provider: "Dr. Emily Chen",
      type: "Annual Physical",
      location: "Main Office - Room 201",
      duration: "60 minutes",
      status: "Confirmed",
      notes: "Bring insurance card and list of current medications",
      instructions: "Fasting required - no food or drink after midnight (water is okay)"
    },
    {
      id: 2,
      date: "2024-08-05",
      time: "2:30 PM",
      provider: "MedConnect Laboratory",
      type: "Lab Work - Follow-up",
      location: "Lab Department",
      duration: "30 minutes",
      status: "Scheduled",
      notes: "Follow-up blood work for cholesterol levels",
      instructions: "Fasting required - 12 hours before appointment"
    },
    {
      id: 3,
      date: "2024-06-20",
      time: "11:15 AM",
      provider: "Dr. Sarah Rodriguez",
      type: "Cardiology Consultation",
      location: "Main Office - Room 105",
      duration: "45 minutes",
      status: "Completed",
      notes: "Discussed hypertension management and lifestyle changes",
      instructions: ""
    },
    {
      id: 4,
      date: "2024-06-01",
      time: "9:00 AM",
      provider: "Dr. Emily Chen",
      type: "Routine Check-up",
      location: "Main Office - Room 201",
      duration: "30 minutes",
      status: "Completed",
      notes: "Regular quarterly visit for diabetes management",
      instructions: ""
    }
  ];

  const upcomingAppointments = appointments.filter(apt => new Date(apt.date) > new Date() && apt.status !== "Completed");
  const pastAppointments = appointments.filter(apt => new Date(apt.date) <= new Date() || apt.status === "Completed");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800";
      case "Scheduled":
        return "bg-blue-100 text-blue-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const availableSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const providers = [
    "Dr. Emily Chen - Family Medicine",
    "Dr. David Lee - Pediatrics", 
    "Dr. Sarah Rodriguez - Internal Medicine",
    "Dr. Michael Thompson - Sports Medicine",
    "Dr. Lisa Patel - Women's Health"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">My Appointments</h1>
          <p className="text-indigo-100">
            Schedule new appointments, manage existing ones, and view your appointment history
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Schedule New</h3>
              <p className="text-gray-600 text-sm mb-4">Book a new appointment</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                Schedule Now
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Reschedule</h3>
              <p className="text-gray-600 text-sm mb-4">Change existing appointments</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Reschedule
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">❌</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cancel</h3>
              <p className="text-gray-600 text-sm mb-4">Cancel appointments</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
                Cancel Appointment
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="font-semibold text-gray-900 mb-2">Telemedicine</h3>
              <p className="text-gray-600 text-sm mb-4">Virtual consultations</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Book Virtual
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule New Appointment */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule New Appointment</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Provider
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="">Choose a provider...</option>
                  {providers.map((provider, index) => (
                    <option key={index} value={provider}>{provider}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Times
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="">Select time...</option>
                  {availableSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Visit
              </label>
              <textarea
                rows={3}
                placeholder="Please describe the reason for your visit..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Appointments */}
      {upcomingAppointments.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{appointment.type}</h3>
                          <p className="text-gray-600">with {appointment.provider}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-700">
                          <span className="font-medium">Date & Time:</span> {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Location:</span> {appointment.location}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Duration:</span> {appointment.duration}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Notes & Instructions</h4>
                      <div className="space-y-2 text-sm">
                        {appointment.notes && (
                          <p className="text-gray-700">{appointment.notes}</p>
                        )}
                        {appointment.instructions && (
                          <p className="text-orange-700 bg-orange-50 p-2 rounded">
                            <span className="font-medium">Important:</span> {appointment.instructions}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                        Reschedule
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
                        Cancel
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                        Add to Calendar
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Appointment History */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Appointment History</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Provider
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
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
                  {pastAppointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {new Date(appointment.date).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">{appointment.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {appointment.provider}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.type}</div>
                        <div className="text-sm text-gray-500">{appointment.location}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">View Summary</button>
                        <button className="text-indigo-600 hover:text-indigo-900">Book Again</button>
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
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="text-2xl">ℹ️</div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-indigo-800 mb-2">Appointment Policies</h3>
                <div className="text-sm text-indigo-700 space-y-2">
                  <p>• Please arrive 15 minutes early for your appointment</p>
                  <p>• Bring your insurance card and a valid photo ID</p>
                  <p>• Cancellations must be made at least 24 hours in advance</p>
                  <p>• Late arrivals may need to be rescheduled</p>
                  <p>• For urgent medical needs, please call our office directly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}