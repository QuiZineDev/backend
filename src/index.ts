import express from "express"
import routes from "./routes"

import { supabase } from './supabaseClient';
import passport from "./middleware/passport";
import session from 'express-session';
/**
 * Fonction pour tester la connexion à Supabase
 */
async function testSupabaseConnection() {
  try {
    // Test de lecture d'une table publique (si disponible)
    const { data: tableData, error: tableError } = await supabase
      .from('public_test')
      .select('*')
      .limit(5);

    if (tableError) {
      console.error('🔴 Erreur de connexion ou de lecture de la table "public_test":', tableError.message);
      return;
    }

    console.log('✅ Connexion à Supabase réussie!');
    console.log('✅ Lecture de données réussie depuis "public_test":', tableData);
  } catch (error) {
    console.error('🔴 Erreur inattendue:', error);
  }
}

// Exécuter le test
testSupabaseConnection()
  .then(() => console.log('🏁 Test terminé'))
  .catch(err => console.error('🔴 Erreur globale:', err));

const app = express()
app.use(express.json())

// Optionally, make supabase available in req
app.use((req, _res, next) => {
  req.supabase = supabase // You may need to extend Express types for TypeScript
  next()
})

app.use(express.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes)

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})