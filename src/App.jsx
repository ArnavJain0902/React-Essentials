import {CORE_CONCEPTS} from './data.js'
import {EXAMPLES} from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {useState} from 'react' 


function App() {
  const [selectedTopic,setSelectedTopic]=useState()
  function handleClick(selectedButton){
    // selectedButton => 'components','props','JSX','State'
    setSelectedTopic(selectedButton)
  }


  let tabContent = (<p>Please select a Topic</p>)
  if(selectedTopic){
    tabContent = (<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>)
  }

  
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept
              title ={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description} 
              image = {CORE_CONCEPTS[3].image}> 
            </CoreConcept>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={()=>handleClick('components')}>Components</TabButton>
            <TabButton onClick={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={()=>handleClick('props')}>Props</TabButton>
            <TabButton onClick={()=>handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
