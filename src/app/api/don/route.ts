import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { nom, email, montant, whatsapp, message } = body;

  if (!nom || !email || !montant) {
    return NextResponse.json({ ok: false, error: "Champs obligatoires manquants." }, { status: 400 });
  }

  await sql`
    INSERT INTO dons (nom_complet, email, montant, whatsapp, message)
    VALUES (${nom}, ${email}, ${montant}, ${whatsapp ?? null}, ${message ?? null})
  `;

  return NextResponse.json({ ok: true });
}
