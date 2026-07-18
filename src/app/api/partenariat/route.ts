import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { entreprise, tel, email, vision } = body;

  if (!entreprise || !email) {
    return NextResponse.json({ ok: false, error: "Champs obligatoires manquants." }, { status: 400 });
  }

  await sql`
    INSERT INTO partenariats (entreprise, telephone, email, vision)
    VALUES (${entreprise}, ${tel ?? null}, ${email}, ${vision ?? null})
  `;

  return NextResponse.json({ ok: true });
}
