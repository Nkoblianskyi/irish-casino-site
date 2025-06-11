export interface Casino {
  name: string
  url: string
  bonus: string
  logo: string
  rating: number
  votes: number
  featured?: boolean
  trending?: boolean
  editorsPick?: boolean
}

// This is a fallback in case the fetch fails
const fallbackCasinos: Casino[] = [
  {
    name: "Betiton",
    url: "https://www.betiton.com/en-ie/",
    bonus: "100% up to €500 + 150 Spins",
    logo: "/betiton.png",
    rating: 5,
    votes: 631,
    featured: true,
    editorsPick: true,
  },
  {
    name: "BetVictor",
    url: "https://www.betvictor.com/en-ie",
    bonus: "Bet €10 Get €30 + 30 Free Spins",
    logo: "/betvictor.png",
    rating: 5,
    votes: 42582,
    featured: true,
    editorsPick: true,
  },
  {
    name: "Midnite",
    url: "https://www.midnite.com/",
    bonus: "Bet €20 Get 100 Free Spins",
    logo: "/mid.svg",
    rating: 5,
    votes: 38712,
    featured: true,
    editorsPick: true,
  },
  {
    name: "Mr.Play",
    url: "https://ie.mrplay.com/",
    bonus: "100% up to €200 + 20 EXTRA SPINS",
    logo: "/mrplay.png",
    rating: 4.9,
    votes: 37510,
  },
  {
    name: "BoyleSports Games",
    url: "https://www.boylesports.com/",
    bonus: "Bet €10 Get €50 Casino Bonus",
    logo: "/boyle.png",
    rating: 4.8,
    votes: 34560,
    trending: true,
  },
  {
    name: "BetFred",
    url: "https://www.betfred.com/",
    bonus: "Bet €10 Get 200 Free Spins",
    logo: "/betfred.png",
    rating: 4.8,
    votes: 32478,
    trending: true,
  },
]

export const casinos: Casino[] = fallbackCasinos

// In a real application, you would fetch the data like this:
// export async function getCasinos(): Promise<Casino[]> {
//   try {
//     const response = await fetch('/data/casinos.json');
//     if (!response.ok) {
//       throw new Error('Failed to fetch casino data');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching casino data:', error);
//     return fallbackCasinos;
//   }
// }
