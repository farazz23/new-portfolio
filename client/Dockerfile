# ------- Install Dependency -------
FROM node:22-slim AS deps
WORKDIR /app

COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Using npm ci when package-lock.json exists, otherwise fall back
RUN \
  if [ -f package-lock.json ]; then \
  npm ci --prefer-offline --no-audit --no-fund; \
  elif [ -f yarn.lock ]; then \
  yarn install --frozen-locakfile; \
  elif [ -f pnpm-lock.yaml ]; then \
  npm install -g pnpm && pnpm install --frozen-lockfile; \
  else \
  echo "No lock file found" && exit 1; \
  fi



# ------------ Builder ------------
FROM node:22-slim AS builder
WORKDIR /app


# copy only dependencies (NO dev deps)
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build




# ------- Production Image -------
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Only standalone output — extremely small
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["node", "server"]






