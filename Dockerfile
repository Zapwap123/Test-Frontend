# frontend-angular/Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm install -g @angular/cli && npm install && ng build

CMD ["ng", "serve", "--host", "0.0.0.0"]
