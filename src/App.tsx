import React from 'react';

import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
