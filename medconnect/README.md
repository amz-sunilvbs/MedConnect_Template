# MedConnect - Medical Office Website

A comprehensive medical office website built with Next.js and Tailwind CSS, featuring AI-powered assistance, patient portals, and seamless healthcare management.

## Features

### 🌐 Public Website
- **Homepage**: Engaging landing page with healthcare information and quick access
- **Services**: Comprehensive list of medical services offered
- **Providers**: Detailed provider profiles with specialties and experience
- **About Us**: Office philosophy, mission, values, and team information
- **Contact Us**: AI chatbot interface for immediate assistance

### 🔐 Authenticated User Experience
- **Prescriptions**: Manage medications, request refills, view prescription history
- **Test Results**: View lab results, diagnostic reports, and medical test history
- **Billing**: Pay bills online, view payment history, manage insurance information
- **Appointments**: Schedule, reschedule, and manage appointments with providers

### 🤖 AI Health Assistant
- Intelligent chatbot that handles:
  - Appointment scheduling
  - Prescription refill requests
  - Billing and insurance questions
  - General office information
  - Lab result status checks
- Based on the AI Agent requirements from the design specification

### 🎨 Design Features
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices
- **Sticky Navigation**: Navigation bar that moves with scroll
- **Role-Based Access**: Different navigation and features for patients, providers, and staff
- **Modern UI**: Clean, professional design with intuitive user experience

## Technology Stack

- **Framework**: Next.js 15.3.4 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Authentication**: Context-based authentication system
- **State Management**: React Context API
- **Deployment**: Optimized for production deployment

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd medconnect
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About us page
│   ├── appointments/      # Appointments management
│   ├── contact/           # Contact page with AI chatbot
│   ├── pay-bill/          # Billing and payments
│   ├── prescription/      # Prescription management
│   ├── providers/         # Provider profiles
│   ├── register/          # Patient registration
│   ├── results/           # Test results
│   ├── services/          # Medical services
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ChatBot.tsx        # AI health assistant
│   └── Navigation.tsx     # Navigation component
└── context/               # React contexts
    └── AuthContext.tsx    # Authentication context
```

## Key Features Implemented

### Navigation System
- **Before Login**: Services, Providers, About Us, Contact Us with Register/Login dropdown
- **After Login**: Prescription, Results, Pay Bill, Appointments, Contact Us with Logout button
- **Sticky Navigation**: Moves vertically as user scrolls

### AI Health Assistant
- Interactive chatbot interface similar to Requirements.html AI Agent
- Handles common healthcare tasks:
  - Appointment scheduling
  - Prescription refills
  - Billing inquiries
  - Insurance verification
  - General office information
- Real-time messaging with typing indicators
- Context-aware responses based on user input

### Patient Portal Features
- **Prescription Management**: View active/completed prescriptions, request refills
- **Test Results**: View lab results with normal/abnormal indicators
- **Billing**: Pay bills online, view payment history, manage insurance
- **Appointments**: Schedule new appointments, manage existing ones

### Responsive Design
- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly interface elements
- Accessible navigation and forms

## Authentication Flow

The application uses a context-based authentication system:

1. **Login**: Users can log in as Patient, Provider, or Staff
2. **Role-Based Access**: Different navigation and features based on user role
3. **Protected Routes**: Authenticated pages redirect to homepage if not logged in
4. **Logout**: Secure logout functionality

## AI Chatbot Implementation

The AI Health Assistant emulates the functionality described in Requirements.html:

- **Intelligent Responses**: Context-aware responses based on user queries
- **Multiple Capabilities**: Handles scheduling, prescriptions, billing, and information requests
- **Real-time Interface**: Smooth messaging experience with typing indicators
- **Professional Design**: Healthcare-appropriate styling and interactions

## Usage

### Testing the Application

1. **Public Access**: Browse Services, Providers, About Us, and Contact pages
2. **Login Simulation**: Click the Login dropdown and select Patient, Provider, or Staff
3. **Authenticated Features**: After logging in, access Prescription, Results, Pay Bill, and Appointments
4. **AI Chatbot**: Visit the Contact page and interact with the AI Health Assistant
5. **Responsive Testing**: Resize browser window to test mobile/tablet layouts

### AI Chatbot Testing

Try these sample queries with the AI assistant:
- "I need to schedule an appointment"
- "Can you help me with a prescription refill?"
- "What are your office hours?"
- "I have a billing question"
- "Are my lab results available?"

## Deployment

This application is ready for production deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Traditional hosting with Node.js support

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## Implementation Notes

### Design Requirements Fulfilled

✅ **Navigation**: Sticky navigation with different menu items before/after login  
✅ **Authentication**: Login dropdown with Patient/Provider/Staff options  
✅ **AI Chatbot**: Contact page with AI agent emulating Requirements.html functionality  
✅ **Content Pages**: Services, Providers, About Us with meaningful healthcare content  
✅ **Authenticated Pages**: Prescription, Results, Pay Bill, Appointments for logged-in users  
✅ **Responsive Design**: Mobile-friendly layout across all pages  
✅ **Professional Styling**: Healthcare-appropriate design with Tailwind CSS  

### Technology Choices

- **Next.js**: Chosen for SSR capabilities, file-based routing, and excellent developer experience
- **TypeScript**: Ensures type safety and better development experience
- **Tailwind CSS**: Provides utility-first styling for rapid, consistent UI development
- **React Context**: Simple state management for authentication without external dependencies

## Contributing

1. Follow the existing code style and structure
2. Use TypeScript for type safety
3. Maintain responsive design principles
4. Test on multiple devices and browsers
5. Update documentation for new features

## License

This project is built for educational and demonstration purposes as part of the MedConnect medical office platform requirements.

## Support

For technical support or questions about this implementation:
- Review the code documentation
- Check the project requirements in Design.md
- Refer to the AI Agent functionality in Requirements.html

---

**Note**: This is a demonstration/prototype implementation. For production use in a medical environment, additional security measures, HIPAA compliance features, and proper backend integration would be required.