import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const name = searchParams.get('name');
//   const category = searchParams.get('category');
//   const ans1 = searchParams.get('ans1');
//   const ans2 = searchParams.get('ans2');
//   const ans3 = searchParams.get('ans3');
 
  try {
    // if (!name || !category) throw new Error('All fields are required');
    await sql`INSERT INTO Food (Name, Category, Ingredients, Image) VALUES ('Burger', 'Fastfood',  ARRAY['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],  '/image');`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const answers = await sql`SELECT * FROM Food;`;
  return NextResponse.json({ answers }, { status: 200 });
}
