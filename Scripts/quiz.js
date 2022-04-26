const Quizes = [
  {
    id: 21,
    image: "https://i.ibb.co/Wf0Jk4g/Metro-trains1-ALSO-HEADER.webp",
    location: "SW77th Ave Miami,FL",
    artist: "MUL",
    category: "transit",
    options: ["MUL", "Atomik", "MSG(Miami Style Gods)", "Nemek"],
  },
  {
    id: 1,
    image: "https://i.ibb.co/5hsycbW/Atomik.webp",
    location: "Wynwood",
    artist: "Atomik",
    category: "pieces",
    options: ["MUL", "Atomik", "MSG(Miami Style Gods)", "Nemek"],
  },
  {
    id: 2,
    image: "https://i.ibb.co/wyB5dNB/Miami-Style-Gods.webp",
    location: "Wynwood",
    artist: "MSG(Miami Style Gods)",
    category: "pieces",
    options: ["Topoe", "Atomik", "MSG(Miami Style Gods)", "Nemek"],
  },
  {
    id: 3,
    image: "https://i.ibb.co/nLTyXDC/nemek.webp",
    location: "Wynwood NW 24th St",
    artist: "Nemek",
    category: "pieces",
    options: ["Topoe", "Atomik", "Tesoe 004", "Nemek"],
  },
  {
    id: 4,
    image: "https://i.ibb.co/xCYcVSx/Quirk.webp",
    location: "Wynwood TriRail tracks",
    artist: "Quirk",
    category: "pieces",
    options: ["Quirk", "Atomik", "Tesoe 004", "Nemek"],
  },
  {
    id: 5,
    image: "https://i.ibb.co/PFWsbJH/Reds.webp",
    location: "Wynwood NW 25th St",
    artist: "Reds",
    category: "pieces",
    options: ["Quirk", "Reds", "Tesoe 004", "Topoe"],
  },
  {
    id: 6,
    image: "https://i.ibb.co/z5WxsW1/Tesoe.webp",
    location: "Wynwood Miami Ave",
    artist: "Tesoe 004",
    category: "pieces",
    options: ["Quirk", "Vulgs", "Tesoe 004", "Topoe"],
  },
  {
    id: 7,
    image: "https://i.ibb.co/Vw7Q18K/Topoe.webp",
    location: "Topoe",
    artist: "Wynwood inbetween parking lot of NW 24th St & NW 25th St",
    category: "pieces",
    options: ["Quirk", "Vulgs", "Tesoe 004", "Topoe"],
  },
  {
    id: 8,
    image: "https://i.ibb.co/C0ChXgW/Vulgr.webp",
    location: "Wynwood NW 24th St",
    artist: "Vulgs",
    category: "pieces",
    options: ["Atomik", "Vulgs", "Tesoe 004", "Topoe"],
  },
  {
    id: 9,
    image: "https://i.ibb.co/K2w86C3/BUDA-EYE-U.webp",
    location: "Coral Gables by SW 42nd Ave & Bird Road",
    artist: "Buda and Eye<3U",
    category: "space",
    options: ["Atomik", "Vulgs", "Buda and Eye<3U", "Topoe"],
  },
  {
    id: 22,
    image: "https://i.ibb.co/kBVp6vY/Metro-trains2.webp",
    location: "SW 77th Ave Miami,FL",
    artist: "Rafos",
    category: "transit",
    options: ["Atomik", "Vulgs", "Buda and Eye<3U", "Rafos"],
  },
  {
    id: 23,
    image: "https://i.ibb.co/RDSpNT1/metro-train3.webp",
    location: "SW 77th Ave Miami,FL",
    artist: "Gios",
    category: "transit",
    options: ["Atomik", "Gios", "Buda and Eye<3U", "Rafos"],
  },
  {
    id: 24,
    image: "https://i.ibb.co/RNxfydz/Metro-trains4.webp",
    location: "SW 77th Ave Miami, FL",
    artist: "Rague",
    category: "transit",
    options: ["Vulgs", "Gios", "Buda and Eye<3U", "Rague"],
  },
  {
    id: 25,
    image: "https://i.ibb.co/ZK2CKyj/trains-5.webp",
    location: "Unknown",
    artist: "Apero & Trasr",
    category: "transit",
    options: ["Vulgs", "Gios", "Buda and Eye<3U", "Apero & Trasr"],
  },
];

let currentQuiz = 0;
let points = 0;
let showScore = false;

// HTML Elements
const quizParent = document.querySelector("#quiz");

// Next Quiz
const nextQuiz = (guess, ans) => {
  if (currentQuiz < Quizes.length - 1) {
    currentQuiz += 1;
  }

  if (currentQuiz === Quizes.length - 1) {
    showScore = true;
  }

  if (guess.toString() === ans.toString()) {
    points += 1;
  }

  showQuiz();
};

const showQuiz = () => {
  quizParent.innerHTML = "";
  if (showScore === true) {
    quizParent.innerHTML = `
    <div class="score">
      <h1>
        You Answered Correctly ${points} out of ${Quizes.length}!
      </h1>
    </div>
`;
    return;
  }
  quizParent.innerHTML = `
  <div>
    <img src=${Quizes[currentQuiz].image} alt="quiz" />
    <div>
    <button  onclick="nextQuiz('${Quizes[currentQuiz].options[0]}', '${Quizes[currentQuiz].artist}')">
      ${Quizes[currentQuiz].options[0]}
    </button>
    <button  onclick="nextQuiz('${Quizes[currentQuiz].options[1]}', '${Quizes[currentQuiz].artist}')">
      ${Quizes[currentQuiz].options[1]}
    </button>
    <button  onclick="nextQuiz('${Quizes[currentQuiz].options[2]}', '${Quizes[currentQuiz].artist}')">
      ${Quizes[currentQuiz].options[2]}
    </button>
    <button  onclick="nextQuiz('${Quizes[currentQuiz].options[3]}', '${Quizes[currentQuiz].artist}')">
      ${Quizes[currentQuiz].options[3]}
    </button>

    </div>
  </div>
`;
};

showQuiz();
