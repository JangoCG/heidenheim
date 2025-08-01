# Heidenheim Smart City Dashboard

A modern real-time monitoring dashboard for the city of Heidenheim, Germany, built with Next.js and React.

## Overview

This dashboard provides city administrators and citizens with real-time insights into various urban infrastructure metrics, including traffic flow, environmental data, and smart city services.

## Features

- **Real-Time Monitoring** *(Currently using mock data - no API connected)*
  - Bike box occupancy tracking (Fahrradboxen)
  - Traffic flow counting (Verkehrszählung)
  - Environmental sensor data (temperature, air quality)
  - River water level monitoring (Pegelstand Brenz)
  - Municipal waste bin status alerts

- **User Interface**
  - Responsive design for desktop and mobile
  - Dark/light theme support
  - Real-time data updates with trend indicators
  - Interactive data visualizations
  - German language interface

**Note**: This is currently a frontend-only implementation showcasing the dashboard UI with mock data. The backend API integration is pending.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 15.2.4
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: 
  - Tailwind CSS
  - Shadcn/ui components
  - Radix UI primitives
- **Data Visualization**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd heidenheim
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Main dashboard route
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page (redirects to dashboard)
├── components/
│   ├── kokonutui/         # Custom dashboard components
│   │   ├── dashboard.tsx
│   │   ├── smart-city-metrics.tsx
│   │   ├── traffic-monitoring.tsx
│   │   └── environmental-data.tsx
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

MIT

## Contact

Just open a issue