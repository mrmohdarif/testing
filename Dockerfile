# Use an official Node.js runtime as a parent image
FROM node:22

# Set working directory inside the container
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Command to run the application
CMD [ "node", "app.js" ]
