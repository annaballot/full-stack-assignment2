export interface Session {
    name: string;
    _id: string;
    token: string;
  }
  
  export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id?: string;
  }

  export interface Placemark {
    name: string;
    category: string;
    description: string;
    latitude: number;
    longitude: number;
    rating: number;
    img: string;
  } 