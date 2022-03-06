import { User } from "../@types/user";
import { countriesList } from "./countriesList";

export const users: User[] = [
  {
    name: "Ali Jad",
    id: "123",
    buildingList: [countriesList[1], countriesList[2]],
  },

  {
    name: "Meme Smith",
    id: "312",
    buildingList: [
      countriesList[1],
      countriesList[2],
      countriesList[32],
      countriesList[14],
    ],
  },
  {
    name: "Mado Well",
    id: "121323",
    buildingList: [countriesList[41], countriesList[16], countriesList[17]],
  },
  {
    name: "Mohd Bill",
    id: "123fdsvc",
    buildingList: [countriesList[32], countriesList[144], countriesList[110]],
  },
  {
    name: "John Doe",
    id: "12dq234r3",
    buildingList: [countriesList[22], countriesList[21]],
  },
  {
    name: "Jane Dived",
    id: "1254t3",
    buildingList: [countriesList[15], countriesList[66], countriesList[65]],
  },
  {
    name: "Nadia Milad",
    id: "12323",
    buildingList: [
      countriesList[53],
      countriesList[16],
      countriesList[77],
      countriesList[78],
      countriesList[99],
      countriesList[85],
    ],
  },
];
