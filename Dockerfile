# Utilise une image officielle Node.js comme image de base
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install --production

# Copier le reste du code source
COPY . .

# Compiler TypeScript (optionnel si vous utilisez ts-node en prod)
# RUN npm run build

# Exposer le port utilisé par l'application
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "run", "start"]
