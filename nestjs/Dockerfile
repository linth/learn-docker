# Dockerfile
# Reference: https://medium.com/@sujan.dumaru.official/dockerizing-nestjs-application-c4b25139fe4c

# Base image, ex: node:18
FROM node:latest

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

# Copy the .env and .env.development files
# COPY .env .env.development ./

# Install app dependencies
RUN npm install

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
# CMD ["npm", "run", "start:prod"]
CMD ["node", "dist/main.js"]