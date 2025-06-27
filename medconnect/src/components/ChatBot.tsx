'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  from: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'ai',
      text: 'Hello! I\'m your AI Health Assistant. How can I help you today? I can assist with scheduling appointments, prescription refills, billing questions, and general information about our office.',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const aiResponses = {
    // Scheduling responses
    'schedule': [
      'I can help you schedule an appointment. Are you looking for a specific provider, or would you like the first available appointment?',
      'I see an opening with Dr. Chen tomorrow at 2:30 PM. Would that work for you?',
      'Perfect! I\'ve scheduled your appointment with Dr. Chen for tomorrow at 2:30 PM. You\'ll receive a confirmation email shortly.'
    ],
    'appointment': [
      'I can assist with appointment scheduling. What type of appointment do you need?',
      'Would you prefer morning or afternoon availability?',
      'Great! I\'ve found some openings that match your preferences. Would you like me to book one for you?'
    ],
    
    // Prescription responses
    'prescription': [
      'I can help with prescription refills. Could you please provide the name of the medication you need refilled?',
      'Which pharmacy would you like me to send this to?',
      'I\'ve submitted your refill request. It typically takes 2-4 hours to process. You\'ll be notified when it\'s ready for pickup.'
    ],
    'refill': [
      'I can process prescription refills for you. What medication do you need refilled?',
      'I see you have an active prescription for that medication. Sending the refill request to your preferred pharmacy now.',
      'Your refill request has been sent to the pharmacy. They\'ll contact you when it\'s ready.'
    ],
    
    // Billing responses
    'billing': [
      'I can help with billing questions. What would you like to know about your account?',
      'Your current account balance is $25.00 from your last visit. Would you like to pay this online?',
      'I can direct you to our secure payment portal. You can also call our billing department at (555) 123-4567.'
    ],
    'insurance': [
      'I can help verify your insurance coverage. Could you please provide your insurance card information?',
      'I\'ve verified your insurance. Your plan is active and your co-pay for office visits is $25.',
      'Your insurance covers most of our services. Is there a specific procedure you\'d like me to check coverage for?'
    ],
    
    // General information
    'hours': [
      'Our office hours are Monday through Friday, 9:00 AM to 5:00 PM. We\'re closed on weekends and major holidays.'
    ],
    'location': [
      'We\'re located at 123 Healthway, Medical City, CA 90210. We have free parking available and are accessible by public transportation.'
    ],
    'services': [
      'We offer comprehensive healthcare services including family medicine, pediatrics, women\'s health, mental health support, and preventive care. Would you like more details about any specific service?'
    ],
    'doctors': [
      'We have an excellent team of providers including Dr. Emily Chen (Family Medicine), Dr. David Lee (Pediatrics), Dr. Sarah Rodriguez (Internal Medicine), and several other specialists. Would you like to know more about any specific provider?'
    ],
    
    // Lab results
    'results': [
      'I can help you check on lab results. For privacy reasons, I\'ll need to verify your identity first. Could you please provide your full name and date of birth?',
      'Thank you for verifying your identity. Your recent lab results are available in your patient portal. I cannot discuss specific results here, but your provider will contact you if any action is needed.'
    ],
    
    // Default responses
    'default': [
      'I\'m here to help! I can assist with scheduling appointments, prescription refills, billing questions, insurance verification, and general information about our office. What would you like to know?',
      'I understand you need assistance. Could you please be more specific about what you\'d like help with today?',
      'I\'m happy to help with that. Let me connect you with the right information or person for your needs.'
    ]
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('schedule') || message.includes('appointment') || message.includes('book')) {
      const responses = aiResponses.schedule;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (message.includes('prescription') || message.includes('refill') || message.includes('medication')) {
      const responses = aiResponses.prescription;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (message.includes('billing') || message.includes('bill') || message.includes('payment') || message.includes('pay')) {
      const responses = aiResponses.billing;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (message.includes('insurance') || message.includes('coverage') || message.includes('copay')) {
      const responses = aiResponses.insurance;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (message.includes('hours') || message.includes('open') || message.includes('time')) {
      return aiResponses.hours[0];
    }
    
    if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return aiResponses.location[0];
    }
    
    if (message.includes('service') || message.includes('treatment') || message.includes('care')) {
      return aiResponses.services[0];
    }
    
    if (message.includes('doctor') || message.includes('provider') || message.includes('physician')) {
      return aiResponses.doctors[0];
    }
    
    if (message.includes('results') || message.includes('lab') || message.includes('test')) {
      const responses = aiResponses.results;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    const responses = aiResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      from: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        from: 'ai',
        text: getAIResponse(inputText),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // 1-3 seconds delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg h-96 flex flex-col">
      {/* Chat Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-xl flex items-center">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
          <span className="text-blue-600 font-bold text-sm">AI</span>
        </div>
        <div>
          <h3 className="font-semibold">AI Health Assistant</h3>
          <p className="text-xs opacity-90">Online • Ready to help</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.from === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-900'
            }`}>
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.from === 'user' ? 'text-blue-200' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={isTyping || !inputText.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}