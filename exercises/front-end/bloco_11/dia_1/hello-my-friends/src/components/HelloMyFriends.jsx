import React from 'react';

function HelloMyFriends() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}


setInterval(HelloMyFriends, 1000);

export default HelloMyFriends