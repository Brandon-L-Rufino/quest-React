import './components/text.js';
import { Text } from './components/text.js';
import { Button } from './components/button.js';



function App() {
  
  return (
       
    <>
    <h1>Quest do React</h1>

    <Text label="Esse é o texto para teste do React" />

    <Text />

    <Button propBaixarCV label="Baixar CV 🖨" /> 

    </>
  );
}

export default App;
