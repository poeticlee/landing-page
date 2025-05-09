import React from "react";


const grills = [
  {
    id: 1,
    name: "Spicy Suya (Beef/Chicken)",
    image: "/src/assets/grills5.jpg",
  },
  {
    id: 2,
    name: "Asun(Spicy Goat Meat)",
    image: "/src/assets/asun.jpeg",
  },
 
  {
    id: 3,
    name: "Grilled Fish (tilapia /croacker):",
    image: "/src/assets/grilledtilapia.jpeg",
  },
  {
    id: 4,
    name: "Barbeque Chicken wings",
    image: "/src/assets/chickenwings.jpeg",
  },
  {
    id: 5,
    name: " Lamb Chops with Peppered or Mint Sauce",
    image: "/src/assets/lambchops.jpeg",
  }

]
const smallchops= [

  {
    id: 1,
    name: "Soupreme Rols- spring roll filled with shrimps",
    image: "/src/assets/springroll.jpeg",
  },
  {
    id: 2,
    name: " sweet potato, plantain and cinnamon seasoned black beans) with dip sauce  ",
    image: "/src/assets/plantain2.jpg",
  },
  {
    id: 2,
    name: "Frosty puffs: sugar-free puff-puff frosted with Demerara and cinnamon",
    image: "/src/assets/puffpuff2.jpeg",
  }
  
]

const main = [


  {
    id: 1,
    name: "Jollof rice(Party Style)",
    image: "/src/assets/jollofrice.jpeg",
    
  },
  {
    id: 2,
    name: "Fried rice",
    image: "/src/assets/friedrice.jpeg",
  },
  {
    id: 3,
    name: "Ofada rice with Ayamase sauce",
    image: "/src/assets/ofada.jpeg",  
  },
  {
    id: 4,
    name: "Ofada rice with Ayamase sauce",
    image: "/src/assets/ofada.jpeg",  
  },
  {
    id: 5,
    name: "Singapore noodles",
    image: "/src/assets/singaporenoodles.jpeg",
  }
 
]



const soups = [

 
 
  {
    id: 1,
    name: "Faaji SoupA Pepper soup", 
    image: "/src/assets/peppersoup.jpeg",
  },
 {
    id: "Chicken Cream soup (basil leaves garnishing)with potato, tofu and carrot",
    image: "/src/assets/chickensoup.jpeg",
    
  },
]

  const cocktails = [
  {
    id: 1,
    name: "Strawberry Daiquiri",
    image: "/src/assets/daiquiri.jpeg",
    
  },
  {
    id: 2,
    name: "Mango passion fruit Cocktail spiced with rum and coconut syrup",
    image: "/src/assets/mangopassion.jpeg",
  },
  {
    id: 3,
    name: "Zobo Mojito",
    image: "/src/assets/pinacolada.jpeg",
  },
  {
    id: 3,
    name: "Tamarind twist",
    image: "/src/assets/pinacolada.jpeg",
  },
  {
    id: 3,
    name: "Naija Sunrise (Orange-Pineapple-Vanilla)",
    image: "/src/assets/pinacolada.jpeg",
  },
  {
    id: 3,
    name: "Spiced Palm Wine Punch",
    image: "/src/assets/palmwine.jpeg",
  },
  {
    id: 3,
    name: "Pina colada",
    image: "/src/assets/pinacolada.jpeg",
  },
  {
    id: 4,
    name: "Peach Daiquiri",
    image: "/src/assets/peachdaqiri.jpeg",
  },
  {
    id:5,
    name: "Caramel flavoured Shandy",
    image: "/src/assets/shandy.jpeg",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 bg-red-600">
          Our Menu
        </h2>
        <h3 className="text-3xl text-white md:text-4xl font-bold w-[120px] mb-6 bg-red-300">
          Grills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {grills.map((grill) => (
            <div
              key={grill.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={grill.image}
                alt={grill.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{grill.name}</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl mt-10 text-white md:text-4xl font-bold w-[120px] mb-6 bg-red-300">
          Small Chops
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {smallchops.map((smallchop) => (
            <div
              key={smallchop.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={smallchop.image}
                alt={smallchop.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{smallchop.name}</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl text-white md:text-4xl font-bold w-[120px] mt-10 mb-6 bg-red-300">
          Main Dishes
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {main.map((sill) => (
            <div
              key={sill.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={sill.image}
                alt={sill.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{sill.name}</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl mt-10 text-white md:text-4xl font-bold w-[120px] mb-6 bg-red-300">
          Soups
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {soups.map((soup) => (
            <div
              key={soup.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={soup.image}
                alt={soup.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{soup.name}</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl -mt-10 text-white md:text-4xl font-bold w-[170px] mb-6 bg-red-300">
          Cocktails
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {cocktails.map((cocktail) => (
            <div
              key={cocktail.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={cocktail.image}
                alt={cocktail.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{cocktail.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
