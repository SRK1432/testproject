import React from 'react';
import {PasswordProvider} from "./PasswordContext";
import PswdKpr from "./components/PswdKpr";

const App= () => {
  return (
    <PasswordProvider>
      <div>
        <PswdKpr />
      </div>
    </PasswordProvider>
  );
}

export default App;
