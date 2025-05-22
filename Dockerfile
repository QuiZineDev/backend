FROM node:24-slim

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Exposer le port
EXPOSE 3000

# Démarrer l'application avec npx pour s'assurer que ts-node est trouvé
CMD ["npx", "ts-node", "src/index.ts"]
