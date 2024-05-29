<h1 align="center">Blockchain Calculator</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/ptrvsrg/military-district-frontend?style=flat&color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/ptrvsrg/military-district-frontend?style=flat&color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/ptrvsrg/military-district-frontend?style=flat&color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/ptrvsrg/military-district-frontend?style=flat&color=56BEB8" />
</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="https://github.com/ptrvsrg" target="_blank">Author</a>
</p>

<br>

## :dart: About

WEB application that will provide the functionality
calculator, but calculations must be performed on Ethereum network nodes.

## :rocket: Technologies

Front-end:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)

Back-end:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Web3.js](https://web3js.org/)

Blockchain: 

- [Solidity](https://soliditylang.org/)
- [Sepolia TestNet](https://sepolia.etherscan.io/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/) installed.

## :checkered_flag: Starting

1. Clone repository

```bash
  git clone https://github.com/ptrvsrg/blockchain-calculator
```

2. Launch server

```bash
  cd server

  # Create env file
  make env

  # Initialize environment variables
  nano .env

  # Start server
  make start
```

3. Launch client in development mode

```bash
  cd client

  # Create env file
  make env

  # Initialize environment variables
  nano .env

  # Start development server
  make dev
```

&#xa0;

<a href="#top">Back to top</a>
