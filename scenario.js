/* =========================================================
   SCENARIO SCRIPT DATA: JAPANESE-AMERICAN Hamburger (FULL)
   ========================================================= */
const script = [
  // -------------------------------------------------------
  // CHAPTER 1: AFTERNOON REFLECTIONS & THE PHONE CALL
  // -------------------------------------------------------
  {
    bg: "room_day",
    bgm: "peaceful",
    speaker: "",
    sprite1: null,
    sprite2: null,
    item: null,
    text: "The warm golden autumn sun spilled across the tatami mats, casting long, peaceful shadows into the room."
  },
  {
    speaker: "Japan",
    text: "The autumn breeze has taken on a crisp edge over the past few days. The leaves on the maples outside are just beginning to turn red."
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "normal", pos: "center" },
    text: "On days like this, my appetite craves something hearty and nostalgic... 'Yoshoku', Japanese-style Western comfort food."
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "smile", pos: "center" },
    text: "When Western dining first arrived in Japan during the Meiji era, our chefs adapted those foreign recipes to complement Japanese rice. It holds a very warm place in our hearts."
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "normal", pos: "center" },
    text: "Cooking a full Hamburger steak feast for just myself feels a bit quiet, however... Perhaps I should invite Alfred-san over for dinner."
  },
  {
    sfx: "phone",
    bg: "room_day2",
    speaker: "",
    text: "*Kiku picks up the rotary phone on his desk and dials Alfred's number. The line rings twice before picking up with loud, cheerful energy.*"
  },
  {
    speaker: "America",
    text: "YO KIKU!! What's up, my guy?! You caught me right in the middle of gaming!"
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "smile", pos: "center" },
    text: "Good afternoon, Alfred-san. I hope I am not interrupting your game. I was wondering if you had dinner plans for this evening?"
  },
  {
    speaker: "America",
    text: "Dinner?! Dude, my stomach is literally starving right now! What are we talking about?!"
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "normal", pos: "center" },
    text: "I was planning to prepare Japanese Hamburger steaks, tender beef and pork patties glazed in a rich demiglace-soy reduction, served with hot steamed rice."
  },
  {
    speaker: "America",
    text: "HAMBURGER STEAKS WITH DEMI-SOMETHING?! DUDE!! I'm not sure, but that's gotta like the ultimate combination of American burger culture and Japanese food! I am SO there!"
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "smile", pos: "center" },
    text: "Excellent. Let us meet at the local shotengai market street first so we can gather the freshest minced meats and ingredients together."
  },
  {
    speaker: "America",
    text: "Shopping for food with Kiku?! Hell yeah! See you there in a few minutes!"
  },

  // -------------------------------------------------------
  // CHAPTER 2: MARKET STREET SHOPPING (SHOUTENGAI)
  // -------------------------------------------------------
  {
    bg: "market_street",
    bgm: "shopping",
    speaker: "",
    sprite1: null,
    sprite2: null,
    item: null,
    text: "The local shopping street was bustling with evening shoppers, filled with the delicious aromas of fresh bakeries and roasted tea."
  },
  {
    speaker: "America",
    sprite1: { character: "kiku", expr: "normal", pos: "left" },
    sprite2: { character: "alfred", expr: "grin", pos: "right" },
    text: "HEY KIKU! Over here! Man, this street is awesome! Look at that butcher counter—why does that ground meat tray say 'Aibikiniiku'?"
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "smile", pos: "left" },
    text: "Aibikiniiku is a custom Japanese butcher blend of 70% minced beef and 30% minced pork."
  },
  {
    speaker: "Japan",
    text: "The beef delivers deep, beefy flavor, while the pork fat melts at a lower temperature to keep the patty incredibly tender and juicy."
  },
  {
    speaker: "America",
    sprite2: { character: "alfred", expr: "grin", pos: "right" },
    text: "Mixing beef AND pork in one patty?! Genius! Get us the biggest tray they have!"
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "normal", pos: "left" },
    text: "We will also need sweet yellow onions, fresh flaky Panko breadcrumbs, milk, eggs, nutmeg, red wine, and tonkatsu sauce for our demiglace glaze."
  },
  {
    speaker: "America",
    sprite2: { character: "alfred", expr: "curious", pos: "right" },
    text: "Red wine and tonkatsu sauce for the glaze? Maaan, my mouth is watering already! Let's haul these groceries back to your kitchen!"
  },

  // -------------------------------------------------------
  // CHAPTER 3: KITCHEN PREPARATION & COOKING MINI-GAME
  // -------------------------------------------------------
  {
    bg: "kitchen_cooking",
    bgm: "kitchen",
    speaker: "",
    sprite1: null,
    sprite2: null,
    item: null,
    text: "Back in Kiku's spotless kitchen, both of them prepare to cook."
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "normal", pos: "center" },
    text: "Okay, we'll start now. Thanks for bringing the stuff for me."
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "normal", pos: "right" },
    item: "assets/items/chopped_onions.png",
    text: "First, we slice the yellow onions into fine mince and sauté them gently in butter until caramel-sweet and translucent."
  },
  {
    speaker: "America",
    sprite1: { character: "kiku", expr: "normal", pos: "left" },
    sprite2: { character: "alfred", expr: "grin", pos: "right" },
    item: "assets/items/ground_meat.png",
    text: "Alright! The sauteed onions have cooled down, and we've got the beef and pork blend mixed in the bowl! What's our next secret trick for juicy patties, Kiku? *Pick the correct answer."
  },

  // COOKING CHOICE 1
  {
    type: "choice",
    choices: [
      { text: "Mix Panko breadcrumbs soaked in milk with sauteed onions and nutmeg.", target: "cook_correct1" },
      { text: "Add dry flour and raw uncooked onions straight into the meat mix.", target: "cook_wrong1" },
      { text: "Pour chocolate syrup and pancake mix into the raw meat.", target: "cook_wrong2" }
    ]
  },

  // WRONG CHOICE 1
  {
    label: "cook_wrong1",
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "sweat", pos: "left" },
    sprite2: { character: "alfred", expr: "curious", pos: "right" },
    item: "assets/items/ground_meat.png",
    text: "Ah... if we use raw onions and dry flour, the raw onion moisture will cause the patty to crack open and dry out while searing."
  },
  {
    speaker: "America",
    sprite2: { character: "alfred", expr: "grin", pos: "right" },
    text: "Whoops! Good thing Chef Kiku caught that before we ruined the meat!"
  },
  {
    jump: "cook_correct1"
  },

  // WRONG CHOICE 2
  {
    label: "cook_wrong2",
    speaker: "America",
    sprite1: { character: "kiku", expr: "sweat", pos: "left" },
    sprite2: { character: "alfred", expr: "curious", pos: "right" },
    item: "assets/items/ground_meat.png",
    text: "Wait, chocolate syrup and pancake mix?! Kiku, are we inventing a dessert burger?!"
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "sweat", pos: "left" },
    text: "No, Alfred-san! That would be a sweet disaster. Let us stick to milk-soaked Panko breadcrumbs."
  },
  {
    jump: "cook_correct1"
  },

  // STEP 2: SHAPING THE PATTY
  {
    label: "cook_correct1",
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "smile", pos: "left" },
    sprite2: { character: "alfred", expr: "grin", pos: "right" },
    item: "assets/items/ground_meat.png",
    text: "Precisely! Soaking Panko in milk creates a panade matrix that traps the meat juices inside the patty."
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "normal", pos: "left" },
    item: "assets/items/Hamburger_pan.png",
    text: "Now, Alfred-san, how should we shape the patty before placing it onto the hot iron skillet?"
  },

  // COOKING CHOICE 2
  {
    type: "choice",
    choices: [
      { text: "Slap the patty between hands to release air pockets, then make a dimple in the center.", target: "cook_correct2" },
      { text: "Roll it into a hard, solid baseball sphere so it stays thick.", target: "cook_wrong3" }
    ]
  },

  // WRONG CHOICE 3
  {
    label: "cook_wrong3",
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "sweat", pos: "left" },
    sprite2: { character: "alfred", expr: "curious", pos: "right" },
    item: "assets/items/Hamburger_pan.png",
    text: "If we leave it as a thick sphere without removing air pockets, steam trapped inside will make the meat explode open in the skillet."
  },
  {
    jump: "cook_correct2"
  },

  // SEARING & GLAZING
  {
    label: "cook_correct2",
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "smile", pos: "left" },
    sprite2: { character: "alfred", expr: "grin", pos: "right" },
    item: "assets/items/Hamburger_pan.png",
    text: "Spot on! Pressing a shallow dimple in the center prevents the patty from puffing up into a ball while cooking, ensuring even searing."
  },
  {
    sfx: "sizzle",
    speaker: "",
    item: "assets/items/Hamburger_pan.png",
    text: "*Ssssssss! The patties sear on high heat until golden brown, then steam under a lid with red wine, ketchup, and soy demiglace glaze.*"
  },

  // -------------------------------------------------------
  // CHAPTER 4: EVENING FEAST & UNLOCKING CG
  // -------------------------------------------------------
  {
    bg: "tatami_dinner",
    bgm: "peaceful",
    speaker: "",
    sprite1: null,
    sprite2: null,
    box: true,
    item: "assets/items/Hamburger_dish.png",
    // UNLOCK CG GALLERY EVENT
    cgUnlock: {
      id: "cg_Hamburger_feast",
      title: "Japanese Hamburger Feast",
      src: "assets/items/Hamburger_dish.png"
    },
    text: "Plated alongside warm steamed rice, glazed butter carrots, and hot miso soup, the Japanese Hamburger steaks glistened with rich savory demiglace sauce."
  },
  {
    bg: "tatami_dinner",
    speaker: "America",
    sprite1: { character: "kiku", expr: "smile", pos: "left" },
    sprite2: { character: "alfred", expr: "grin", pos: "right" },
    item: "assets/items/Hamburger_dish.png",
    text: "MAN THIS LOOKS ABSOLUTELY INCREDIBLE!! Look at that glossy glaze!"
  },
  {
    speaker: "America",
    sprite2: { character: "alfred", expr: "grin", pos: "right" },
    item: null,
    text: "*Nom!* OH WOW!! It literally melts in your mouth! The tender beef-pork mix with the sweet savory sauce goes SO insanely well with Japanese rice!"
  },
  {
    speaker: "Japan",
    sprite1: { character: "kiku", expr: "smile", pos: "left" },
    text: "I am delighted to hear that, Alfred-san. Please, eat as much as you like. There are plenty of seconds."
  },
  {
    speaker: "",
    sprite1: null,
    sprite2: null,
    text: "Laughter and warm conversation filled the evening room as the two friends enjoyed the homemade feast late into the night."
  },
  {
    type: "end",
    bg: "tatami_dinner"
  }
];