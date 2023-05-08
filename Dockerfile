FROM node:16.14.0-alpine

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

EXPOSE 3001
# Set up a default command
CMD [ "sh", "-c", "npm run dev"]