# Base image
FROM amd64/node:latest 

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port the app runs on
EXPOSE 3333

# Start the app
CMD ["npm", "run", "dev"]
