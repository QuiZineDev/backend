# Supabase

Informations nécessaires pour se connecter à Supabase :
- URL : `https://supabase-quiz.kerboul.me`
- Clé anonyme : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE`

Accès au dashboard/base de données de Supabase :
- URL : `https://supabase-quiz.kerboul.me`
- Identifiants :
  - Utilisateur : `quizine`
  - Mot de passe : `azerty`

Exemple de code pour intégrer Supabase dans un projet Node.js avec TypeORM :
```
// supabaseClient.ts (si tu utilises TypeScript)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase-quiz.kerboul.me';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```
