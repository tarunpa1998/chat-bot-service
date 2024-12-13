# AI Customer Support

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Directory Structure](#directory-structure)
- [Technologies Used](#technologies-used)
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
- Vue.js 3
- Vue Router
- Pinia
- Axios
- Leaflet
- TypeScript
- Tailwind CSS
- Vite

## Getting Started
To get started with this project, follow these steps:

1. Ensure you have Node.js installed on your system (version 14.x or later recommended).
2. Clone this repository to your local machine:

```bash
# Clone the repository
git clone https://github.com/your-repository-url.git
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

