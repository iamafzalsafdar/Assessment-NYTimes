# NY Times Most Popular Articles

A React application that displays the most popular articles from the New York Times API. The app features a master/detail view where users can browse a list of articles and click on them to view more details.

## Features

- Displays a list of the most popular articles from the NY Times API
- Allows filtering articles by time period (1, 7, or 30 days)
- Detailed view for each article with additional information
- Responsive design that works on mobile and desktop
- Server-side rendering for improved performance and SEO
- Error handling and loading states

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible UI primitives
- [Jest](https://jestjs.io/) - Unit testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Component testing
- [Cypress](https://www.cypress.io/) - End-to-end testing

## Prerequisites

Before you begin, ensure you have:

- Node.js 18.17.0 or later
- A NY Times API key (get one at [https://developer.nytimes.com/get-started](https://developer.nytimes.com/get-started))

## Installation

1. Clone the repository:


git clone https://github.com/yourusername/ny-times-articles.git
cd ny-times-articles


2. Install dependencies:


npm install
# or
yarn install
# or
pnpm install


3. Create a `.env.local` file in the root directory and add your NY Times API key:


NY_TIMES_API_KEY=your_api_key_here


## Running the Application

To run the development server:


npm run dev
# or
yarn dev
# or
pnpm dev


Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

To create a production build:


npm run build
# or
yarn build
# or
pnpm build


To start the production server:


npm start
# or
yarn start
# or
pnpm start


## Running Tests

### Unit Tests

Run Jest unit tests:


npm test
# or
yarn test
# or
pnpm test


Generate test coverage report:


npm run test:coverage
# or
yarn test:coverage
# or
pnpm test:coverage


### End-to-End Tests

Run Cypress tests:


npm run cypress
# or
yarn cypress
# or
pnpm cypress


## Build and Test Scripts

For a comprehensive list of all available scripts for building, testing, and analyzing the codebase, see [SCRIPTS.md](SCRIPTS.md).

These scripts can be used for:
- Building the project from the command line
- Running static code analysis (linting)
- Running unit tests with code coverage
- Validating the codebase before commits or in CI environments

## Project Structure


ny-times-articles/
├── app/                  # Next.js App Router
│   ├── articles/         # Article detail pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components (minimal set)
│   └── ...               # Application components
├── cypress/              # Cypress tests
├── lib/                  # Utility functions and types
├── public/               # Static assets
├── __tests__/            # Jest tests
├── .env.local            # Environment variables (create this)
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── README.md             # Project documentation
└── tsconfig.json         # TypeScript configuration


## Architecture

This application follows modern React best practices:

- **Component Structure**: Uses a mix of server and client components
- **Data Fetching**: Server-side data fetching with Next.js App Router
- **State Management**: React's built-in state management with hooks
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Testing**: Unit tests for components and functions, E2E tests for user flows

## License

This project is licensed under the MIT License - see the LICENSE file for details.
