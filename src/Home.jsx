import React, { useState } from 'react';

function Home() {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default white background

  

  return (
    <div style={{ padding: '20px', borderRadius: '10px' ,height: "10vh",margin: "30px"}}>
   
      <img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 280,margin: "50px" }}
                  
								/>
         <h3>Hi, good morning</h3>
    </div>
  );
}

export default Home;
