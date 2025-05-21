# QuiZine – Backend Node.js + TypeORM

## Démarrage local

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Lancer le serveur :
   ```bash
   npm run start
   ```
   Le serveur écoute sur [http://localhost:3000](http://localhost:3000)

## Démarrage avec Docker Compose

1. Construire et lancer le conteneur :
   ```bash
   docker-compose up --build
   ```
   Cela démarre l'application Node.js sur le port 3000, avec hot-reload (volume monté).

## Variables d'environnement

- Les variables sont définies dans le `docker-compose.yml` et peuvent être surchargées par un fichier `.env` (à créer si besoin).
- La connexion à Supabase est déjà configurée dans `src/supabaseClient.ts`.

## Accès Supabase

- URL : https://supabase-quiz.kerboul.me
- Utilisateur : quizine
- Mot de passe : azerty
- Clé anonyme : voir `src/supabaseClient.ts`

## Tests de charge (k6)

- Le test de charge k6 est dans `k6_api_smoke.test.js`.
- Pour lancer manuellement :
  ```bash
  npm run start &
  k6 run k6_api_smoke.test.js
  ```

## Documentation API

- Swagger : [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

### Déploiement & CI/CD

- Le workflow GitHub Actions exécute les tests k6 avant le déploiement.
- Le déploiement n'est effectué que si les tests passent.
- Voir `.github/workflows/` pour la configuration CI/CD.

