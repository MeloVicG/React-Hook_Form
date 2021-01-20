import React from "react"

const Results = (props) => {
    //this is redundant
    // const {data} = props;
    const { firstName, lastName, email, password, confirmPassword} = props.data;
    return(
        <div>
            <h3>Results</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>confirm Password: {confirmPassword}</p>
        </div>
    );
} ;

export default Results