FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Innstall dependencies
RUN npm install

# Copy rest of the application code
COPY . .

EXPOSE 3000

ENTRYPOINT npm start