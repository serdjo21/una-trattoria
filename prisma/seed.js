const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const items = [
  { name: 'Margherita', price: 890, description: 'tomato sauce, mozzarella, basil', category: 'Pizza Classics' },
  { name: 'Marinara', price: 790, description: 'tomato sauce, basil, garlic, pepper, olive oil', category: 'Pizza Classics' },
  { name: 'Bolognese', price: 990, description: 'beef ragout in tomato sauce, grana padano', category: 'Pasta' },
  { name: 'Carbonara', price: 990, description: 'bacon, eggs, grana padano', category: 'Pasta' },
  { name: 'Tiramisu', price: 650, description: 'classic tiramisu', category: 'Desserts' },
  { name: 'Una', price: 1290, description: "mixed green salad, pomegranate, green apple, walnuts, raisins, olive oil, cherry tomatoes, goat cheese", category: 'Salads' },
  { name: 'Calzone Prosciutto Cotto', price: 990, description: 'tomato sauce, mozzarella, mushrooms, prosciutto cotto', category: 'Breakfast' },
  { name: 'Fried Mozzarella Cheese', price: 890, description: 'fried mozzarella', category: 'Starters' },
];

async function main() {
  console.log('Seeding', items.length, 'menu items...');
  for (const it of items) {
    await prisma.menuItem.upsert({
      where: { name: it.name },
      update: it,
      create: it,
    });
  }
  console.log('Seed finished');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
