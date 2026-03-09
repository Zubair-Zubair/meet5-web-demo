export interface User {
  id: number;
  name: string;
  avatar?: string; // URL of uploaded image
}

export interface Activity {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  participants: User[]; // array of joined users
  maxParticipants: number;
}