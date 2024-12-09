const recipes = [
	{
		Source: [
			"The Mormon Diet by Earl F. Updike",
			"A Word of Wisdom",
			"14 Days to New Vigor and Health"
		],
		name: "Hot Mixed Cereal",
		tags: "Cereal, Breakfast",
		//image: './images/sweet-potato-waffle-md.jpg',
		servings: "1",
		prepTime: "2 minutes",
		cookTime: "10-20 minutes",
		ingredients: [
			"4 cups water",
			"1 cup dry mixed cereals (equal parts Wheatena, oat bran, regular oats)",
			"raisins or other fruit (optional)"
		],
		note: "Each cup of dry cereal makes about 1 quart of cooked cereal.",
		directions: [
			"Bring the water to a boil in a saucepan.",
			"Add the pre-mixed cereal, stir.",
			"Reduce heat to medium-low, and stir occasionally.",
			"For smoother cereal, cook longer.",
			"Turn to low heat if you want to cook longer than 15 minutes.",
			"Add water to thin mixture if needed. Add fruit if desired."
		]

	},
	{
		Source: [
			"The Mormon Diet by Earl F. Updike",
			"A Word of Wisdom",
			"14 Days to New Vigor and Health"
			],
		name: "Hash Brown Potatoes",
		tags: "Potatoes, Breakfast",
		//image:
		servings: "1 (eat all you want)",
		prepTime: "3 minute",
		cookTime: "25 minutes",
		ingredients: [
			"1-2 fresh potatoes",
			"½ cup chopped onion",
			"1/8 teaspoon Mrs. Dash (optional)",
			"1 garlic clove crushed",
			"pepper to taste"
		],
		note: "You can add herbs of choice for flavoring.",
		directions: [
			"Wash and grate potatoes.",
			"Cook in a nonstick skillet over medium heat for 6 minutes",
			"turn and cook for 6-10 minutes on the other side, until browned.",
			"Garnish with ketchup or other sauce (no-oil)."
		]
	},
	{
		Source: [
			"The Mormon Diet by Earl F. Updike",
			"A Word of Wisdom",
			"14 Days to New Vigor and Health"
		],
		name: ": Apple Pie Waffles or Pancakes",
		tags: "Waffles, Pancakes, Breakfast",
		//image:
		servings: "makes 14 pancakes or 4 waffles",
		prepTime: "30 minutes",
		cookTime: "20 minutes",
		ingredients: [
			"1 ¾ cups fine whole wheat flour",
			"1 teaspoon honey",
			"½ cup wheat bran",
			"1 cup low-fat soy milk or skim milk", 
			"2 teaspoons dry yeast", 
			"½ teaspoon salt (optional)", 
			"2 egg whites or 2 teaspoons egg replacer mixed with 4 tablespoons water",
			"1 teaspoon apple pie spice", 
			"2 apples grated", 
			"3 tablespoons applesauce", 
			"¾ cup warm water"
		],
		note: "Remember to spray your waffle iron with a non-stick spray or lightly oil.",
		directions: [
			"Mix flour, bran, apple pie spice, and salt (optional); set aside. ",
			"Combine yeast, water, and honey, and let rest 5 minutes while grating peeled apple.",
			"Add the soy milk or skim milk, applesauce, egg whites or egg replacer, and grated apple to the yeast mixture.",
			"Mix well. Combine with the dry ingredients.",
			"Cover and let rest for 15 minutes.",
			"Pour about 1 cup of batter into a hot waffle iron (large waffle iron) and cook for 7-8 minutes, or until the lid lifts easily.", 
			"(If you have a small single size waffle iron adjust batter measurement according to the manufacturers direction.", 
			"I would start with ¼ - ½ cup of batter.", 
			"You do not want the batter to run over the sides of the waffle iron.)", 
			"For Pancakes: Ladle batter onto a medium-hot, nonstick griddle and flatten cakes so the center will cook.", 
			"Cook about 10 minutes on first side, about 6-8 minutes on the other side.", 
			"Don’t turn until bubbles form on top.", 
			"These cakes are thicker than regular pancakes and take longer to cook."
		]
	},
	{
		Source: [
			"The Mormon Diet by Earl F. Updike",
			"A Word of Wisdom",
			"14 Days to New Vigor and Health"
		],
		name: "Quick Oatmeal",
		tags: "Oatmeal, Breakfast",
		image: "/.images/oatmeal.jpg",
		servings: "1",
		prepTime: "2 minutes",
		cookTime: "5 minutes",
		ingredients: [
			"½ cup regular oatmeal",
			"1 cup water",
		],
		note: "For larger or 2 servings double the recipe ingredients",
		directions: [
			"Place water in pot. Add oats, bring water to a boil, and stir. ",
			"Boil for 1 minute, stirring occasionally. ",
			"Cover pot, turn off heat, and remove from burner. ",
			"Wait 4 -5 minutes, stir, and serve.",
			"Eat plain, or with a little cinnamon or nutmeg.",
			"For a variety, add raisins or other dry fruits during or after cooking.",
			"(I have used frozen fruits like raspberries, blueberries, and blackberries and cooked a little longer.)"
		],
	},
	{
		Source: [
			"The Mormon Diet by Earl F. Updike",
			"A Word of Wisdom",
			"14 Days to New Vigor and Health"
		],
		name: "Cold or Hot Rice—Cereal—Fruit Combo",
		tags: "Cereal, Rice, Breakfast",
		//image:
		servings: "1",
		prepTime: "2-8 minutes",
		cookTime: "none if eaten cold or 1-2 minutes in microwave",
		ingredients: [
			"2/3 cup cooked rice",
			"fruit (raisins, bananas, berries, etc.)(optional)",
			"dash of cinnamon (optional)"
		],
		note: "",
		directions: [
			"In a cereal bowl add rice",
			"Top with any fruit (raisins, bananas, berries, etc.)",
			"Add a dash of cinnamon. ",
			"For liquid you can use unsweetened apple juice, rice milk, soy milk, or skim milk.",
			"I have used unsweetened almond milk.",
			"I also prefer my rice cereal warmed in the microwave 1-2 minutes."
		]
	},
	{
		Source: [
			"The Mormon Diet by Earl F. Updike",
			"A Word of Wisdom",
			"14 Days to New Vigor and Health"
		],
		name: "Cold Cereal",
		tags: "Cereal, Breakfast",
		image: "./images/grapenuts.jpeg",
		servings: "1",
		prepTime: "2 minutes",
		cookTime: "none",
		ingredients: [
			"1-3 cups of shredded Wheat or Grape-Nuts or other acceptable cold cereal",
			"¼ cup unsweetened fruit juice, soy milk or rice milk (optional)",
			"½ banana",
			"¼ cup strawberries (optional)"
		],
		note: "I like mine with fresh blueberries and unsweetened Almond Milk",
		directions: [
			"Pour the cereal into a bowl.",
			"Add the juice.",
			"Add milk (optional).",
			"Top with fruit if desired."
		]
	},
	{
		Source: [
			"The Mormon Diet by Earl F. Updike",
			"A Word of Wisdom",
			"14 Days to New Vigor and Health"
		],
		name: "Wheatena Whole Wheat Hot Cereal",
		tags: "Cereal, Whole Wheat, Breakfast",
		//image:
		servings: "1",
		prepTime: "1 minute",
		cookTime: "3-5 minutes",
		ingredients: [
			"½ cup Wheatena",
			"1 ½ cups water"
		],
		note: "Microwave instructions are on the box.",
		directions: [
			"Place Wheatena and water into a saucepan and heat to a rapid boil, stirring occasionally.",
			"Cook 4-5 minutes over moderate heat or to desire consistency, stirring occasionally.",
			"Remove from heat; cover until ready to serve.",
			"Stir before serving. ",
			"Top off with an orange or banana. (optional)",
			"(I like fresh raspberries.)"
		]
	},
	{
		Source: [
				todaysmama.com/food/slow-cooker-cracked-wheat-recipe
		],
		name: "Slow Cooker Cracked Wheat Cereal",
		tags: "Cereal, Whole Wheat, Breakfast",
		image:"./images/crackedwheatcereal.jpg",
		servings: "4 -- 1/2 cup serving size",
		prepTime: "",
		cookTime: "",
		ingredients: [
			"white wheat berries (uncooked wheat grain)",
			"water",
			"pinch of salt (optional)"
		],
		note: "Toppings you can add milk brown sugar, honey, raisins, yogurt, fruit (I add fresh berries and plain greek yogurt).",
		directions: [
			"Plan your meal using a 1/2 cup cooked wheat as your serving size.",
			"Similar to rice, 1 cup of uncooked wheat will yield 4, 1/2-cup servings.",
			"Typlical water to wheat ratio is 3 to 1. For 4 servings, add 1 cup raw wheat to 3 cups of water in a slow cooker.",
			"Add a pinch of salt and cover.",
			"Cook on low for up 8-10 hours or overnight.",
			"Cereal will have puffed up and absorbed the majority ofthe water and cracked open to reveal buffy white insides of the wheat.",
			"If you prefer a firmer cereal, reduce the cooking time to 7-8 hours. I like my cereal soft but still squeky to chew."
		]
	},
];

export default recipes;
	// 
	// {
	// 	Source: [
	// 		"The Mormon Diet by Earl F. Updike",
	// 		"A Word of Wisdom",
	// 		"14 Days to New Vigor and Health"
	// 	],
	// 	name: "",
	// 	tags: "",
	// 	//image:
	// 	servings: "",
	// 	prepTime: "",
	// 	cookTime: "",
	// 	ingredients: [
	// 		"",
	// 		"",
	// 		""
	// 	],
	// 	note: "",
	// 	directions: [
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		""
	// 	]
	// },
// {
	// 	Source: [
	// 		"The Mormon Diet by Earl F. Updike",
	// 		"A Word of Wisdom",
	// 		"14 Days to New Vigor and Health"
	// 	],
	// 	name: "",
	// 	tags: "",
	// 	//image:
	// 	servings: "",
	// 	prepTime: "",
	// 	cookTime: "",
	// 	ingredients: [
	// 		"",
	// 		"",
	// 		""
	// 	],
	// 	note: "",
	// 	directions: [
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		""
	// 	]
	// },
	// {
	// 	Source: [
	// 		"The Mormon Diet by Earl F. Updike",
	// 		"A Word of Wisdom",
	// 		"14 Days to New Vigor and Health"
	// 	],
	// 	name: "",
	// 	tags: "",
	// 	//image:
	// 	servings: "",
	// 	prepTime: "",
	// 	cookTime: "",
	// 	ingredients: [
	// 		"",
	// 		"",
	// 		""
	// 	],
	// 	note: "",
	// 	directions: [
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		""
	// 	]
	// },
	// {
	// 	Source: [
	// 		"The Mormon Diet by Earl F. Updike",
	// 		"A Word of Wisdom",
	// 		"14 Days to New Vigor and Health"
	// 	],
	// 	name: "",
	// 	tags: "",
	// 	//image:
	// 	servings: "",
	// 	prepTime: "",
	// 	cookTime: "",
	// 	ingredients: [
	// 		"",
	// 		"",
	// 		""
	// 	],
	// 	note: "",
	// 	directions: [
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		""
	// 	]
	// },
	// {
	// 	Source: [
	// 		"The Mormon Diet by Earl F. Updike",
	// 		"A Word of Wisdom",
	// 		"14 Days to New Vigor and Health"
	// 	],
	// 	name: "",
	// 	tags: "",
	// 	//image:
	// 	servings: "",
	// 	prepTime: "",
	// 	cookTime: "",
	// 	ingredients: [
	// 		"",
	// 		"",
	// 		""
	// 	],
	// 	note: "",
	// 	directions: [
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		"",
	// 		""
	// 	]
	// },