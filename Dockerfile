FROM node:20-alpine
WORKDIR /app

# Define build arguments for environment variables
ARG PUBLIC_APP_STORE_URL
ARG PUBLIC_GOOGLE_PLAY_URL

# Set them as environment variables during build
ENV PUBLIC_APP_STORE_URL=$PUBLIC_APP_STORE_URL
ENV PUBLIC_GOOGLE_PLAY_URL=$PUBLIC_GOOGLE_PLAY_URL

COPY package*.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

# Nginx stage
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
