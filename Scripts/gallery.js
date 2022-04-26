const Images = [
  {
    id: 21,
    image: "https://i.ibb.co/Wf0Jk4g/Metro-trains1-ALSO-HEADER.webp",
    location: "SW77th Ave Miami,FL",
    artist: "MUL",
    category: "transit",
  },
  {
    id: 1,
    image: "https://i.ibb.co/5hsycbW/Atomik.webp",
    location: "Wynwood",
    artist: "Atomik",
    category: "pieces",
  },
  {
    id: 2,
    image: "https://i.ibb.co/wyB5dNB/Miami-Style-Gods.webp",
    location: "Wynwood",
    artist: "MSG(Miami Style Gods)",
    category: "pieces",
  },
  {
    id: 3,
    image: "https://i.ibb.co/nLTyXDC/nemek.webp",
    location: "Wynwood NW 24th St",
    artist: "Nemek",
    category: "pieces",
  },
  {
    id: 4,
    image: "https://i.ibb.co/xCYcVSx/Quirk.webp",
    location: "Wynwood TriRail tracks",
    artist: "Quirk",
    category: "pieces",
  },
  {
    id: 5,
    image: "https://i.ibb.co/PFWsbJH/Reds.webp",
    location: "Wynwood NW 25th St",
    artist: "Reds",
    category: "pieces",
  },
  {
    id: 6,
    image: "https://i.ibb.co/z5WxsW1/Tesoe.webp",
    location: "Wynwood Miami Ave",
    artist: "Tesoe 004",
    category: "pieces",
  },
  {
    id: 7,
    image: "https://i.ibb.co/Vw7Q18K/Topoe.webp",
    location: "Topoe",
    artist: "Wynwood inbetween parking lot of NW 24th St & NW 25th St",
    category: "pieces",
  },
  {
    id: 8,
    image: "https://i.ibb.co/C0ChXgW/Vulgr.webp",
    location: "Wynwood NW 24th St",
    artist: "Vulgs",
    category: "pieces",
  },
  {
    id: 9,
    image: "https://i.ibb.co/K2w86C3/BUDA-EYE-U.webp",
    location: "Coral Gables by SW 42nd Ave & Bird Road",
    artist: "Buda and Eye<3U",
    category: "space",
  },
  {
    id: 10,
    image: "https://i.ibb.co/LPLVV3Y/public-bathroom.webp",
    location: "Veza Sur Brewery",
    artist: "Unknown",
    category: "space",
  },
  {
    id: 12,
    image: "https://i.ibb.co/TmpLy18/public-electric-box.webp",
    location: "NE 24th St",
    artist: "Unknown",
    category: "space",
  },
  {
    id: 13,
    image: "https://i.ibb.co/nb4hG39/public-parking.webp",
    location: "NW 25th St",
    artist: "Unknown",
    category: "space",
  },
  {
    id: 15,
    image: "https://i.ibb.co/jWC36PF/wreckognized-garbage-1.webp",
    location: "Parking lot inbetween NW 25th St & Nw 24th St",
    artist: "Unknown",
    category: "garbage",
  },
  {
    id: 16,
    image: "https://i.ibb.co/R2ZsHPn/wreckognized-garbage-2.webp",
    location: "Wakefield Brewery NW 24th St",
    artist: "Unknown",
    category: "garbage",
  },
  {
    id: 17,
    image: "https://i.ibb.co/tK7KxrS/wreckognized-garbage-3.webp",
    location: "40 NW 26th St",
    artist: "Unknown",
    category: "garbage",
  },
  {
    id: 18,
    image: "https://i.ibb.co/dK2MfLC/wreckognized-garbage-4.webp",
    location: "NW 23rd St",
    artist: "Unknown",
    category: "garbage",
  },
  {
    id: 19,
    image: "https://i.ibb.co/cJMxhS4/wreckognized-garbage-5.webp",
    location: "Nw 26th St",
    artist: "Unknown",
    category: "garbage",
  },
  {
    id: 20,
    image: "https://i.ibb.co/6ygPVWR/wreckognized-garbage-6.webp",
    location: "SE 3rd Ave",
    artist: "Unknown",
    category: "garbage",
  },
  {
    id: 22,
    image: "https://i.ibb.co/kBVp6vY/Metro-trains2.webp",
    location: "SW 77th Ave Miami,FL",
    artist: "Rafos",
    category: "transit",
  },
  {
    id: 23,
    image: "https://i.ibb.co/RDSpNT1/metro-train3.webp",
    location: "SW 77th Ave Miami,FL",
    artist: "Gios",
    category: "transit",
  },
  {
    id: 24,
    image: "https://i.ibb.co/RNxfydz/Metro-trains4.webp",
    location: "SW 77th Ave Miami, FL",
    artist: "Rague",
    category: "transit",
  },
  {
    id: 25,
    image: "https://i.ibb.co/ZK2CKyj/trains-5.webp",
    location: "Unknown",
    artist: "Apero & Trasr",
    category: "transit",
  },
  {
    id: 14,
    image: "https://i.ibb.co/3MVq69f/public-street-sign.webp",
    location:
      'Bouganvillea\'s Old Florida Tavern "Bougies" SW 58th Ave, South Miami FL',
    artist: "Unknown",
    category: "space",
  },
];

let currentCategory = "all";

const imageGallery = document.querySelector("#gallery-images");
const categoryItem = document.querySelectorAll(".category-item");

categoryItem.forEach((el) => {
  el.addEventListener("click", () =>
    changeCategory(el.getAttribute("data-categoryName"))
  );
});

const filterByCategory = (el) => {
  if (currentCategory === "all") {
    return el;
  }

  return el.category === currentCategory;
};

const showImage = () => {
  imageGallery.innerHTML = "";
  Images.filter(filterByCategory).forEach((el) => {
    const imageCard = `
    <div class="image-card">
      <img src=${el.image} alt="WRECKOGNIZED MIAMI" loading="eager" />
      <div>
        <p>Artist: ${el.artist}</p>
        <p>Location: ${el.location}</p>
      </div>
    </div>
    `;

    imageGallery.innerHTML += imageCard;
  });
};

const changeCategory = (category) => {
  currentCategory = category;
  showImage();
};

showImage();
