# API - URLs Shortener

## Summary:

- [Overview](#overview)
    - [About](#about)
    - [Features](#features)
    - [Used Techs](#used-techs)
- [How To Use](#how-to-use)
    - [Getting Started](#getting-started)
    - [How to Install](#how-to-install)
    - [Configuring Database and Env Variables](#configuring-database-and-env-variables)
- [Authors](#authors)

<h4 align="center">🌟 URL Shortener API 🔗 concluded - open to updates 🌟</h4>

## Overview:

### About:

This project is based on an API for shortening URLs, where the user provides a pre-existing URL and then the application 
returns a shorter URL that redirects to the original URL.

Example:

```js
    fetch('http://localhost:3333/', {
    method: 'POST', 
    body: JSON.stringify({
        "url": "https://github.com/ricardokanashiro"
    }),
    headers:{
        "Content-Type" : "application/json",
    }}
)
    .then(data => res = data.json())
    .catch(console.log)

    // Response: { "shortUrl": "http://localhost:3333/_3Ayh78v" }
```

### Features:

- ✅ Users should be able to post a full URL and receive a short URL
- ✅ Users should be able to get the same short URL if the full URL is the same
- ✅ Short URLs should expires 1 month after it be created
- ✅ Users should be redirect to the original URL if they get the short URL

### Used Techs:

<a href="https://nodejs.org/docs/latest/api/"><img src="https://img.shields.io/badge/Node.js-000?style=for-the-badge&logo=node.js&logoColor=43853D" /></a>
&nbsp;
<a href="https://fastify.dev/docs/latest/"><img src="https://img.shields.io/badge/Fastify-000?style=for-the-badge&logo=fastify&logoColor=white" /></a>
&nbsp;
<a href="https://dev.mysql.com/doc/"><img src="https://img.shields.io/badge/PostgreSQL-000?style=for-the-badge&logo=postgresql&logoColor=316192" /></a>

- <b>Node</b>: javascript runtime based on Chrome V8 Engine, used to run javascript off browser
- <b>Fastify</b>: micro nodejs framework used to handle http requests and more easier and faster
- <b>PostgreSQL</b>: a open-source, free and powerful sql database

## How to Use:

### Getting Started:

To run this project in your device you should need some softwares/programs installed in your system:

- <b>Node</b>: is a javascript runtime built on Chrome's V8 engine, used to run javascript as a server in this case. <a href="https://nodejs.org/en/download">Download</a>
- <b>Npm</b>: is a package manager distributed with Node.js, so if you already have NodeJs in your system, you automatically have npm. <a href="https://nodejs.org/en/download">Download</a>
- <b>Yarn</b>: is a package manager provided by Meta, and it's another solution as npm. <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable">Download</a>

⚠️ Tip: once we have package json, you can install all dependencies using npm or yarn, no need to install both.

### How to Install

To run this API locally follow the following steps:

- This commands will download the project in your device and access his file:

```bash
    git clone https://github.com/ricardokanashiro/UrlShortenerAPI.git
    git cd UrlShortenerAPI
```

- This commands will install all the project dependencies and run the server:

```bash
    npm install
    npm server
```

or 

```bash
    yarn install
    yarn server
```

### Configuring Database and Env Variables

- This project uses a Postgres database provided by <a href="https://neon.tech/">Neon</a>, that is a service that allows you to 
instantly branch your Postgres database to support modern development workflows. So to run this application, you can create a serverless postgres database
or made one locally.

- You also need to create a .env file with some enviroment variables:

```.env
    PGHOST='****'
    PGDATABASE='****'
    PGUSER='****'
    PGPASSWORD='****'
    ENDPOINT_ID='****'

    ENABLED_CORS='****'
```

⚠️ Tip: PGHOST, PGDATABASE, PGUSER, PGPASSWORD and ENDPOINT_ID are variables used to connect with postgres database. 
And ENABLED_CORS is a string that contains all URLs, that must be splitted by ';', that are allowed to access the API

## Authors:

- <b>Ricardo Kanashiro</b>