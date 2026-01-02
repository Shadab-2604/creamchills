export interface MenuItem {
  id?: number
  name: string
  price: number | string
  description?: string
  isVeg?: boolean
  imageQuery?: string
}

export interface SubCategory {
  name: string
  items: MenuItem[]
}

export interface MenuCategory {
  category: string
  items?: MenuItem[]
  subcategories?: SubCategory[]
}

export const menuData: MenuCategory[] = [
  {
    category: "Snackers & Food",
    items: [
      {
        id: 1,
        name: "Choco Hazelnut Brownie",
        price: 150,
        description: "Brownie, Choco Paste, Vanilla Icecream",
        isVeg: true,
        imageQuery: "warm chocolate hazelnut brownie with vanilla ice cream",
      },
      {
        id: 2,
        name: "Nutella Choco Hazelnut Brownie",
        price: 180,
        description: "Nutella, Brownie, Vanilla Icecream",
        isVeg: true,
        imageQuery: "nutella drizzled chocolate brownie with ice cream",
      },
      {
        id: 3,
        name: "Garlic Bread",
        price: 80,
        description: "Toasted bread with garlic butter",
        isVeg: true,
        imageQuery: "cheesy garlic bread slices",
      },
      {
        id: 4,
        name: "Italian Pizza",
        price: 170,
        description: "Classic veggie pizza",
        isVeg: true,
        imageQuery: "italian vegetable pizza with melted cheese",
      },
      {
        id: 5,
        name: "Mexican Pizza",
        price: 170,
        description: "Spicy toppings pizza",
        isVeg: true,
        imageQuery: "spicy mexican pizza with jalapenos",
      },
      {
        id: 6,
        name: "Tandoor Paneer Pizza",
        price: 170,
        description: "Paneer and tikka sauce pizza",
        isVeg: true,
        imageQuery: "indian tandoori paneer pizza",
      },
    ],
  },
  {
    category: "Belgian Waffles",
    items: [
      { id: 7, name: "Hazel Munch Waffle", price: 130, isVeg: true, imageQuery: "hazelnut chocolate belgian waffle" },
      { id: 8, name: "Choco Oreo Waffle", price: 130, isVeg: true, imageQuery: "oreo chocolate waffle with cream" },
      { id: 9, name: "Choco Crispy Waffle", price: 130, isVeg: true, imageQuery: "crispy chocolate waffle dessert" },
      { id: 10, name: "Naughty Nutella (Mini)", price: 100, isVeg: true, imageQuery: "mini nutella waffle" },
      { id: 11, name: "Naughty Nutella (Full)", price: 140, isVeg: true, imageQuery: "full nutella chocolate waffle" },
      { id: 12, name: "Banana Caramel Waffle", price: 140, isVeg: true, imageQuery: "banana and caramel waffle" },
      {
        id: 13,
        name: "Belgian Waffle with Icecream",
        price: 140,
        isVeg: true,
        imageQuery: "belgian waffle with vanilla scoop",
      },
    ],
  },
  {
    category: "Cakes & Pastries",
    items: [
      { id: 14, name: "Golden Fantacy Slice", price: 60, isVeg: true, imageQuery: "golden yellow pastry slice" },
      { id: 15, name: "Black Forest Slice", price: 80, isVeg: true, imageQuery: "black forest cake slice" },
      { id: 16, name: "Brownie Cake Slice", price: 85, isVeg: true, imageQuery: "chocolate brownie cake slice" },
      { id: 17, name: "Swiss Truffle Slice", price: 75, isVeg: true, imageQuery: "swiss truffle chocolate slice" },
      {
        id: 18,
        name: "Butter Scotch Cake (Full)",
        price: 550,
        isVeg: true,
        imageQuery: "butterscotch round cream cake",
      },
      { id: 19, name: "Black Forest Cake (Full)", price: 550, isVeg: true, imageQuery: "black forest whole cake" },
      { id: 20, name: "Brownie Cake (Full)", price: 600, isVeg: true, imageQuery: "large brownie cake" },
      {
        id: 21,
        name: "Swiss Truffle Chocolate Cake (Full)",
        price: 350,
        isVeg: true,
        imageQuery: "swiss truffle chocolate cake",
      },
      { id: 22, name: "Choco Lava Cake", price: 80, isVeg: true, imageQuery: "molten choco lava cake" },
      { id: 23, name: "Cassatta Slice", price: 80, isVeg: true, imageQuery: "cassatta ice cream slice" },
    ],
  },
  {
    category: "Beautiful Sundaes",
    items: [
      { id: 24, name: "Gadbad Special", price: 140, isVeg: true, imageQuery: "gadbad special ice cream sundae" },
      { id: 25, name: "Mango-O-Mania", price: 120, isVeg: true, imageQuery: "mango ice cream sundae" },
      { id: 26, name: "Red Velvet Parfait", price: 160, isVeg: true, imageQuery: "red velvet dessert parfait" },
      { id: 27, name: "Fantasy Combo", price: 160, isVeg: true, imageQuery: "fantasy ice cream combo" },
      { id: 28, name: "Krunchy Munchy", price: 189, isVeg: true, imageQuery: "crunchy nut ice cream sundae" },
      { id: 29, name: "Dilkush", price: 160, isVeg: true, imageQuery: "dilkush special sundae" },
      { id: 30, name: "Fruit Punch", price: 210, isVeg: true, imageQuery: "mixed fruit ice cream punch" },
      { id: 31, name: "American Cashewnut", price: 110, isVeg: true, imageQuery: "cashewnut ice cream sundae" },
      { id: 32, name: "Banana Split", price: 189, isVeg: true, imageQuery: "classic banana split ice cream" },
      { id: 33, name: "Rainbow", price: 320, isVeg: true, imageQuery: "colorful rainbow ice cream sundae" },
      { id: 34, name: "Death By Chocolate", price: 150, isVeg: true, imageQuery: "death by chocolate sundae" },
      { id: 35, name: "So.. Co.. La", price: 180, isVeg: true, imageQuery: "premium chocolate sundae" },
      { id: 36, name: "American Magic", price: 130, isVeg: true, imageQuery: "american magic dry fruit sundae" },
      { id: 37, name: "Special Fruit Salad", price: 140, isVeg: true, imageQuery: "fresh fruit salad with ice cream" },
      { id: 38, name: "Dry Fruit Salad", price: 200, isVeg: true, imageQuery: "rich dry fruit ice cream salad" },
    ],
  },
  {
    category: "Chocolate On Fire & Fudge",
    items: [
      { id: 39, name: "Die Hard Chocolate", price: 189, isVeg: true, imageQuery: "sizzling chocolate brownie fudge" },
      { id: 40, name: "Choco Fudge Brownie", price: 189, isVeg: true, imageQuery: "hot chocolate fudge brownie" },
      { id: 41, name: "Brownie Cone", price: 110, isVeg: true, imageQuery: "ice cream brownie cone" },
      { id: 42, name: "Vanilla Fudge", price: 130, isVeg: true, imageQuery: "vanilla fudge sundae" },
      { id: 43, name: "Coffee Fudge", price: 130, isVeg: true, imageQuery: "coffee flavored fudge" },
      { id: 44, name: "Butter Scotch Fudge", price: 130, isVeg: true, imageQuery: "butterscotch fudge sundae" },
      { id: 45, name: "Cookies Cream Fudge", price: 130, isVeg: true, imageQuery: "cookies and cream fudge" },
      {
        id: 46,
        name: "Mix Fudge (Vanilla/Chocolate)",
        price: 130,
        isVeg: true,
        imageQuery: "mixed chocolate vanilla fudge",
      },
      { id: 47, name: "Roasted Almond Fudge", price: 150, isVeg: true, imageQuery: "roasted almond chocolate fudge" },
      { id: 48, name: "Belgian Chocolate Fudge", price: 150, isVeg: true, imageQuery: "belgian dark chocolate fudge" },
    ],
  },
  {
    category: "Ice Cream Scoops",
    subcategories: [
      {
        name: "Regular (50-55)",
        items: [
          { name: "Planifolia Vanilla", price: 50, isVeg: true, imageQuery: "vanilla ice cream scoop" },
          { name: "Red Raspberry", price: 50, isVeg: true, imageQuery: "raspberry ice cream scoop" },
          { name: "Buttery Scotch", price: 55, isVeg: true, imageQuery: "butterscotch scoop" },
          { name: "Orangy Frutti", price: 55, isVeg: true, imageQuery: "orange fruit scoop" },
          { name: "Koffie Coffee", price: 55, isVeg: true, imageQuery: "coffee ice cream scoop" },
          { name: "Sapota Chickoo", price: 55, isVeg: true, imageQuery: "chikoo fruit ice cream" },
          { name: "Strawberry", price: 55, isVeg: true, imageQuery: "strawberry ice cream scoop" },
          { name: "Cookies N Cream", price: 55, isVeg: true, imageQuery: "cookies and cream scoop" },
        ],
      },
      {
        name: "Classic (60)",
        items: [
          { name: "Mango (Alphonso)", price: 60, isVeg: true, imageQuery: "alphonso mango ice cream" },
          { name: "Saffron Pista (Kesar)", price: 60, isVeg: true, imageQuery: "kesar pista ice cream" },
          { name: "Chocolate Cream", price: 60, isVeg: true, imageQuery: "milk chocolate ice cream scoop" },
          { name: "Black Currant", price: 60, isVeg: true, imageQuery: "black currant ice cream" },
          { name: "Pistachio Green", price: 60, isVeg: true, imageQuery: "pistachio ice cream scoop" },
          { name: "Pineapple", price: 60, isVeg: true, imageQuery: "pineapple ice cream scoop" },
          { name: "Guava (Peru)", price: 60, isVeg: true, imageQuery: "guava fruit ice cream" },
          { name: "Jack Fruit", price: 60, isVeg: true, imageQuery: "jackfruit ice cream scoop" },
        ],
      },
      {
        name: "Low Sugar",
        items: [
          { name: "Low Sugar Vanilla", price: 60, isVeg: true, imageQuery: "sugar free vanilla ice cream" },
          { name: "Low Sugar Raspberry", price: 60, isVeg: true, imageQuery: "sugar free raspberry ice cream" },
          { name: "Low Sugar Anjeer", price: 75, isVeg: true, imageQuery: "sugar free anjeer ice cream" },
        ],
      },
      {
        name: "Premium (65)",
        items: [
          { name: "Belgium Chocolate", price: 65, isVeg: true, imageQuery: "belgian dark chocolate scoop" },
          { name: "Chocolate Chips", price: 65, isVeg: true, imageQuery: "choco chip ice cream scoop" },
          { name: "Double Choco Brownie", price: 65, isVeg: true, imageQuery: "brownie ice cream scoop" },
          { name: "Gulkand", price: 65, isVeg: true, imageQuery: "gulkand rose petal ice cream" },
          { name: "Anjeer Delight", price: 65, isVeg: true, imageQuery: "anjeer delight ice cream" },
          { name: "Dry Fruit Delight", price: 65, isVeg: true, imageQuery: "dry fruit ice cream scoop" },
          { name: "Roasted Almond", price: 65, isVeg: true, imageQuery: "roasted almond ice cream" },
          { name: "American Dry Fruit", price: 65, isVeg: true, imageQuery: "american dry fruit scoop" },
          { name: "Panmasala", price: 65, isVeg: true, imageQuery: "pan masala ice cream" },
          { name: "Rocky Road", price: 65, isVeg: true, imageQuery: "rocky road chocolate scoop" },
          { name: "Mawa Malai", price: 65, isVeg: true, imageQuery: "mawa malai ice cream" },
          { name: "Coconut", price: 65, isVeg: true, imageQuery: "tender coconut ice cream" },
          { name: "Violet Jamun", price: 65, isVeg: true, imageQuery: "violet jamun ice cream" },
          { name: "Sitafal", price: 65, isVeg: true, imageQuery: "sitafal ice cream scoop" },
          { name: "Lychee", price: 65, isVeg: true, imageQuery: "lychee fruit ice cream" },
          { name: "Strawberry Cheese Cake", price: 65, isVeg: true, imageQuery: "strawberry cheesecake ice cream" },
          { name: "Cherry Garcia", price: 65, isVeg: true, imageQuery: "cherry chocolate ice cream" },
          { name: "Jemsbond Blue", price: 65, isVeg: true, imageQuery: "blue bubblegum ice cream" },
        ],
      },
    ],
  },
  {
    category: "Kulfi & Mastani",
    items: [
      { id: 86, name: "Kulfi Mini Slice", price: 35, isVeg: true, imageQuery: "mini kulfi slice" },
      { id: 87, name: "Malai Coin Kulfi", price: 60, isVeg: true, imageQuery: "malai kulfi coin" },
      { id: 88, name: "Mango Coin Kulfi", price: 65, isVeg: true, imageQuery: "mango kulfi coin" },
      { id: 89, name: "Kesar Coin Kulfi", price: 65, isVeg: true, imageQuery: "kesar kulfi coin" },
      { id: 90, name: "Anjeer Coin Kulfi", price: 65, isVeg: true, imageQuery: "anjeer kulfi coin" },
      { id: 91, name: "Chikoo Coin Kulfi", price: 65, isVeg: true, imageQuery: "chikoo kulfi coin" },
      { id: 92, name: "Strawberry Coin Kulfi", price: 65, isVeg: true, imageQuery: "strawberry kulfi coin" },
      { id: 93, name: "Mix Kulfi Coin", price: 65, isVeg: true, imageQuery: "assorted kulfi coins" },
      { id: 94, name: "Kulfi Fondue", price: 120, isVeg: true, imageQuery: "kulfi fondue with chocolate" },
      { id: 95, name: "Mango Mastani", price: 170, isVeg: true, imageQuery: "mango mastani thick shake" },
      { id: 96, name: "Sitafal/Strawberry Mastani", price: 170, isVeg: true, imageQuery: "strawberry mastani drink" },
      { id: 97, name: "Dryfruit Mastani", price: 250, isVeg: true, imageQuery: "rich dry fruit mastani" },
      { id: 98, name: "Kulfi Slice Party Pack (500g)", price: 260, isVeg: true, imageQuery: "kulfi slice party box" },
    ],
  },
  {
    category: "Shakes & Falooda",
    items: [
      { id: 110, name: "Biscoff Shake", price: 250, isVeg: true, imageQuery: "biscoff thick milkshake" },
      { id: 111, name: "Nutella Shake", price: 220, isVeg: true, imageQuery: "nutella chocolate shake" },
      { id: 112, name: "Brownie Shake", price: 150, isVeg: true, imageQuery: "chocolate brownie milkshake" },
      { id: 113, name: "Kit-Kat Shake", price: 180, isVeg: true, imageQuery: "kitkat chocolate shake" },
      { id: 114, name: "Royal Falooda", price: 130, isVeg: true, imageQuery: "royal falooda glass dessert" },
      { id: 115, name: "Kesar Falooda", price: 140, isVeg: true, imageQuery: "kesar saffron falooda" },
      { id: 116, name: "Peshawari Falooda", price: 150, isVeg: true, imageQuery: "peshawari special falooda" },
      { id: 117, name: "Raja Falooda", price: 200, isVeg: true, imageQuery: "premium raja falooda" },
      { id: 118, name: "Rani Falooda", price: 200, isVeg: true, imageQuery: "premium rani falooda" },
      { id: 119, name: "Cold Coffee", price: 150, isVeg: true, imageQuery: "cold coffee with ice cream" },
      { id: 120, name: "Oreo Milk Shake", price: 150, isVeg: true, imageQuery: "oreo cookie milkshake" },
    ],
  },
  {
    category: "Takeaway & Bars",
    items: [
      { id: 121, name: "Double Delight Tub (700ml)", price: 300, isVeg: true, imageQuery: "ice cream tub 700ml" },
      { id: 122, name: "Ball Ice Cream (Any)", price: 40, isVeg: true, imageQuery: "colorful ball ice cream" },
      { id: 123, name: "Chocobar Regular", price: 30, isVeg: true, imageQuery: "chocolate ice cream bar" },
      { id: 124, name: "Crunch Chocobar", price: 35, isVeg: true, imageQuery: "crunchy nutty chocobar" },
      { id: 125, name: "Thunder Cone (Oreo/Brownie)", price: 50, isVeg: true, imageQuery: "large ice cream cone" },
      { id: 126, name: "Kulfi Candie Stick", price: 35, isVeg: true, imageQuery: "kulfi candy stick" },
      { id: 127, name: "Fresh Fruit Juice", price: 100, isVeg: true, imageQuery: "fresh orange juice glass" },
      { id: 128, name: "Choco Drink Bottle", price: 99, isVeg: true, imageQuery: "chocolate milk drink bottle" },
      { id: 129, name: "Sitafal Creama", price: 200, isVeg: true, imageQuery: "custard apple cream dessert" },
    ],
  },
]
