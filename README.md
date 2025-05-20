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

Cela va démarrer l'application Node.js avec TypeORM configurée pour se connecter à Supabase.

Les variables d'environnement sont déjà alignées entre le code et le docker-compose.

---

## Supabase infos :

```
// supabaseClient.ts (si tu utilises TypeScript)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase-quiz.kerboul.me';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

user : quizine
password : azerty