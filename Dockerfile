FROM node:20
WORKDIR /var/app
COPY package.json package-lock.json /var/app/
RUN npm install

COPY . /var/app/

CMD ["npm", "run", "dev"]