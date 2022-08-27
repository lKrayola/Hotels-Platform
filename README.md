<h1 align="center">
	Hotels Platform Challenge Monorepo
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lKrayola/Hotels-Platform">

  <a href="https://www.linkedin.com/in/kendallkant/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Kendall%20Kant-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lKrayola/Hotels-Platform">
  
  <a href="https://github.com/lKrayola/Hotels-Platform/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lKrayola/Hotels-Platform">
  </a>
  
  <a href="https://github.com/lKrayola/Hotels-Platform/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lKrayola/Hotels-Platform">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/lKrayola/Hotels-Platform">
</p>

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone the project and access the folder**


### Backend

```bash
# Starting from the project root folder, go to backend folder
$ cd backend
# Install the dependencies
$ yarn
```
### Frontend

```bash
# Starting from the project root folder, go to frontend folder
$ cd frontend
# Install the dependencies
$ yarn
```

Create a .env file with the following variables in the frontend folder

```sh
PUBLIC_API_URL =http://localhost:8080/
DB_PASSWORD=foobar
PUBLIC_SOME_KEY=123
```

### Run the platform

```bash
# Starting from the project root folder run
$ yarn develop:backend
# And the run
$ yarn develop:frontend
```
