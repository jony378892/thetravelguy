export interface TravelData {
  id: number;
  image: string;
  title: string;
  country: string;
  description: {
    safety: string;
    travel_guide: string;
    local_food: string;
    language_tip: string;
    currency_info: string;
  };
  experience: string;
}
