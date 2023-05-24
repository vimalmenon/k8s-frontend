FROM node:18-slim

WORKDIR App

COPY pages pages
COPY src src
COPY public public
COPY pages pages
COPY package.json package.json
COPY next.config.js next.config.js
COPY tsconfig.json tsconfig.json

ENV NEXT_PUBLIC_APP_NAME=None \
    NEXT_PUBLIC_NODE_NAME=None \
    NEXT_PUBLIC_POD_NAME=None \
    NEXT_PUBLIC_POD_NAMESPACE=None \
    NEXT_PUBLIC_POD_IP=None \
    NEXT_PUBLIC_APP_VERSION=None \
    NEXT_PUBLIC_API=None

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]