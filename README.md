# Greenspark task

## Description

**Frontend:**

I decided to use Vue with Vite. It's been a while since I worked with Vue
and I wanted to see how it's development is going. For this reason
I used the Composition API for all of the components.

I tried to keep the number of libraries used to the minimum. 
I wanted to avoid using any UI frameworks, but in the end, since I 
needed to use a tooltip, I went with Vuetify. Some of my components 
could be replaced with their Vuetify versions, but that wouldn't have 
been much fun. 

For state management I used Vue's Reactivity API. For a small task 
like this, I saw no reason to include any other state management library.

**Backend:**

Since you guys are using it, and I'm fairly familiar with it, I went 
with Nest.js. For the task it would've been sufficient to store the 
necessary data either in a file, or in memory, but since that's not 
very relevant to real-life scenarios, I used Postgres. 

As for code design: I decided to not use the default TypeORM repositories 
directly, in order to make WidgetsService more unit test friendly.

I wanted to keep the update endpoint fairly minimalistic. It only accepts 
the modifiable properties, but there can be more than one. Also I wanted 
to ensure, that the widgets are only updateable, and the user can't
create a new one.

## Setup

``

`cp ./greenspark-frontend/.env.example ./greenspark-frontend/.env`

`cp ./greenspark-backend/.env.example ./greenspark-backend/.env`

**Frontend**

`cd greenspark-frontend`

`npm install`

`npm run dev`

**Backend**

Install docker

`cd greenspark-backend`

`npm install`

`docker compose up -d`

`npm run migration:dev:run`

`npm run load-mock-data`

`npm run start`

**To run tests**

unit: 
`npm run test`

e2e:
`npm run test:e2e`
