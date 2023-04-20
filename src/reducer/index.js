import { combineReducers } from "redux";
import educationData from "./education/educationData";
import profileData from "./profile/profileData";
import projectsData from "./project/projectData";
import skillsData from "./skills/skillsData";
import socialData from "./social/socialData";


export default combineReducers({
    education : educationData,
    profile: profileData,
    skills: skillsData,
    social: socialData,
    project: projectsData
});
