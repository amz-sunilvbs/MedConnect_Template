# MedConnect Template

A comprehensive medical platform template featuring an integrated AI Assistant and vision-based medical analysis tools. This repository contains two main applications designed to work together to provide a complete healthcare technology solution.

## 🏗️ Repository Structure

```
MedConnect_Template/
├── README.md                      # This file
├── .gitignore                     # Comprehensive ignore patterns
├── medconnect/                    # Main medical platform
│   ├── src/
│   │   ├── app/
│   │   │   ├── ai-assistant/      # AI Assistant integration
│   │   │   ├── appointments/      # Appointment management
│   │   │   ├── prescription/      # Prescription handling
│   │   │   ├── results/           # Medical results
│   │   │   ├── pay-bill/          # Billing system
│   │   │   └── api/               # API routes
│   │   ├── components/
│   │   │   ├── Navigation.tsx     # Main navigation with AI Assistant
│   │   │   ├── livekit/           # Voice interface components
│   │   │   └── ui/                # Reusable UI components
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── context/               # React context providers
│   │   └── lib/                   # Utility functions
│   ├── package.json               # Dependencies and scripts
│   └── next.config.ts             # Next.js configuration
└── vision/                        # Vision analysis tools
    ├── agent.py                   # Main vision agent
    ├── vision.py                  # Vision processing logic
    ├── novaActSample.py           # Nova Act integration
    ├── frontend-app/              # Vision frontend application
    │   ├── app/                   # Next.js app directory
    │   ├── components/            # React components
    │   ├── hooks/                 # Custom hooks
    │   └── lib/                   # Utilities
    └── init.sh                    # Initialization script
```

## 🚀 Applications

### 1. MedConnect Platform (`/medconnect`)

A modern medical platform built with Next.js 15, React 19, and TypeScript, featuring:

#### Core Features:
- **AI Assistant Integration**: Voice-enabled medical assistant using LiveKit
- **Patient Portal**: Comprehensive patient management system
- **Appointment Scheduling**: Book and manage medical appointments
- **Prescription Management**: Digital prescription handling
- **Medical Results**: View and manage test results
- **Billing System**: Integrated payment processing
- **Provider Directory**: Find and connect with healthcare providers

#### Technology Stack:
- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4.x
- **Voice Interface**: LiveKit for real-time communication
- **UI Components**: Radix UI primitives
- **Authentication**: Built-in auth context
- **State Management**: React hooks and context

#### Key Components:
- **Navigation**: Responsive navigation with AI Assistant access
- **Voice Interface**: Real-time voice communication with medical AI
- **Chat System**: Text-based interaction with AI assistant
- **Medical Forms**: Structured data collection
- **Dashboard**: Patient and provider dashboards

### 2. Vision Analysis Tools (`/vision`)

A Python-based vision analysis system for medical imaging and diagnostics:

#### Core Features:
- **Medical Image Analysis**: Process and analyze medical images
- **AI-Powered Diagnostics**: Automated analysis using computer vision
- **Nova Act Integration**: Advanced AI model integration
- **Web Interface**: Next.js frontend for vision tools
- **Real-time Processing**: Live image analysis capabilities

#### Technology Stack:
- **Backend**: Python with computer vision libraries
- **Frontend**: Next.js application
- **AI/ML**: Integration with AWS Nova Act
- **Image Processing**: Advanced computer vision algorithms
- **API**: RESTful endpoints for image analysis

## 🛠️ Setup and Installation

### Prerequisites
- Node.js 18+ and npm/pnpm
- Python 3.8+ (for vision tools)
- Git

### MedConnect Platform Setup

```bash
cd medconnect
npm install
# or
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:3000`

### Vision Tools Setup

```bash
cd vision

# Install Python dependencies
pip install -r requirements.txt

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Initialize the system
chmod +x init.sh
./init.sh

# Run the vision agent
python agent.py

# For the frontend (in a separate terminal)
cd frontend-app
npm install
npm run dev
```

## 🔧 Configuration

### Environment Variables

#### MedConnect Platform (`.env.local`):
```env
# LiveKit Configuration
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_secret
LIVEKIT_URL=your_livekit_url

# Database (if applicable)
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

#### Vision Tools (`.env`):
```env
# AWS Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region

# Nova Act Configuration
NOVA_ACT_ENDPOINT=your_nova_endpoint
```

## 🎯 Key Features

### AI Assistant Integration
- **Voice Interface**: Real-time voice communication with medical AI
- **Medical Context**: AI trained on medical knowledge and protocols
- **Multi-modal**: Support for both voice and text interactions
- **Secure**: HIPAA-compliant communication protocols

### Medical Platform Features
- **Patient Management**: Comprehensive patient records and history
- **Provider Tools**: Tools for healthcare providers and staff
- **Appointment System**: Scheduling and calendar integration
- **Prescription Handling**: Digital prescription management
- **Results Portal**: Secure access to medical test results
- **Billing Integration**: Payment processing and insurance handling

### Vision Analysis Capabilities
- **Medical Imaging**: Process X-rays, MRIs, CT scans, and other medical images
- **AI Diagnostics**: Automated analysis and diagnostic suggestions
- **Real-time Processing**: Live analysis of medical images
- **Integration Ready**: APIs for integration with other medical systems

## 🔒 Security and Compliance

- **HIPAA Compliance**: Built with healthcare data protection in mind
- **Secure Communication**: Encrypted voice and data transmission
- **Authentication**: Secure user authentication and authorization
- **Data Protection**: Comprehensive data encryption and protection
- **Audit Trails**: Complete logging and audit capabilities

## 🚀 Deployment

### MedConnect Platform
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Vision Tools
```bash
# Production deployment
python -m gunicorn agent:app --bind 0.0.0.0:8000
```

## 📚 API Documentation

### MedConnect API Endpoints
- `GET /api/connection-details` - LiveKit connection configuration
- `POST /api/appointments` - Create/manage appointments
- `GET /api/prescriptions` - Retrieve prescriptions
- `POST /api/results` - Submit medical results

### Vision API Endpoints
- `POST /api/analyze` - Analyze medical images
- `GET /api/results/:id` - Retrieve analysis results
- `POST /api/upload` - Upload medical images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Contact the development team
- Check the documentation in each application directory

## 🔄 Version History

- **v1.0.0** - Initial release with AI Assistant integration
  - MedConnect platform with voice interface
  - Vision analysis tools
  - Comprehensive medical features
  - HIPAA-compliant architecture

## 🏥 Use Cases

### For Healthcare Providers
- Patient consultation with AI assistance
- Medical image analysis and diagnostics
- Appointment and schedule management
- Prescription and treatment tracking

### For Patients
- Voice-enabled medical consultations
- Access to medical records and results
- Appointment scheduling and management
- Secure communication with providers

### For Healthcare Organizations
- Scalable medical platform infrastructure
- AI-powered diagnostic tools
- Comprehensive patient management system
- Integration-ready architecture

---

**Built with ❤️ for the healthcare community**
