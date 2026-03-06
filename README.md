🏠 Home Automation & Infrastructure
This repository contains my personal Home Assistant and Music Assistant configuration. It is managed via Docker Compose and follows an Infrastructure-as-Code (IaC) approach to maintain a scalable and reproducible home automation environment.

🏗️ Architecture
The project is built around two primary containers managed by a central docker-compose.yml file.

Home Assistant: The central brain for device state, automations, and frontend dashboard management.

Music Assistant: An abstraction layer managing multi-room audio and media library synchronization across different providers (Spotify, Local NAS, DLNA).

🚀 Installation & Setup
1. Clone the Repository
Bash
git clone https://github.com/nikesh86-2/Home-Music-assistant_setup.git
cd Home-Music-assistant_setup
2. Environment Configuration
This project uses environment variables and a secrets file to keep sensitive data secure.

System Variables: Copy .env.example to .env and update PUID, PGID, and MUSIC_PATH.

Bash
cp .env.example .env
Home Assistant Secrets: Create config/secrets.yaml to store your specific integration credentials.

3. Deploy
Bash
docker compose up -d

💡 Key Technical Features
Modular Configuration
Instead of a monolithic configuration.yaml, this setup utilizes modular includes to keep the codebase clean. I separate concerns into logical files:

masterlights.yaml & switches.yaml: Physical device entity management.

templates.yaml: Custom Jinja2 logic for virtual sensors.

scripts.yaml & automations.yaml: Business logic for home behavior.

Custom Frontend (Lovelace)
The frontend is managed via YAML mode rather than the UI, allowing for full version control of layouts.

Custom Cards: Advanced UI components using Bubble-Card, Mushroom, and Mini-graph-card.

Resource Management: Optimized loading for high-performance dashboard rendering.

🛡️ Security & Networking
Networking Strategy: Host vs. Bridge
To ensure seamless integration with the local IoT ecosystem, this stack utilizes Docker Host Networking.

Why Host Mode?

mDNS & Discovery: Essential for discovering Google Cast, DLNA, and Tapo devices that rely on multicast traffic.

Low Latency Audio: Music Assistant requires direct access to the network stack to prevent jitter across multi-room audio groups.

Permissions: Security is maintained by running container processes as a non-root user (PUID/PGID: 1002).

📂 Project Structure
Plaintext
.
├── config/                 # Home Assistant core configuration
│   ├── custom_components/  # HACS and custom integrations
│   ├── dashboards/         # Version-controlled YAML UI layouts
│   ├── configuration.yaml  # Main entry point
│   └── secrets.yaml        # [GIT IGNORED] Sensitive credentials
├── ma-config/              # Music Assistant persistent data
├── .env                    # [GIT IGNORED] System environment variables
└── docker-compose.yml      # Service orchestration
