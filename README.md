<h1 align="center">
	Hotels Platform Challenge Monorepo
</h1>



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
