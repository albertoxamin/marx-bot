FROM node:10-slim as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install --production
RUN npm install -g @zeit/ncc
RUN ncc build bot.js -o dist

FROM node:10-slim
ENV TZ=Europe/Rome
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist/index.js .
CMD ["node", "index.js"]
