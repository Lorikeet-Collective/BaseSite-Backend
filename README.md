<!-- Header -->

<div align="center">
  <img src="images/logo.png" alt="Logo" width="80" height="80">
  <h3>Lorikeet Collective Backend</h3>
  <span>v0.0.3 | <a href="https://github.com/Lorikeet-Collective/BaseSite-Backend/blob/dev/CHANGELOG.md">Changelog</a></span>
</div>

<!-- Table of Contents -->

## Table-of-Contents

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running The Application](#running)
- [Testing](#testing)
- [Linting](#linting)
- [License](#license)
- [Notes](#notes)

<!-- About -->

## About The Project

This is the official Lorikeet Collective main website backend.

<!-- Tech List -->

## Built With

<div align="center">

#### Languages

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JSON](https://img.shields.io/badge/JSON-grey?style=for-the-badge&logo=json&logoColor=white)](https://www.json.org/json-en.html)

#### Frameworks

[![NodeJs](https://img.shields.io/badge/NodeJs-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
[![ExpressJs](https://img.shields.io/badge/ExpressJS-blue?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

#### Database

[![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

#### Test Tools

[![Mocha](https://img.shields.io/badge/mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white)](https://mochajs.org/)
[![Chai](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)](https://www.chaijs.com/)

#### Linter

[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

#### Tools

[![NPM](https://img.shields.io/badge/NPM-darkgreen?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Nodemon](https://img.shields.io/badge/nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)](https://www.npmjs.com/package/nodemon)
[![JWT](https://img.shields.io/badge/JWT-gray?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.is/)

#### Protocols

[![Security](https://img.shields.io/badge/security-purple?style=for-the-badge&logo=awssecretsmanager&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Security)

</div>

<!-- Prerequisites -->

## Prerequisites

- Follow the [Lorikeet Frontend](https://github.com/Lorikeet-Collective/BaseSite-Frontend) `README.md` file to get the associated frontend up and running.
- Make sure your `.env` variables are set properly to connect to the database.

> [!WARNING]
> If you have not received your `.env` variables, contact the Lead Engineer. The project will **_not_** work without them.

<!-- Installation -->

## Installation

_Use Node Package Manager in the install folder and run the following command to install dependencies:_

```sh
npm install
```

<!-- Running -->

## Running

The current available `NPM` scripts are:

- `dev` | run a dev server
- `build` | build the current server
- `start` | run a built server project
- `lint` | check for linting errors

To run any of the above commands use this format in terminal:

```sh
npm run {command}
```

> [!IMPORTANT]
> Replace `{command}` with desired NPM script name.

<!-- Testing -->

## Testing

> [!NOTE]
> This section is under construction and subject to change.

Use **_Mocha_** to run and write various tests for general application functionality and stability.

### Usage

```sh
todo
```

Use **_Chai_** to run and write various assertion tests.

### Usage

```sh
todo
```

## Linting

ESLint is used to verify code practices and syntax is being properly followed.

To use ESLint to check all files, run in project folder:

### Usage

```sh
npm run lint
```

<!-- License -->

## License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/Lorikeet-Collective/BaseSite-Backend?tab=MIT-1-ov-file) for more information.

## Notes

> [!WARNING]
>
> #### A pull-request will be <code style="color:red;">auto-denied</code> under the following:
>
> - Linting must be verified with **_zero_** errors.
> - All test cases must be passed with **_zero_** errors.
> - Documentation must be relevant and updated to any changes presented.
> - Comment any code and update old comments to reflect changes.

Git commits will be prefixed with one of the following. Commit messages are in past tense:

- `fix` | Fix / Patch
- `create` | New Feature or Add-on
- `delete` | Removal of Code
- `temp` | Temp Change or Work Around
- `change` | Code Edit / Modification
- `perf` | Performance Change for Slow Code
- `sec` | Security Update / Change
- `dev` | Add Service / Tool to Dev Environment
- `prod` | Add Service / Tool to Production Environment
