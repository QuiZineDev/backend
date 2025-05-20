import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL || "https://supabase-quiz.kerboul.me",
    ssl: true,
    synchronize: false, // Plus prudent avec Supabase de ne pas synchroniser automatiquement
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
