FROM ikigaisoft/lb-mongo-base

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

ENV HOST 0.0.0.0
ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
