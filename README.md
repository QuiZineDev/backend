# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

# Ajout : instructions pour lancer avec Docker Compose

Pour lancer le projet avec Docker Compose :

```bash
docker-compose up --build
```

Cela va démarrer à la fois la base PostgreSQL et l'application Node.js avec TypeORM.

Les variables d'environnement sont déjà alignées entre le code et le docker-compose.

---

Pour accéder à la base de données PostgreSQL en local :
- Host : localhost
- Port : 5432
- User : test
- Password : test
- Database : test

---

Pour développer, modifiez le code localement : il sera monté dans le conteneur Node.js.
