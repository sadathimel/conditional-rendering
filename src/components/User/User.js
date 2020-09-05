import React from "react";

const User = (props) => {
  const familiar = props.familiar;
  let greetings;
  if (familiar) {
    greetings = <p>Welcome, my friend</p>;
  } else {
    greetings = <p>Who the hell are you?</p>;
  }

  //   greetings = familiar ? (
  //     <p>I will buy food for you</p>
  //   ) : (
  //     <p>Lets eat his whose whose?</p>
  //   );
  return (
    <div>
      <div>
        <h1>Greetings</h1>
        {greetings}
      </div>
      <div>
        <h2>Food</h2>

        {familiar ? (
          <p>I will buy food for you</p>
        ) : (
          <p>Lets eat his whose whose?</p>
        )}
      </div>
      <div>
        <h2>Connection</h2>
        {familiar && <p>Let.s Join my facebook</p>}
      </div>
    </div>
  );
};

export default User;
