import React from 'react'
import PropTypes from 'prop-types'
const Profile = (props) => {


    return (<div>
        <p>{props.fullName}</p><p>{props.bio}</p><p>{props.profession}</p>
    <p>{props.children}</p>
    <button onClick={()=>props.myfunc(props.fullName)}>Alert</button>

    </div>
    );
}
Profile.propTypes={
    fullName:PropTypes.number,
    bio:PropTypes.string,
    profession:PropTypes.string,
    myfunc:PropTypes.func
};
Profile.defaultProps ={
    fullName:"tomas",
    bio:"shelby",
    profession:"pickeyBlindes",
    myfunc:()=>alert("default props")
};


export default Profile;
