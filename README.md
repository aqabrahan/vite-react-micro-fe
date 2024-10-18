# ViteJS+React Micro-Frontend Project

This project consists of a base application ("host") and multiple micro-frontends ("products", "user-dashboard").

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 20 or later)
- pnpm (we use pnpm as our package manager)

If you don't have pnpm installed, you can install it globally using npm:

```bash
npm install -g pnpm
```

## Installation

1. Open your terminal or command prompt.

2. Navigate to the project directory:

```bash
cd path/to/micro-frontend-project
```

3. Install the project dependencies:

```bash
pnpm install
```

This command will install all the necessary packages for the host and micro-frontends.

## Running the Project

To run the entire project (host and all micro-frontends):

1. In the project directory, execute:

```bash
pnpm run dev
```

This command starts the development servers for all applications.

2. Open your web browser and navigate to:
   - Host application: http://localhost:3000
   - Products micro-frontend: http://localhost:3001
   - User Dashboard micro-frontend: http://localhost:3002

To run specific parts of the project:

- Host only:

  ```bash
  pnpm run dev:host
  ```

- Products micro-frontend only:

  ```bash
  pnpm run dev:products
  ```

- User Dashboard micro-frontend only:
  ```bash
  pnpm run dev:user-dashboard
  ```

## Building the Project

To build all applications for production:

```bash
pnpm run build
```

To build specific applications:

- Host only:

  ```bash
  pnpm run build:host
  ```

- Products micro-frontend only:

  ```bash
  pnpm run build:products
  ```

- User Dashboard micro-frontend only:
  ```bash
  pnpm run build:user-dashboard
  ```

## Linting and Formatting

To run linters and formatters across all projects:

```bash
pnpm run lint
pnpm run format
```

## Troubleshooting

If you encounter any issues:

1. Ensure you're using Node.js version 20 or later.
2. Try deleting the `node_modules` folder and `pnpm-lock.yaml` file, then run `pnpm install` again.
3. If problems persist, please open an issue in the project repository.

## Support

For additional help or questions, please contact the project maintainers or refer to the project documentation.
