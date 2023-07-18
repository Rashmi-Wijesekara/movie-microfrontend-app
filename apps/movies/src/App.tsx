import React from 'react';
import './App.css';
import { AppShell } from 'ui';

function App() {
  return (
    <AppShell
      title='Movies'
      // colorScheme='dark'
      routes={[
        {
          path: '/',
          element: () => <div>Home</div>
        },
        {
          path: '/playlist',
          element: () => <div>Playlist</div>
        }
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/"
        },
        {
          label: "Playlist",
          path: "/playlist"
        }
      ]}
    />
  );
}

export default App;
