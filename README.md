# Requirement
- Docker Compose Version 1.27+
- Node Js v12+
- Appium

# How to install :
`npm install`

# Dont forget to create env file
`cp env.sample .env`

# How To Run via docker : 
- `docker-compose up -d` for builds, (re)creates, starts, and attaches to containers for a service.
- `docker-compose start` for turn on the container
- `npm run test` for running all scenario
- `npm run test @tags` for running with specific feature
- `docker-compose down` stop and remove containers and networks (optionally images and volumes as well)
- `docker-compose stop` stop services
- open http://localhost:6080/ for emulator docker interface
