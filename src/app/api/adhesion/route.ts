import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    prenom,
    nom,
    email,
    passeport,
    statut,
    ecole,
    filiere,
    promotion,
    ville,
    contactNom,
    contactTel,
  } = body;

  if (!prenom || !nom || !email) {
    return NextResponse.json({ ok: false, error: "Champs obligatoires manquants." }, { status: 400 });
  }

  await sql`
    INSERT INTO adhesions (prenom, nom, email, passeport, statut, ecole, filiere, promotion, ville, contact_nom, contact_tel)
    VALUES (${prenom}, ${nom}, ${email}, ${passeport ?? null}, ${statut ?? null}, ${ecole ?? null}, ${filiere ?? null}, ${promotion ?? null}, ${ville ?? null}, ${contactNom ?? null}, ${contactTel ?? null})
  `;

  return NextResponse.json({ ok: true });
}
