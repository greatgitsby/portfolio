# Stage 1: Build with Bun
FROM oven/bun:1.3.5-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source files
COPY . .

# Build and export static files
RUN bun run build

# Verify output directory exists
RUN test -d /app/out || (echo "ERROR: /app/out not found" && exit 1)

# Stage 2: Serve with nginx
FROM nginx:1.25-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy static files from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
