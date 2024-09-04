import React, { useState } from "react";

const Section = ({ title, description, isVisible, toggleSection, section }) => {
  return (
    <>
      <div className="border border-black m-2 p-3">
        <h1 className="text-2xl font-bold hover:text-amber-500">{title}</h1>
        <button
          className="cursor-pointer underline hover:text-red-400 hover:text-xl hover:font-semibold"
          onClick={() => toggleSection(section)}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <p>{description}</p>}
      </div>
    </>
  );
};

const Instamart = () => {

  const [visibleSection,setVisibleSection]=useState(null);
  const toggleSection=(section)=>{
    setVisibleSection(section==visibleSection?null:section); //suppose if we click on hide btn means its laready in visble so toggling is done by same section so put null all sections closed
  }

  return (
    <div>
      <h2 className="flex justify-center font-semibold text-2xl m-2">Lifiting the State Up Concept</h2>
      <Section
        title="About InstaMart"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, velit eos assumenda aliquam laboriosam corrupti laudantium sint dolor enim accusamus voluptatum nihil in blanditiis, veniam pariatur sit praesentium, quae cum"
        isVisible={visibleSection=="About"} toggleSection={toggleSection} section="About"
      />
      <Section
        title="Team InstaMart"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, velit eos assumenda aliquam laboriosam corrupti laudantium sint dolor enim accusamus voluptatum nihil in blanditiis, veniam pariatur sit praesentium, quae cum"
        isVisible={visibleSection=="Team"} toggleSection={toggleSection} section="Team"
      />
      <Section
        title="Careers"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, velit eos assumenda aliquam laboriosam corrupti laudantium sint dolor enim accusamus voluptatum nihil in blanditiis, veniam pariatur sit praesentium, quae cum"
        isVisible={visibleSection=="Careers"} toggleSection={toggleSection} section="Careers"
        
      />
    </div>
  );
};

export default Instamart;







//LIfting the state up normal code 
/*export default function InstaCart() {
  const [sectionConfig,setSectionConfig]=useState({
    About:false,Team:false,Careers:false
  });

  return (
    <div>
       <Section title="About InstaMart" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, velit eos assumenda aliquam laboriosam corrupti laudantium sint dolor enim accusamus voluptatum nihil in blanditiis, veniam pariatur sit praesentium, quae cum
" isVisible={sectionConfig.About} setIsVisible={()=>{
  setSectionConfig({
    About:!sectionConfig.About,Team:false,Careers:false
  })
}}/>
    <Section title="Team InstaMart" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, velit eos assumenda aliquam laboriosam corrupti laudantium sint dolor enim accusamus voluptatum nihil in blanditiis, veniam pariatur sit praesentium, quae cum
" isVisible={sectionConfig.Team} setIsVisible={()=>{
  setSectionConfig({
    About:false,Team:!sectionConfig.Team,Careers:false
  })
}}
/>
    <Section title="Careers" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, velit eos assumenda aliquam laboriosam corrupti laudantium sint dolor enim accusamus voluptatum nihil in blanditiis, veniam pariatur sit praesentium, quae cum
" isVisible={sectionConfig.Careers} setIsVisible={()=>{
  setSectionConfig({
    About:false,Team:false,Careers:!sectionConfig.Careers
  })
}}/>
  
    </div>
  )
}


*/