import React from "react";
const StartMesage = ({ isLoading}) => {

    return (
        <div>
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (
            <h1>Welcome to the App!</h1>
        )}
        </div>
    );
}

export default StartMesage;

