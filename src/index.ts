// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"


// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))

// setup express

import express from "express"
import routes from "./routes"

import { supabase } from './supabaseClient';

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
app.use("/api", routes)

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})