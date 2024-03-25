
# Project Management App

## Overview

Welcome to the Project Management App, a fullstack custom themed application using ReactJS, PostgreSQL, and NestJS. Users are able to create, edit, and delete projects complete with user stories, features, and tasks.

Tasks are organized in a calendar view, and this app integrates with Google Calendar. Productivity trends are tracked using data graphing, and secure account creation and authentication completes this fullstack application.

## Implementation

### Tech Stack

#### Client

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)

#### Server

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Node](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)


### Features

- Create, Read, Update, and Delete Tasks
- Customizable Themes
- Prioritize and categorize Tasks
- Secure Authentication and Authorization
- Calendar and data visualization


### Prerequisites

Ensure npm is installed.

### Local Installation

1.Create a new database in PostgreSQL for this project using either SQL commands in the terminal or using the pgAdmin GUI

For instructions on how to install pgAdmin [click here](https://www.pgadmin.org/download/)

2.Clone the Project Management App repository to your local machine:

```bash
  git clone https://github.com/GillianTrethewey/Project-Management-App.git
```

3.To install dependencies, navigate to each root directory (api and frontend) in your terminal:

```bash
  npm install
```

4.Please see the 'Environment Variables' section before running this command.
Navigate to the api root.

```bash
  npm run start:dev
  nest start --watch
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the 'backend' directory

`DB_HOST=`

`DB_PASSWORD=`

`DB_USERNAME=`

`DB_NAME=`

`DB_PORT=`

`JWT_SECRET=` (A 'password' that will be used to encrypt the JWT)

`EMAIL_USER=` (Gmail address that will be used to send verification emails)

`EMAIL_PASS=` (App password for the email address, for instructions on creating an app password in Gmail [click here](https://support.google.com/mail/answer/185833?hl=en))