# AI Customer Support

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Directory Structure](#directory-structure)
- [Technologies Used](#technologies-used)
- [Project Structure](#Project-Structure)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)

## Overview
AI Customer Support is a Vue.js application designed to provide intelligent customer support services. This project leverages modern web technologies to create an interactive and responsive user interface for customer interactions.

## Features
- Vue.js 3 with Composition API
- Vue Router for navigation
- Pinia for state management
- Axios for API requests
- Leaflet for interactive maps
- TypeScript support
- Tailwind CSS for styling
- Responsive design
- Custom components (ChatWidget, CustomButton, NavigationMenu)
- Global and component-specific styling

- **Interactive Chat Interface:** Users can interact with an AI chatbot for support and information.
- **Platform Integration:** Supports integration with various platforms like WordPress, Instagram, WhatsApp, and more.
- **Dynamic Navigation:** A responsive navigation menu with hover effects and submenus.
- **Customizable Components:** Includes reusable components like buttons, icons, and chat elements.
- **Scroll Animations:** Elements are revealed with smooth animations as users scroll through the page.
- **Responsive Design:** Ensures a consistent experience across different devices and screen sizes.


## Directory Structure

```
project/
│
├── public/
│   └── (static assets like images and videos)
│
├── src/
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatInput.vue
│   │   │   ├── ChatMessages.vue
│   │   │   └── ServiceButton.vue
│   │   ├── icons/
│   │   │   └── PlatformIcons.vue
│   │   ├── navigation/
│   │   │   ├── HoverMenu.vue
│   │   │   └── NavigationMenu.vue
│   │   ├── BreathingBackgrounds.vue
│   │   ├── ChatWidget.vue
│   │   ├── CustomButton.vue
│   │   ├── Footer.vue
│   │   ├── FormSection.vue
│   │   ├── LiveChatDemo.vue
│   │   ├── NavigationMenu.vue
│   │   ├── PlatformList.vue
│   │   ├── ScrollingPlatformIcons.vue
│   │   └── ScrollReveal.vue
│   │
│   ├── views/
│   │   ├── About.vue
│   │   ├── AuthContainer.vue
│   │   ├── Contact.vue
│   │   ├── Home.vue
│   │   ├── Interaction.vue
│   │   ├── Pricing.vue
│   │   ├── Resources.vue
│   │
│   ├── App.vue
│   ├── global_styles.css
│   ├── index.html
│   ├── main.ts
│   ├── style.css
│
├── .gitignore
├── angular.json
├── index.html
├── tailwind.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```


## Technologies Used
- **Vue.js:** The core framework for building the application.
- **TypeScript:** Provides type safety and improved development experience.
- **Vue Router:** Manages navigation and routing within the application.
- **Pinia:** State management library for handling global state.
- **Axios:** HTTP client for making API requests.
- **Leaflet:** Used for interactive maps and geolocation features.
- **FontAwesome:** Icon library for displaying platform-specific icons.
- **Tailwind CSS:** Utility-first CSS framework for styling the application.
- **Vite:** Build tool for fast development and optimized production builds.


## Project Structure

- **src/components:** Contains reusable Vue components for chat, navigation, and more.
- **src/views:** Includes different views/pages like Home, About, Contact, and Pricing.
- **public:** Holds static assets like images and videos.
- **index.html:** The main HTML file setting up the Vue app.
- **main.ts:** Initializes the Vue app and imports global dependencies.
- **global_styles.css & styles.css:** CSS files for styling the application.
- **tailwind.config.js:** Configuration for Tailwind CSS.
- **package.json:** Contains project metadata, scripts, and dependencies.
- **vite.config.ts:** Configuration for Vite.


## Getting Started
To get started with this project, follow these steps:

1. Ensure you have Node.js installed on your system (version 14.x or later recommended).
2. Clone this repository to your local machine:

```bash
# Clone the repository
git clone https://github.com/tarunpa1998/chat-bot-service
```

3. Navigate to the project directory:

```bash
cd project
```

4. Install the project dependencies:

```bash
npm install
```

## Running the Project
To run the project in development mode:

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and visit `http://localhost:5173` (or the URL provided in the console).

The development server supports hot module replacement, so changes will be reflected immediately in the browser.

## Building for Production
To build the project for production:

1. Run the build command:

```bash
npm run build
```

2. The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).

