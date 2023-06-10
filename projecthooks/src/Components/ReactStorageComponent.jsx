import React, { useState } from "react";

const ReactStorageComponent = () => {
  const [title, Settitle] = useState();
  const mydata = [];

  const FormHandler=(event)=>{
    event.preventDefault()
    console.log("Form Submitted")
  }

  return (
    <>
      <p>React Local Storage </p>
      <p>React Session Storage </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus
        temporibus aperiam quasi maxime error labore veritatis asperiores
        commodi hic. Ullam quidem dolore numquam odit ipsam ea voluptatum
        voluptatibus pariatur.
      </p>
      <form onSubmit={FormHandler()}>
        <input  type="text" placeholder="Enter Title " value={title} 
        onChange={(event)=>{
          Settitle(event.target.value)
        }}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default ReactStorageComponent;
