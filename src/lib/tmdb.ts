const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function fetchTMDB<T>(endpoint: string): Promise<T> {
  const res = await fetch(
    `${BASE_URL}${endpoint}?api_key=${API_KEY}`
  )

  if (!res.ok) {
    throw new Error("TMDB API Error")
  }

  return res.json()
}