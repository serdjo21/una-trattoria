"use client";

import { Section } from "@/components/MenuComponents";

export default function MenuPage() {
  return (

    <div className="min-h-screen bg-background text-foreground font-body">
      <div className="max-w-[750px] mx-auto px-6 py-10">
        <br /><br />
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-menu-gold text-[48px] font-black uppercase leading-none tracking-wider">
            UNA<br />TRATTORIA
          </h1>
          <p className="text-menu-gray text-[9px] mt-2 uppercase tracking-[0.3em]">PIZZA, LINI, TRATTORIA, PASTA</p>
        </div>

        {/* PASTA */}
        <Section label="PASTA" sub={["SPAGHETTI", "TAGLIATELLE", "PENNE"]} items={[
          { name: "Con Pomodorini", price: 790, description: "tomato sauce, basil, grana padano" },
          { name: "Putanesca", price: 990, badges: ["new"], description: "tomatoes, olives, capers, anchovies" },
          { name: "Chicken Curry", price: 1190, badges: ["new"], description: "chicken, curry sauce, sour cream" },
          { name: "Bolognese", price: 990, description: "beef ragout in tomato sauce, grana padano" },
          { name: "Carbonara", price: 990, description: "bacon, eggs, grana padano" },
          { name: "Zucchini & Salmon", price: 1490, badges: ["new"], description: "smoked salmon, zucchini, light cream, grana padano" },
          { name: "Chef's", price: 1490, badges: ["new"], description: "pesto genovese, ricotta, mascarpone, cherry tomato, grana padano, basil" },
          { name: "Gamberi", price: 1390, badges: ["new"], description: "cherry tomatoes, white wine sauce, gamberi, grana padano" },
        ]} />

        {/* BAKED PASTA */}
        <Section label="Baked Pasta" sub={["PACCHERI", "LINGVINI"]} items={[
          { name: '"Kulen"', price: 1490, badges: ["domestic"], description: "Serbian spicy sausage, pepper, sour cream, light cream, grana padano" },
          { name: "Cheesy Cotto", price: 1490, description: "prosciutto cotto, mushrooms, mozzarella cheese, ricotta cheese, grana padano" },
          { name: "Cheesy Crudo", price: 1590, description: "prosciutto crudo, cherry tomatoes, smoked cheese, grana padano" },
          { name: "Spicy 'Nduja", price: 1690, description: "beef ragout with Calabrian sausage, grana padano" },
        ]} />

        {/* GNOCCHI */}
        <Section label="Gnocchi" items={[
          { name: "Sorentina", price: 1190, description: "tomato sauce, mozzarella, grana padano, basil, oregano" },
          { name: "Tartufata", price: 1490, description: "truffle cream, grana padano" },
          { name: "Quattro Formaggi", price: 1490, description: "mozzarella, blue cheese, ricotta, grana padano" },
        ]} />

        {/* CHEF'S SPECIALTIES */}
        <Section label="Chef's Specialties" items={[
          { name: "Lasagne", price: 1490, description: "beef ragout, bechamel sauce, grana padano, mozzarella, tomato sauce" },
          { name: "Chicken Burger / Spicy Chicken Burger", price: 790, badges: ["new"], description: "fried chicken fillet, chefs sauce, mixed green salad, tomatoes" },
          { name: "Chicken Marsala", price: 1290, badges: ["new"], description: "chicken fillet, Marsala wine, mushrooms, grana padano, butter, rice" },
        ]} />

        {/* DOMESTIC SELECTION */}
        <Section label="Domestic Selection" sub={["SIGNATURE PIZZAS"]} items={[
          { name: "Pečenica", price: 1390, badges: ["domestic", "new"], description: '"ajvar" – Serbian roasted red pepper spread, mozzarella, Serbian smoked pork ham, sour cream with garlic, oregano' },
          { name: "Kulen", price: 1390, badges: ["domestic", "new"], description: '"ajvar" – Serbian roasted red pepper spread, mozzarella, Serbian spicy sausage, cherry tomatoes' },
          { name: '"Slanınica"', price: 1390, badges: ["domestic", "new"], description: "Serbian bacon, sour cream, mozzarella, smoked cheese, red onion, celery" },
        ]} />

        {/* PIZZA CLASSICS */}
        <Section label="Pizza Classics" items={[
          { name: "Marinara", price: 790, description: "tomato sauce, basil, garlic, pepper, olive oil" },
          { name: "Margherita", price: 890, description: "tomato sauce, mozzarella, basil, grana padano, olive oil" },
          { name: "Vesuvio", price: 1190, description: "tomato sauce, mozzarella, prosciutto cotto, olive oil" },
          { name: "Capricciosa", price: 1390, description: "tomato sauce, mozzarella, prosciutto cotto, mushrooms, artichokes, olives, oregano" },
          { name: "Diavola", price: 1390, badges: ["domestic"], description: "tomato sauce, mozzarella, Serbian spicy sausage, fresh paprika, peperoncino" },
          { name: "Quattro Formaggi", price: 1390, description: "ricotta, mozzarella, gorgonzola, grana padano, smoked cheese, pepper" },
          { name: "Quattro Stagione", price: 1390, description: 'tomato sauce, mozzarella, ham, "kulen" Serbian spicy sausage, artichoke, olives, mushrooms' },
        ]} />

        {/* PIZZA SPECIALS */}
        <Section label="Pizza Specials" items={[
          { name: "Bella Bianca", price: 1390, badges: ["new"], description: "ricotta, mozzarella, zucchini, grana padano, smoked cheese, rosemary, olive oil" },
          { name: "Prosciutto", price: 1690, description: "tomato sauce, mozzarella fior di latte, arugula, cherry tomatoes, grana padano, olive oil" },
          { name: "Burratina", price: 1990, description: "tomato sauce, mozzarella fior di latte, beef ham, arugula, cherry tomatoes, burrata, balsamic sauce, olive oil" },
          { name: "Calabrese", price: 1690, description: "tomato sauce, mozzarella fior di latte, n'duja spicy calabrian sausage, onion, olive oil, basil" },
          { name: "Primavera", price: 1490, description: "white cream, pesto genovese, zucchini, cherry tomatoes, basil, ricotta, olive oil" },
          { name: "Verde", price: 1490, badges: ["new"], description: "ricotta, mozzarella fior di latte, baby spinach, cherry tomatoes, olive oil" },
          { name: "Veggie Vegan", price: 1290, badges: ["new"], description: "tomato sauce, eggplant, zucchini, caper, red onion, paprika, mushrooms, olive oil, pepper, basil" },
          { name: "Veggie Vegan + Mozzarella Fior di Latte", price: 1490, badges: ["new"] },
          { name: "Chef's Pizza", price: 1590, badges: ["new"], description: "tomato sauce, mozzarella fior di latte, bacon, onion, grana padano, egg, pepper" },
          { name: "Chorizo", price: 1890, badges: ["new"], description: "tomato sauce, goat cheese, chorizo, green olives, peperoncino" },
        ]} />

        {/* UNA PREMIUM */}
        <Section label="Una Premium Pizza Selection" items={[
          { name: "Una Speck e Zucchini", price: 2490, badges: ["new"], description: "white cream, mozzarella fior di latte, speck prosciutto, zucchini, rosemary, burrata, pepper, basil, olive oil" },
          { name: "Una Tartufo", price: 1890, badges: ["new"], description: "truffle cream, mozzarella fior di latte, beef ham, cherry tomatoes, arugula, grana padano, aceto balsamico" },
          { name: "Una Melagrana", price: 2390, badges: ["signature", "new"], description: "white cream, turkey ham, mascarpone, pomegranate, pine nuts, baby mozzarella, aceto balsamico di melagrana, crema melagrana" },
          { name: "Una Dolce: di Fichi / Cherry / Quince / Grape", price: 1990, description: "mozzarella fior di latte, gorgonzola, beef ham, white cream, figs / cherry / quince / grapes spread" },
          { name: "Una Dolce Prosciutto", price: 2390, badges: ["new"], description: "white cream, mozzarella fior di latte, gorgonzola, prosciutto, mascarpone, honey, almond" },
          { name: "Una Mortadella", price: 1890, badges: ["new"], description: "white cream, mozzarella fior di latte, mortadella, pistachio cream, pistachio" },
        ]} />

        {/* BREAKFAST */}
        <Section label="Breakfast" items={[
          { name: "Calzone Prosciutto Cotto", price: 990, description: "tomato sauce, mozzarella, mushrooms, prosciutto cotto" },
          { name: 'Calzone "Pečenica"', price: 990, description: 'tomato sauce, mozzarella, mushrooms, "pečenica" – Serbian smoked pork' },
          { name: '"Rochus"', price: 790, description: "croissant, 2 scrambled eggs with mozzarella and ham" },
          { name: "Eggs & Vegetables Base", price: 490, badges: ["new"], description: "3 eggs, mushrooms, tomato, paprika (add-ons available, check availability and prices)" },
          { name: "Scrambled Eggs on Pizza Dough", price: 690, description: "3 scrambled eggs on pizza dough with mozzarella (add-ons available, check availability and prices)" },
        ]} />

        {/* PANUOZZO / SANDWICHES */}
        <Section label="Panuozzo Napoletano Sandwiches" items={[
          { name: '"Komšin"', price: 990, badges: ["new"], description: "ricotta, mozzarella, olive oil, eggs, mortadella, arugula, tomato" },
          { name: '"Pietro"', price: 990, badges: ["new"], description: "mozzarella, olive oil, mushrooms, prosciutto cotto, tomato, eggs, mixed green salad" },
          { name: "Caprese", price: 790, description: "mozzarella, tomato, basil, olive oil, arugula" },
          { name: "Mortadella", price: 890, description: "pesto sauce, mozzarella, mortadella, arugula, tomato, grana padano" },
          { name: "Tuna", price: 890, description: "tomatoes, mixed green salad, canned tuna, red onion, sweet corn" },
          { name: "Cotto", price: 890, description: "prosciutto cotto, pesto genovese, tomatoes, grana padano, mozzarella" },
          { name: "Prosciutto", price: 990, description: "prosciutto crudo, ricotta, cherry tomatoes, arugula, grana padano" },
        ]} />

        {/* STARTERS */}
        <Section label="Starters" items={[
          { name: "Pizza Triangles", price: 590, badges: ["new"], description: 'focaccia triangles with tomato sauce, sour cream and "ajvar" – Serbian roasted red pepper spread' },
          { name: "Wedges Grana Padano", price: 690 },
          { name: "Garlic Sticks", price: 290, badges: ["new"], description: "focaccia sticks with garlic and olive oil" },
          { name: 'Grilled "Miročki" Cheese', price: 990, badges: ["new"], description: "grilled traditional Serbian cow's milk cheese originating from the Miroč mountain" },
          { name: "Fried Mozzarella Cheese", price: 890, badges: ["new"] },
          { name: "Fried Scamorza Cheese", price: 990 },
          {
            name: "Fried Montanarine – Neapolitan Street Food", price: "",
            sub: [
              { name: "prosciutto & ajvar – Serbian roasted red pepper spread", price: 1490, badges: ["new"] },
              { name: "burrata & smoked salmon", price: 1490, badges: ["new"] },
              { name: "mortadella & ricotta", price: 1490 },
              { name: "classic – tomato sauce, grana padano, basil", price: 1290 },
            ],
          },
          { name: "Parmigiana di Melanzane", price: 1190, description: "eggplant, mozzarella cheese, tomato sauce, grana padano" },
          { name: "Burrata Cheese", price: 1390, description: "burrata cheese served with mixed green salad and cherry tomatoes" },
          { name: "The Duo's Degustation", price: 1990, description: "(cheese & charcuterie, chef's selection)" },
        ]} />

        {/* SOUP / POTAGE */}
        <Section label="Soup Potage" items={[
          { name: "Creamy Tomato Soup with Mozzarella", price: 490, badges: ["new"] },
          { name: "Minestrone with Parmigiano Cheese on the Side", price: 490 },
          { name: "Seasonal Soup / Potage (check availability)", price: 490 },
        ]} />

        {/* SALADS */}
        <Section label="Salads" items={[
          { name: "Caprese", price: 1090, description: "tomatoes, mozzarella, fresh basil, aceto balsamico" },
          { name: "Chicken", price: 890, badges: ["new"], description: "chicken fillet, mixed green salad, chef's sauce, croutons" },
          { name: "Una", price: 1290, badges: ["signature", "new"], description: "mixed green salad, pomegranate, green apple, walnuts, raisins, olive oil, cherry tomatoes, goat cheese" },
          { name: "Tuna", price: 990, description: "mixed green salad, red onion, sweet corn and canned tuna" },
          { name: "Mixed Green Salad", price: 390 },
          { name: "Una Arugula", price: 690, description: "arugula, cherry tomatoes, grana padano, olive oil, aceto balsamico" },
          { name: "Tomato", price: 390, description: "tomato, red onion, olive oil" },
        ]} />

        {/* RISOTTO */}
        <Section label="Risotto" items={[
          { name: "Vegetables", price: 890, description: "zucchini, pepper, mushrooms, red onion, carrots, grana padano, butter" },
          { name: "Funghi Chicken", price: 1190, badges: ["new"], description: "chicken fillet, wild mushrooms mix, grana padano, butter" },
          { name: "Chicken Pinoli", price: 1490, badges: ["new"], description: "chicken fillet, pine nuts, grana padano, butter" },
          { name: "Gamberi", price: 1390, badges: ["new"], description: "gamberi, grana padano, butter" },
        ]} />

        {/* DESSERTS */}
        <Section label="Desserts" items={[
          { name: "Tiramisu", price: 650 },
          { name: "Raw Cake with Raspberry", price: 650, badges: ["new"] },
          { name: "Banoffee", price: 790, badges: ["new"], description: "creamy banana cake with Serbian and oreo biscuit" },
          { name: "Pizza with Nutella Spread", price: 990 },
          { name: "Sharing is Caring", price: 1290, description: "deep fried pizza dough sticks with nutella and 100% pistachio cream" },
        ]} />
      </div>
    </div>
  );
}
