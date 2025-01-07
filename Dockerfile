FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./ 

RUN npm install -g pnpm

RUN pnpm install

COPY . .

ARG VITE_API_BASE_URL

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN pnpm run build

FROM nginx:stable-alpine AS server

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
