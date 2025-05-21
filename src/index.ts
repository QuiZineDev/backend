import express from "express"
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import routes from "./routes"
import { setupSwagger } from './swagger';

import { supabase } from './supabaseClient';
import passport from "./middleware/passport";
import session from 'express-session';
import http from "http"
import { Server } from "socket.io"
import { setupGameSocket } from "./sockets/gameSocket";
import { initIO } from "./io"


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
// testSupabaseConnection()
//   .then(() => console.log('🏁 Test terminé'))
//   .catch(err => console.error('🔴 Erreur globale:', err));

const swaggerOptions = require("../swaggerOptions.js")
const swaggerSpec = swaggerJsdoc(swaggerOptions)

const app = express()
const server = http.createServer(app)
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// })
const io = initIO(server)

console.log("avant setup")
setupGameSocket(io)
console.log("après setup")

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

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use("/api", routes)

setupSwagger(app);

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
  console.log("Swagger docs available at http://localhost:3000/api-docs")
  console.log("Socket.io game namespace available at /game")
})