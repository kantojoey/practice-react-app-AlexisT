import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileContainer = ({profiles}) => {
    return(
        <div className = "profile-container">
            {profiles.map((profile) => <ProfileCard name = {profile.name} age = {profile.age} bio = {profile.bio} />)}
        </div>
    )
}


export default ProfileContainer;