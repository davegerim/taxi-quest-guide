🚕 Feremata – Smart Taxi Hub Finder

Find the nearest taxi pickup hub instantly in Addis Ababa

Live Demo
 •
Report Bug
 •
Request Feature


📖 About Feremata

Feremata is a smart mobility tool designed to simplify transportation in Addis Ababa.
It helps commuters find the nearest taxi hub, check prices, get walking directions, and explore interactive city routes—all in one place.

It solves real pain points in the city’s shared taxi system by offering:

🗺️ Instant taxi hub discovery

💰 Clear pricing (10–20 birr)

🚶 Turn-by-turn walking directions

🎤 Voice-powered route search

📱 Offline access for hub info

🌍 Interactive maps powered by Mapbox

✨ Key Features
🔍 Smart Route Search

Search by “From” and “To”

Intelligent route matching

Voice input (Amharic + English)

Real-time results with pricing

🗺️ Interactive Maps

Mapbox GL integration

User GPS tracking

Walking route visualization

💵 Transparent Pricing

Fixed fares per route

No hidden or surge fees

Price comparison options

🚶 Walking Directions

Step-by-step instructions

Walking time + distance

Open directly in Google Maps

🎤 Voice Input

Browser-based speech recognition

Real-time transcription

Accessible for all users

🛠️ Tech Stack
Frontend

React 18 + TypeScript

Vite

Tailwind CSS

shadcn/ui & Radix UI

Lucide Icons

Maps & Location

Mapbox GL

Geolocation API

State & Data

TanStack Query

React Router

Zod

date-fns

Other

Web Speech API

Sonner notifications

🚀 Getting Started
Prerequisites

Node.js 18+

npm or bun

Modern browser (Chrome recommended)

Installation
git clone https://github.com/yourusername/feremata.git
cd feremata
npm install
npm run dev


Open:

http://localhost:5173

Production Build
npm run build
npm run preview

🗂️ Project Structure
feremata/
├── public/
│   ├── lovable-uploads/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── SearchSection.tsx
│   │   ├── MapComponent.tsx
│   │   ├── PriceCard.tsx
│   │   ├── VoiceInput.tsx
│   │   └── WalkingDirections.tsx
│   ├── data/routes.ts
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── tailwind.config.ts

🗺️ Available Routes (16)

Examples:

Route	Price	Walking Time	Popular
Lafto → Mexico	10 birr	2 min	⭐
Ledata → Mexico	12 birr	3 min	
Bole → Piassa	15 birr	3 min	
Piassa → Merkato	12 birr	2 min	
Bole → Merkato	20 birr	3 min	

Coverage Areas: Lafto, Ledata, Bole, Mexico, Piassa, Merkato

🤝 Contributing

We welcome community contributions!

Ways to help:

Report bugs

Suggest features

Improve route data

Add new hubs

Improve UI/UX

Write documentation

Contribution Steps
git checkout -b feature/my-feature
git commit -m "Add new feature"
git push origin feature/my-feature


Open a Pull Request 🚀

📄 License

This project is licensed under the MIT License.
See the LICENSE file for details.

👥 Team

Built with ❤️ to improve urban mobility in Addis Ababa.

Project Lead: Your Name

Contributors: See GitHub contributors list

🗺️ Roadmap
v1.0 (Current)

✅ Route search
✅ Transparent pricing
✅ Voice input
✅ Walking directions
✅ Interactive maps

v2.0 (Planned)

🔄 Real-time taxi availability
🔄 User accounts & favorites
🔄 Offline map caching
🔄 Multi-language support
🔄 Mobile app (iOS/Android)

v3.0 (Future)

🔮 AI route recommendations
🔮 Ride-hailing integrations
🔮 Community route updates
🔮 Payment integration
🔮 City-wide expansion

📞 Contact

Website: feremata.com

Email: support@feremata.com

Twitter: @feremata

Issues: GitHub Issues Page
