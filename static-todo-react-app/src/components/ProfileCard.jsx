import React from "react";

const ProfileCard = ({name, age, bio})=>{
    return(
        <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Bio: {bio}</p>
    </div>
    );
};

export default ProfileCard;