import React from 'react';

import MediaCard from './MediaCard';

function App() {
  return (
    <div><MediaCard title = {<h1>The Title</h1>} body = {<b>This is the body text</b>} imageURL = 'https://daveceddia.com/images/social-card.png'/>
    </div>
  );
}

export default App;
