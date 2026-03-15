export type Cast = {
  id: number;
  name: string; 
  character: string;
  profile_path: string | null;
};

export type CreditsResponse = {
  id: number;
  cast: Cast[];
};