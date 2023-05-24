FROM node:18-slim

WORKDIR App

COPY pages pages
COPY src src
COPY styles styles
COPY package.json package.json
COPY next.config.js next.config.js

ENV NEXT_PUBLIC_APP_NAME=None \
    NEXT_PUBLIC_NODE_NAME=None \
    NEXT_PUBLIC_POD_NAME=None \
    NEXT_PUBLIC_POD_NAMESPACE=None \
    NEXT_PUBLIC_POD_IP=None

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]