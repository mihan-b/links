// Define the levels
const levels = [
  {
    level: 1,
    image1: "linksimages/angel.jpg",
    image2: "linksimages/bluejay.jpg",
    image3: "linksimages/pirate.jpg",
    answer1: "mlb teams",
    answer2: "baseball teams",
    answer3: "mlb",
    answer4: "baseball",
    answer5: "Mihan is awesome",
    message: "The Angels, Blue Jays, and Pirates are MLB teams",
    hint: "Take me out to the..."
  },
  {
    level: 2,
    image1: "linksimages/daisy.jpg",
    image2: "linksimages/peach.jpg",
    image3: "linksimages/toad.jpg",
    answer1: "mario characters",
    answer2: "mario kart characters",
    answer3: "mario",
    answer4: "mario kart",
    answer5: "Mihan is awesome",
    message: "Daisy, Peach, and Toad are characters from Mario",
    hint: "Its a me a..."
  },
  {
    level: 3,
    image1: "linksimages/bush.jpg",
    image2: "linksimages/ford.jpg",
    image3: "linksimages/kennedy.jpg",
    answer1: "us presidents",
    answer2: "presidents",
    answer3: "u.s presidents",
    answer4: "past presidents",
    answer5: "Mihan is awesome",
    message: "George Bush, Gerald Ford, and John F. Kennedy are US presidents",
    hint: "Kennedy station is named after the Kennedy family that came to Scarborough in the 1850s, not the more famous Kennedys"
},
{
  level: 4,
  image1: "linksimages/brusselsprouts.jpg",
  image2: "linksimages/doubling.jpg",
  image3: "linksimages/roaming.jpg",
  answer1: "european cities",
  answer2: "cities",
  answer3: "cities in europe",
  answer4: "europe capitals",
  answer5: "Mihan is awesome",
  message: "Brussels, Dublin, and Rome are cities in Europe",
  hint: "When in... Roam?"
},
{
  level: 5,
  image1: "linksimages/escape.jpg",
  image2: "linksimages/focus.jpg",
  image3: "linksimages/mustang.jpg",
  answer1: "ford cars",
  answer2: "ford models",
  answer3: "ford",
  answer4: "car models",
  answer5: "Mihan is awesome",
  message: "The Escape, Focus, and Mustang are models of Ford cars",
  hint: "Just *focus* really hard and you'll get this one"
},
{
  level: 6,
  image1: "linksimages/hawkeye.jpg",
  image2: "linksimages/iron.jpg",
  image3: "linksimages/spider.jpg",
  answer1: "marvel",
  answer2: "marvel superheroes",
  answer3: "avengers",
  answer4: "superheroes",
  answer5: "Mihan is awesome",
  message: "Hawkeye, Iron Man, and Spiderman are Marvel superheroes",
  hint: "A hawk's vision is 8 times more powerful than a human's"
},
{
  level: 7,
  image1: "linksimages/rocket.jpg",
  image2: "linksimages/sun.jpg",
  image3: "linksimages/wizard.jpg",
  answer1: "nba teams",
  answer2: "basetball teams",
  answer3: "nba",
  answer4: "basketball",
  answer5: "Mihan is awesome",
  message: "The Rockets, Suns, and Wizards are NBA teams",
  hint: "CP3 has been on all 3 (technically)"
},
{
  level: 8,
  image1: "linksimages/aviators.jpg",
  image2: "linksimages/titanic.jpg",
  image3: "linksimages/wolf.jpg",
  answer1: "leonardo dicaprio movies",
  answer2: "leo movies",
  answer3: "leonardo dicaprio",
  answer4: "leo",
  answer5: "Mihan is awesome",
  message: "The Aviator, Titanic, and the Wolf of Wall Street are Leonardo DiCaprio movies",
  hint: "Imagine seeing a wolf on the streets of New York"
},
{
  level: 9,
  image1: "linksimages/atlantis.jpg",
  image2: "linksimages/challenger.jpg",
  image3: "linksimages/discovery.jpg",
  answer1: "nasa space shuttles",
  answer2: "space shuttles",
  answer3: "nasa",
  answer4: "rockets",
  answer5: "Mihan is awesome",
  message: "Atlantis, Challenger, and Discovery are NASA space shuttles",
  hint: "To infinity and beyond"
},
{
  level: 10,
  image1: "linksimages/badblood.jpg",
  image2: "linksimages/blankspace.jpg",
  image3: "linksimages/shakeitoff.jpg",
  answer1: "taylor swift songs",
  answer2: "taylor swift",
  answer3: "swift songs",
  answer4: "songs",
  answer5: "Mihan is awesome",
  message: "Bad Blood, Blank Space, and Shake it Off are Taylor Swift songs",
  hint: "Yes all the images loaded, it's just a blank space"
},
{
  level: 11,
  image1: "linksimages/apollo.jpg",
  image2: "linksimages/hermes.jpg",
  image3: "linksimages/zoos.jpg",
  answer1: "greek gods",
  answer2: "gods",
  answer3: "greek mythology",
  answer4: "mythology",
  answer5: "Mihan is awesome",
  message: "Apollo, Hermes, and Zeus are Greek gods",
  hint: "Apollo 11 brought Neil Armstrong and Buzz Aldrin to the moon on July 20, 1969"
},
{
  level: 12,
  image1: "linksimages/american.jpg",
  image2: "linksimages/blue.jpg",
  image3: "linksimages/brie.jpg",
  answer1: "cheese",
  answer2: "types of cheese",
  answer3: "cheese types",
  answer4: "cheese flavours",
  answer5: "Mihan is awesome",
  message: "American, Blue, and Brie are types of cheese",
  hint: "The role of Captain Marvel is played by Brie Larson"
},
{
  level: 13,
  image1: "linksimages/bishop.jpg",
  image2: "linksimages/knight.jpg",
  image3: "linksimages/pawn.jpg",
  answer1: "chess pieces",
  answer2: "chess",
  answer3: "pieces in chess",
  answer4: "chess characters",
  answer5: "Mihan is awesome",
  message: "The bishop, knight, and pawn are chess pieces",
  hint: "Bishops are responsible for districts called dioceses"
},
{
  level: 14,
  image1: "linksimages/drake.jpg",
  image2: "linksimages/harry.jpg",
  image3: "linksimages/ron.jpg",
  answer1: "harry potter characters",
  answer2: "harry potter",
  answer3: "hogwarts students",
  answer4: "hogwarts",
  answer5: "Mihan is awesome",
  message: "Draco, Harry, and Ron are Harry Potter characters",
  hint: "Its Avada Kedavra, not Abracadabra"
},
{
  level: 15,
  image1: "linksimages/bull.jpg",
  image2: "linksimages/chihuahua.jpg",
  image3: "linksimages/shepherd.jpg",
  answer1: "dog breeds",
  answer2: "dogs",
  answer3: "types of dogs",
  answer4: "breeds of dogs",
  answer5: "Mihan is awesome",
  message: "Bulldogs, chihuahuas, and shepherds are dog breeds",
  hint: "Chihuahua, the largest state in Mexico, is slightly larger than the United Kingdom"
},
{
  level: 16,
  image1: "linksimages/cars.jpg",
  image2: "linksimages/ratatouille.jpg",
  image3: "linksimages/up.jpg",
  answer1: "pixar movies",
  answer2: "disney movies",
  answer3: "pixar",
  answer4: "movies",
  answer5: "Mihan is awesome",
  message: "Cars, Ratatouille, and Up are Pixar movies",
  hint: "The porttion size was fit for a rat too"
},
{
  level: 17,
  image1: "linksimages/charger.jpg",
  image2: "linksimages/lion.jpg",
  image3: "linksimages/viking.jpg",
  answer1: "nfl teams",
  answer2: "football teams",
  answer3: "nfl",
  answer4: "football",
  answer5: "Mihan is awesome",
  message: "The Chargets, Lions and Vikings are NFL teams",
  hint: "Vikings were 8th to 11th century Scandinavian pirates and raiders"
},
{
  level: 18,
  image1: "linksimages/dark.jpg",
  image2: "linksimages/milk.jpg",
  image3: "linksimages/white.jpg",
  answer1: "types of chocolate",
  answer2: "chocolate types",
  answer3: "chocolate flavours",
  answer4: "chocolate",
  answer5: "Mihan is awesome",
  message: "Dark, milk, and white are types of chocolate",
  hint: "Nyctophobia is an extreme fear of the *dark*"
},
{
  level: 19,
  image1: "linksimages/bell.jpg",
  image2: "linksimages/jasmine.jpg",
  image3: "linksimages/snow.jpg",
  answer1: "disney princesses",
  answer2: "princesses",
  answer3: "disney",
  answer4: "movie princesses",
  answer5: "Mihan is awesome",
  message: "Belle, Jasmine, and Snow White are Disney princesses",
  hint: "Jasmine flowers are famous for their fragrance"
},
{
  level: 20,
  image1: "linksimages/bank.jpg",
  image2: "linksimages/michaelangelo.jpg",
  image3: "linksimages/van.jpg",
  answer1: "famous artists",
  answer2: "artists",
  answer3: "famous painters",
  answer4: "painters",
  answer5: "Mihan is awesome",
  message: "Banksy, Michaelangelo, and Van Gogh are famous artists",
  hint: "Where is that Van Going?"
}
];

let currentLevel = 0;

// Function to load the current level
function loadLevel(level) {
  const currentLevelData = levels[level - 1];

  document.getElementById("level").textContent = currentLevelData.level;

  // Update the images
  document.getElementById("image1").src = currentLevelData.image1;
  document.getElementById("image2").src = currentLevelData.image2;
  document.getElementById("image3").src = currentLevelData.image3;

  // Clear the input field
  document.getElementById("answer-input").value = "";

  // Remove any existing event listeners
  document.getElementById("submit-button").removeEventListener("click", checkAnswer);
  document.getElementById("hint-button").removeEventListener("click", revealHint);

  // Add event listeners to the buttons
  document.getElementById("submit-button").addEventListener("click", checkAnswer);
  document.getElementById("hint-button").addEventListener("click", revealHint);
}

// Function to reveal hint
function revealHint() {
  const currentLevelData = levels[currentLevel];
  document.getElementById("hint").textContent = currentLevelData.hint;
}

// Function to check the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById("answer-input").value.toLowerCase();
  const currentLevelData = levels[currentLevel];

  if (userAnswer == currentLevelData.answer1 || userAnswer == currentLevelData.answer2 || userAnswer == currentLevelData.answer3 || userAnswer == currentLevelData.answer4 || userAnswer == currentLevelData.answer5){
      document.getElementById("message").textContent = currentLevelData.message
      document.getElementById("hint").textContent = "";
      currentLevel++;

      if (currentLevel < levels.length) {
          loadLevel(currentLevel + 1);
      } else {
          document.getElementById("message").textContent = "Congratulations! You completed all levels.";
      }
  } else {
      document.getElementById("hint").textContent = "Get a hint or try again!";
  }
}

// Load the first level
loadLevel(1);