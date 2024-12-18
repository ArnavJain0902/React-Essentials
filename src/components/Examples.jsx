import TabButton from "./TabButton"
import { useState } from "react"
import { EXAMPLES } from "../data"
import Section from "./Section"
import Tabs from "./Tabs"
export default function Examples(){
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
    
    return(
        <Section id='examples' title='Examples'>
          <h2></h2>
          <Tabs 
            // ButtonsContainer='div'
            buttons={
              <>
                <menu>
                  <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleClick('components')}>Components</TabButton>
                  <TabButton isSelected={selectedTopic === 'jsx'}  onClick={()=>handleClick('jsx')}>JSX</TabButton>
                  <TabButton isSelected={selectedTopic === 'props'} onClick={()=>handleClick('props')}>Props</TabButton>
                  <TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleClick('state')}>State</TabButton>
                </menu>
              </>
            }
          >
            {tabContent}
          </Tabs>
         
          
        </Section>
    )
}