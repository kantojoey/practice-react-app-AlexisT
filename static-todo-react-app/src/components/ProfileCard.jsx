import React from "react";

const ProfileCard = ({name, age, bio})=>{
    return(
        <div>
    <h4>Name: {name}</h4>
    <h4>Age: {age}</h4>
    <h4>Bio: {bio}</h4>
    </div>
    );
};

export default ProfileCard;