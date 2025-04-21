# Build and Test Scripts

This document outlines the available scripts for building, testing, and analyzing the NY Times Articles application.

## Available Scripts

You can run these scripts with npm, yarn, or pnpm:

### Development

\`\`\`bash

# Start the development server

npm run dev

# or

yarn dev

# or

pnpm dev
\`\`\`

### Building

\`\`\`bash

# Build the application for production

npm run build

# or

yarn build

# or

pnpm build

# Start the production server

npm start

# or

yarn start

# or

pnpm start
\`\`\`

### Linting and Formatting

\`\`\`bash

# Run ESLint to check for code issues

npm run lint

# or

yarn lint

# or

pnpm lint

# Run ESLint and automatically fix issues

npm run lint:fix

# or

yarn lint:fix

# or

pnpm lint:fix

# Format code with Prettier

npm run format

# or

yarn format

# or

pnpm format

# Check TypeScript types without emitting files

npm run check-types

# or

yarn check-types

# or

pnpm check-types
\`\`\`

### Testing

\`\`\`bash

# Run Jest tests

npm test

# or

yarn test

# or

pnpm test

# Run Jest tests in watch mode

npm run test:watch

# or

yarn test:watch

# or

pnpm test:watch

# Run Jest tests with coverage report

npm run test:coverage

# or

yarn test:coverage

# or

pnpm test:coverage
\`\`\`

### End-to-End Testing

\`\`\`bash

# Open Cypress for interactive testing

npm run cypress

# or

yarn cypress

# or

pnpm cypress

# Run Cypress tests headlessly

npm run cypress:headless

# or

yarn cypress:headless

# or

pnpm cypress:headless

# Start dev server and run Cypress tests

npm run e2e

# or

yarn e2e

# or

pnpm e2e

# Start dev server and run Cypress tests headlessly

npm run e2e:headless

# or

yarn e2e:headless

# or

pnpm e2e:headless
\`\`\`

### Validation

\`\`\`bash

# Run linting, type checking, and tests in parallel

npm run validate

# or

yarn validate

# or

pnpm validate
\`\`\`

## Continuous Integration

The `validate` script is particularly useful for CI environments as it runs linting, type checking, and tests with coverage in parallel.

## Git Hooks

This project uses Husky and lint-staged to run checks before commits:

- Pre-commit: Runs linting and formatting on staged files

To install the git hooks, run:

\`\`\`bash
npm run prepare

# or

yarn prepare

# or

pnpm prepare
\`\`\`

## Coverage Reports

After running `npm run test:coverage`, you can find:

- Text summary in the terminal output
- HTML report in the `coverage/lcov-report/index.html` file
- LCOV report for CI tools in `coverage/lcov.info`
  \`\`\`

Let's update the main README.md to include a reference to the scripts:

```typescriptreact file="README.md"
[v0-no-op-code-block-prefix]# NY Times Most Popular Articles

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
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Jest](https://jestjs.io/) - Unit testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Component testing
- [Cypress](https://www.cypress.io/) - End-to-end testing

## Prerequisites

Before you begin, ensure you have:

- Node.js 18.17.0 or later
- A NY Times API key (get one at [https://developer.nytimes.com/get-started](https://developer.nytimes.com/get-started))

## Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/ny-times-articles.git
cd ny-times-articles
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Create a `.env.local` file in the root directory and add your NY Times API key:

\`\`\`
NY_TIMES_API_KEY=your_api_key_here
\`\`\`

## Running the Application

To run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

To create a production build:

\`\`\`bash
npm run build
# or
yarn build
# or
pnpm build
\`\`\`

To start the production server:

\`\`\`bash
npm start
# or
yarn start
# or
pnpm start
\`\`\`

## Running Tests

### Unit Tests

Run Jest unit tests:

\`\`\`bash
npm test
# or
yarn test
# or
pnpm test
\`\`\`

Generate test coverage report:

\`\`\`bash
npm test -- --coverage
# or
yarn test --coverage
# or
pnpm test -- --coverage
\`\`\`

### End-to-End Tests

Run Cypress tests:

\`\`\`bash
npm run cypress
# or
yarn cypress
# or
pnpm cypress
\`\`\`

## Build and Test Scripts

For a comprehensive list of all available scripts for building, testing, and analyzing the codebase, see [SCRIPTS.md](SCRIPTS.md).

These scripts can be used for:
- Building the project from the command line
- Running static code analysis (linting)
- Running unit tests with code coverage
- Validating the codebase before commits or in CI environments

## Project Structure

\`\`\`
ny-times-articles/
├── app/                  # Next.js App Router
│   ├── articles/         # Article detail pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
├── cypress/              # Cypress tests
├── lib/                  # Utility functions and types
├── public/               # Static assets
├── __tests__/            # Jest tests
├── .env.local            # Environment variables (create this)
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── README.md             # Project documentation
└── tsconfig.json         # TypeScript configuration
\`\`\`

## Architecture

This application follows modern React best practices:

- **Component Structure**: Uses a mix of server and client components
- **Data Fetching**: Server-side data fetching with Next.js App Router
- **State Management**: React's built-in state management with hooks
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Testing**: Unit tests for components and functions, E2E tests for user flows

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```
