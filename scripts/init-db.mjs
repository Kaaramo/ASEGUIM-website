import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

await sql`
  CREATE TABLE IF NOT EXISTS adhesions (
    id SERIAL PRIMARY KEY,
    prenom TEXT NOT NULL,
    nom TEXT NOT NULL,
    email TEXT NOT NULL,
    passeport TEXT,
    statut TEXT,
    ecole TEXT,
    filiere TEXT,
    promotion TEXT,
    ville TEXT,
    contact_nom TEXT,
    contact_tel TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )
`;

await sql`
  CREATE TABLE IF NOT EXISTS partenariats (
    id SERIAL PRIMARY KEY,
    entreprise TEXT NOT NULL,
    telephone TEXT,
    email TEXT NOT NULL,
    vision TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )
`;

await sql`
  CREATE TABLE IF NOT EXISTS dons (
    id SERIAL PRIMARY KEY,
    nom_complet TEXT NOT NULL,
    email TEXT NOT NULL,
    montant NUMERIC NOT NULL,
    whatsapp TEXT,
    message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )
`;

console.log("Tables créées : adhesions, partenariats, dons");
