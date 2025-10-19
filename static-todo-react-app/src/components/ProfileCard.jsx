import React from "react";

const ProfileCard = ({ name, age, bio }) => {
    return (
        <div className = "profile-card">
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
};

export default ProfileCard;