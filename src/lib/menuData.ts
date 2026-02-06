export interface MenuItem {
  name: string;
  description?: string;
  size?: string;
  price: string;
  price2?: string;
}

export interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  slug: string;
  title: string;
  sections: MenuSection[];
}

export const menuData: MenuCategory[] = [
  // BIERE
  {
    slug: "biere",
    title: "Biere",
    sections: [
      {
        title: "Biere",
        items: [
          { name: "Becks", size: "0,3l", price: "4,00" },
          { name: "Becks Green", size: "0,3l", price: "4,00" },
          { name: "Desperados", size: "0,3l", price: "4,50" },
          { name: "Weizen", size: "0,5l", price: "4,00" },
          { name: "Zirndorfer", size: "0,5l", price: "4,00" },
          { name: "Heinken", size: "0,3l", price: "4,00" },
          { name: "Radler", size: "0,5l", price: "4,50" },
          { name: "ColaWeizen", size: "0,5l", price: "4,99" },
          { name: "Corona", size: "0,3l", price: "4,50" },
        ],
      },
    ],
  },
  // COCKTAILS
  {
    slug: "cocktails",
    title: "Cocktails",
    sections: [
      {
        title: "Cocktails",
        note: "0,5l 11,00€",
        items: [
          { name: "Mai Tai", description: "Weißer & Brauner Rum, Kokossirup, Ananas Saft, Ananas", price: "11,00" },
          { name: "Leayaly", description: "Kokossirup, Becardi, Brauner Rum, Ananas Saft", price: "11,00" },
          { name: "Blue Leayaly", description: "Blue curacao, Ananassaft, Becardi, Kokossirup", price: "11,00" },
          { name: "Flamer's Punch", description: "Weißer & Brauner Rum, Grenadine, Orange Saft, Zitrone Saft", price: "11,00" },
          { name: "Willenios", description: "Brauner Rum, Vodka, Triple Sec, Mandel & Grendine, Maracuja & Orange, Zitrone Saft", price: "11,00" },
          { name: "Sex on the Beach", description: "Vodka, Peach Tree, Cranberry, Orangen Saft, Zitrone Saft, Ananas Saft", price: "11,00" },
          { name: "Paradise", description: "Gin, Peach Tree, Grenadine, Orange Saft, Zitrone Saft", price: "11,00" },
          { name: "Chi Chi", description: "Vodka, Peach Tree, Kokossirup, Lime juce, Ananas Saft", price: "11,00" },
          { name: "Leyaly Sunset", description: "Vodka, Blue Curacao, Orangen Saft, Lime Juce", price: "11,00" },
          { name: "Tequila Sunrise", description: "Tequila, Grenadinesirup, Zitrone Saft, Orangen Saft", price: "11,00" },
          { name: "Leyaly Sweet Pink", description: "Brauner Rum, Apricot, Kokossirup, Lime Juce, Ananas Saft", price: "11,00" },
          { name: "The Beach", description: "Weißer Rum, Aperol, Kokossirup, Sahne, Maracuja & Ana Saft", price: "11,00" },
          { name: "Touch Down", description: "Vodka, Apricot, Grenadinesirup, Lime Juce, Maracuja Saft", price: "11,00" },
          { name: "Leyaly latin", description: "Weißer Rum & cachaca, Lime Juce, Maracuja Saft, Orangensaft, Ananas Saft", price: "11,00" },
          { name: "Saxonia", description: "Gin, Apricot, Zitrone Saft, Orangen Saft", price: "11,00" },
          { name: "O Sole Mio", description: "Aperol, Lime juce, Orange Saft, Zitrone Saft", price: "11,00" },
          { name: "Zombie", description: "Weißer & Brauner Rum, Triple Sec, Lime juce, MaracujaSaft, Orange & Zitronesaft", price: "11,00" },
          { name: "Aperol Aranchia", description: "Aperol, Lime juce, Organe Saft, Zitrone Saft", price: "11,00" },
          { name: "Long Island Iced Tea", description: "vodka & weißer Rum, Tequila & gin, Triple sec, Rohrzucker, Coca-cola & Zitronesaft", price: "11,00" },
          { name: "Mojito", description: "Weißer Rum, Rohrzucker, Minze, Limettensaft, Tafelwasser", price: "11,00" },
          { name: "Erdbeer Mojito", description: "Weißer Rum, Rohrzucker, Minze, Erdbeeren, limettensaft & Tafelwasser", price: "11,00" },
        ],
      },
    ],
  },
  // CAIPI'S
  {
    slug: "caipis",
    title: "Caipi's",
    sections: [
      {
        title: "Caipi's",
        note: "0,5l 9,99",
        items: [
          { name: "Caipirinha", description: "Cachaca, Lime Juice, Braunerzucker, Limetten", price: "9,99" },
          { name: "Caipiroska", description: "vodka, Lime Juice, Braunerzucker, Limetten", price: "9,99" },
          { name: "Caipirol", description: "Aperol, Lime Juice, Braunerzucker, Limetten", price: "9,99" },
          { name: "Caipiqueen", description: "Gin, Lime Juice, Braunerzucker, Limetten", price: "9,99" },
        ],
      },
    ],
  },
  // SHOTS
  {
    slug: "shots",
    title: "Shots",
    sections: [
      {
        title: "Shots",
        items: [
          { name: "Vodka", size: "2cl", price: "2,50" },
          { name: "Tequila", size: "2cl", price: "2,50" },
          { name: "Jack Daniels", size: "2cl", price: "2,50" },
          { name: "Jägermeister", size: "2cl", price: "2,50" },
          { name: "Bacardi", size: "2cl", price: "2,50" },
          { name: "Gin", size: "2cl", price: "2,50" },
          { name: "Ficken", size: "2cl", price: "2,50" },
          { name: "Dos Mas", size: "2cl", price: "2,50" },
          { name: "Heiss Special", size: "2cl", price: "3,00" },
          { name: "Heiss Magic", size: "2cl", price: "3,00" },
        ],
      },
    ],
  },
  // LONGDRINKS
  {
    slug: "longdrinks",
    title: "Longdrinks",
    sections: [
      {
        title: "Longdrinks",
        items: [
          { name: "Vodka Red Bull", size: "0,3l", price: "9,40" },
          { name: "JackDaniel's Cola", size: "0,3l", price: "9,40" },
          { name: "Bacardi Cola", size: "0,3l", price: "9,40" },
          { name: "Hennessy Cola", size: "0,3l", price: "10,99" },
          { name: "Gin Tonic / Lemon", size: "0,3l", price: "9,40" },
          { name: "Malibu Kirsch", size: "0,3l", price: "9,40" },
          { name: "Cuba Libre", description: "Brauner Rum, Coca Cola, Limetten", size: "0,3l", price: "9,99" },
        ],
      },
    ],
  },
  // WEINE & SEKT
  {
    slug: "weine-sekt",
    title: "Weine & Sekt",
    sections: [
      {
        title: "Gläser",
        items: [
          { name: "Rotwein", size: "0,2l | 0,4l", price: "4,50", price2: "6,50" },
          { name: "Weisswein", size: "0,2l | 0,4l", price: "4,50", price2: "6,50" },
          { name: "Lilet Wild Berry", size: "0,2l | 0,4l", price: "5,99", price2: "8,50" },
          { name: "Aperol Sperol", size: "0,2l | 0,4l", price: "5,99", price2: "8,50" },
          { name: "Hugo", size: "0,2l | 0,4l", price: "5,99", price2: "8,50" },
          { name: "Sekt", size: "0,2l | 0,4l", price: "4,50", price2: "6,50" },
          { name: "Prosecco", size: "0,2l | 0,4l", price: "4,50", price2: "6,50" },
          { name: "Weisseinschorle", size: "0,2l | 0,4l", price: "5,00", price2: "7,00" },
        ],
      },
      {
        title: "Flaschen",
        items: [
          { name: "Prosecco", size: "0,75l", price: "30,00" },
          { name: "Rotwein", size: "0,75l", price: "35,00" },
          { name: "Weisswein", size: "0,75l", price: "35,00" },
          { name: "Sekt", size: "0,75l", price: "30,00" },
          { name: "Champagner", size: "0,75l", price: "100,00" },
        ],
      },
    ],
  },
  // BOTTLES
  {
    slug: "bottles",
    title: "Bottles",
    sections: [
      {
        title: "Bottles",
        items: [
          { name: "VODKA SMIRNOFF", description: "0,7l 95,00 +6 Red Bull/Lemon | 1,7l 120,00 +10 Red Bull/Lemon", price: "95,00" },
          { name: "VODKA BEVEDERE", description: "0,7l 95,00 +6 Red Bull/Lemon | 1,7l 120,00 +10 Red Bull/Lemon", price: "95,00" },
          { name: "WHISKEY jackDaniels", description: "0,7l 95,00 +1l Coca Cola | 1,7l 120,00 +2l Coca Cola", price: "95,00" },
          { name: "COGANC Hennessy", description: "0,7l 95,00 +1l Coca Cola | 1,7l 120,00 +2l CocaCola", price: "95,00" },
        ],
      },
    ],
  },
  // SOFTDRINKS
  {
    slug: "softdrinks",
    title: "Softdrinks",
    sections: [
      {
        title: "Softdrinks",
        items: [
          { name: "Coca Cola / zero / Light", size: "0,2l | 0,5l", price: "3,00", price2: "5,00" },
          { name: "Fanta / Sprite / Mezzo Mix", size: "0,2l | 0,5l", price: "3,00", price2: "5,00" },
          { name: "Ginger Ale / Bitter Lemon / Tonic Water", size: "0,2l", price: "3,00" },
          { name: "Wasser Still / Sprizig", size: "0,2l | 0,7l", price: "3,00", price2: "7,00" },
          { name: "Zitrone / Mango / Pfirisch", size: "0,4l", price: "4,00" },
          { name: "Red Bull / White / Sugar Free", size: "0,2l", price: "4,00" },
        ],
      },
    ],
  },
  // SWEET DRINKS
  {
    slug: "sweet-drinks",
    title: "Sweet Drinks",
    sections: [
      {
        title: "Sweet Drinks",
        items: [
          { name: "Limonade", description: "Blue Curacao Sirup, limo, Limetten", size: "0,5l", price: "6,50" },
          { name: "Leyaly Rose Drink", description: "Wassermelone, limo, Zitrone", size: "0,5l", price: "6,50" },
          { name: "Leyaly Blue Drink", description: "Blue curacaosirup, limo, Lime juice, Sprite & Limetten", size: "0,5l", price: "6,50" },
        ],
      },
    ],
  },
  // SÄFTE
  {
    slug: "saefte",
    title: "Säfte",
    sections: [
      {
        title: "Säfte",
        items: [
          { name: "Maracujan Saft", size: "0,5l", price: "5,99" },
          { name: "Bananen Saft", size: "0,5l", price: "5,99" },
          { name: "Ananas Saft", size: "0,5l", price: "5,99" },
          { name: "Orangen Saft", size: "0,5l", price: "5,99" },
          { name: "Kirsche Saft", size: "0,5l", price: "5,99" },
          { name: "Apfel Saft", size: "0,5l", price: "5,99" },
          { name: "KI-BA", size: "0,5l", price: "5,99" },
        ],
      },
    ],
  },
  // DRIVER'S COCKTAILS
  {
    slug: "drivers-cocktails",
    title: "Driver's Cocktails",
    sections: [
      {
        title: "Driver's Cocktails",
        note: "0,5l 9,00",
        items: [
          { name: "Beach cooler", description: "Blue curacao, Kokossirup, Ananas Saft, Orangen Saft, Zitrone Saft", price: "9,00" },
          { name: "Coconut Kiss", description: "Kokossirup, Ananassaft, Sahne, Grendine", price: "9,00" },
          { name: "Ocean Driver", description: "Blue curacao, Ananassaft, Sahne, Lime Juice", price: "9,00" },
          { name: "Refresher", description: "Limetten, Brauner Zucker, Lime juce, Orange Saft, Maracuja Saft", price: "9,00" },
          { name: "Paradise Dream", description: "Cranberry, Ananas Saft, Maracuja Saft, Sahne, Zitrone Saft", price: "9,00" },
          { name: "Florida", description: "Kokossirup, Grenadine, Maracuja Saft, Orangen Saft, Zitrone Saft", price: "9,00" },
          { name: "Sunrise", description: "Mandelsirup, MaracujaSaft, Ananas Saft, Zitrone Saft, Grenadinesirup", price: "9,00" },
          { name: "Virgin Mojito", description: "Ginger Ale, Rohrzucker, Minze, Limetten, Tafel Wasser", price: "9,00" },
          { name: "Wake up", description: "Orange Saft, Ananas Saft, Orangen Saft, Mandelsieup", price: "9,00" },
          { name: "Ipanema", description: "Rohrzucker, Maracuja Saft, Ginge Ale, Limetten", price: "9,00" },
          { name: "Gekko", description: "Maracuja Saft, Orangen Saft, lime juce, curacaosirup", price: "9,00" },
          { name: "Fruit punch", description: "Lime juce, Maracuja Saft, Orangen Saft, Zitrone Saft", price: "9,00" },
        ],
      },
    ],
  },
  // HOT COFFEE
  {
    slug: "hot-coffee",
    title: "Hot Coffee",
    sections: [
      {
        title: "Hot Coffee",
        items: [
          { name: "caffe Creme", price: "3,49" },
          { name: "Espresso", price: "2,99" },
          { name: "Cappuccino", price: "5,00" },
          { name: "Hot Chocolate", price: "5,49" },
          { name: "Caffee Latte", price: "5,49" },
          { name: "Tea", description: "Schwarz, Früchte, Kamille, Minze, Apfel, Grün", price: "2,99" },
        ],
      },
    ],
  },
  // ICE COFFEE
  {
    slug: "ice-coffee",
    title: "Ice Coffee",
    sections: [
      {
        title: "Ice Coffee",
        items: [
          { name: "Ice caffe Creme", price: "5,00" },
          { name: "Ice caffe Latte", price: "5,00" },
          { name: "Ice Amricano", price: "5,00" },
          { name: "Ice Frappuccion", price: "5,00" },
          { name: "Blue iced Latte", price: "7,00" },
          { name: "Red Iced Latte", price: "7,00" },
        ],
      },
    ],
  },
  // MILCHSHAKES
  {
    slug: "milchshakes",
    title: "Milchshakes",
    sections: [
      {
        title: "Milchshakes",
        items: [
          { name: "Erdbeere", size: "0,5l", price: "7,99" },
          { name: "Karamell", size: "0,5l", price: "7,99" },
          { name: "Banane", size: "0,5l", price: "7,99" },
          { name: "Schoko", size: "0,5l", price: "7,99" },
          { name: "Haselnuss", size: "0,5l", price: "7,99" },
          { name: "Kokos", size: "0,5l", price: "7,99" },
          { name: "Vanille", size: "0,5l", price: "7,99" },
        ],
      },
    ],
  },
  // SÜßIGKEITEN
  {
    slug: "suessigkeiten",
    title: "Süßigkeiten",
    sections: [
      {
        title: "Süßigkeiten",
        items: [
          { name: "Nabulsi Kunafa", size: "1st", price: "5,00" },
          { name: "Kunafa um Nareen", size: "1st", price: "5,00" },
          { name: "Harissa", size: "1st | 6st", price: "1,00", price2: "5,00" },
          { name: "Baklava", size: "1st | 6st", price: "1,00", price2: "5,00" },
          { name: "Nabulsi Kunafa + Arabische ice cream", size: "1st", price: "7,00" },
        ],
      },
    ],
  },
  // ICE CREAM
  {
    slug: "ice-cream",
    title: "Ice Cream",
    sections: [
      {
        title: "Ice Cream",
        items: [
          { name: "ICE CREAM", size: "1 st", price: "2,50" },
          { name: "ICE CREAM", size: "1 st", price: "7,00" },
          { name: "SLASH", size: "1 st", price: "5,00" },
        ],
      },
    ],
  },
  // FRÜCHTE
  {
    slug: "fruechte",
    title: "Früchte",
    sections: [
      {
        title: "Früchte",
        items: [
          { name: "Obst Salat Tasse", price: "5,00" },
          { name: "Obst Salat Teller", price: "10,00" },
          { name: "Obst Salat Teller", price: "15,00" },
        ],
      },
    ],
  },
  // SHISHA DELUXE
  {
    slug: "shisha-deluxe",
    title: "Shisha Deluxe",
    sections: [
      {
        title: "Shisha Deluxe",
        items: [
          { name: "Mit Deinem Lieblingsgeschmack", price: "17,00" },
        ],
      },
      {
        title: "Mit Naturkopf",
        items: [
          { name: "Wassermelone", price: "30,00" },
          { name: "Ananas", price: "25,00" },
          { name: "Melone", price: "30,00" },
          { name: "Apfel", price: "20,00" },
          { name: "Orange", price: "20,00" },
        ],
      },
    ],
  },
  // SHISHA STANDARD
  {
    slug: "shisha-standard",
    title: "Shisha Standard",
    sections: [
      {
        title: "Shisha Standard",
        note: "13,90",
        items: [
          { name: "Blueberry, Apfel, Kaugummi & zimt, Erdbeere, Fruchtmix, Honigmelone, Bluemint", price: "13,90" },
          { name: "Wassermelone, Himbeere, Ice Lemon, Minze, Orange, Pfirisch", price: "13,90" },
          { name: "Traube & Minze, Zitrone & Minze, Hamburg, Le chill, African Queen", price: "13,90" },
          { name: "Ice Kaktos, Kirsche Minze, Limette Minze, Love 66, Okolom", price: "13,90" },
          { name: "Ringle rangle, Ice Bonbon, HEISS Summer", price: "13,90" },
        ],
      },
      {
        title: "Extras",
        items: [
          { name: "Fruchttopf", price: "10,00" },
          { name: "Jede extra kohle", price: "0,50" },
          { name: "Neuer Topf", price: "9,99" },
        ],
      },
    ],
  },
  // SHISHA NIKOTINFREI
  {
    slug: "shisha-nikotinfrei",
    title: "Shisha Nikotinfrei",
    sections: [
      {
        title: "Shisha Nikotinfrei",
        note: "13,90",
        items: [
          { name: "Orange, Kokos, Minze, Kaugummi, Traube & Minze, Zitrone", price: "13,90" },
          { name: "Wassermelone, Kaugummi & Zimt, Apfel, Früchte", price: "13,90" },
        ],
      },
    ],
  },
];

export function getMenuBySlug(slug: string): MenuCategory | undefined {
  return menuData.find((m) => m.slug === slug);
}
