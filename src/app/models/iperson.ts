import { Gender } from "./enums/gender";
import { IHobbies } from "./ihobbies";
import { IUser } from "./iuser";

export interface IPerson {
    user : IUser;
    pseudo : string;
    bio : string;
    gender : Gender;
    matchesgender? : Gender;
    eyescolor? : string;
    haircolor? : string;
    size? : number;
    weight? : number;
    hobbies : IHobbies; 
}
