import axios from "axios";
import type { Session, User, Placemark } from "$lib/types/placemark-types";


export const placemarkService = {
  baseUrl: "http://localhost:8010/proxy",

  async signup(user: User): Promise<boolean> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users`, user);
      return response.status == 201;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async login(email: string, password: string): Promise<Session | null> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        const session: Session = {
          name: response.data.name,
          token: response.data.token,
          _id: response.data.id
        };
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },


async getPlacemarks(session: Session): Promise<Placemark[]> {
  try {
    axios.defaults.headers.common["Authorization"] = session.token;
    const response = await axios.get(this.baseUrl + "/api/placemarks");
    console.log(session.token);
    return response.data;
  } catch (error) {
    return [];
  }
} ,

async createPlacemark(placemark: Placemark, session: Session) {
  try {
    axios.defaults.headers.common["Authorization"] = session.token;
    const response = await axios.post(this.baseUrl + "/api/placemarks", placemark);
    console.log(session.token);
    return response.status == 201;
  } catch (error) {
    return false;
  }
},

};