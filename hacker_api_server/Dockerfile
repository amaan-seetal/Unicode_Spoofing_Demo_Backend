# Get Node image from Docker Hub :
FROM node:16-slim

# Set the Working Directory :
WORKDIR /usr/app

# Copy only package.json file :
COPY package*.json ./

# Install node dependencies from .json file :
RUN npm install

# Copy rest of the code to container
COPY . .

#Define port to use :
EXPOSE 4600

# Run the API indev mode :
CMD ["npm", "start"]