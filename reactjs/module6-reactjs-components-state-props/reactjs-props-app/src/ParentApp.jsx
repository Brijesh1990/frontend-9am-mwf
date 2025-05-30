import React from "react";
const ParentApp = ({children}) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <p>This is the parent component {children}</p>
      {/* You can add child components here */}
    </div>
  );
}

const ChildApp = () => {
  return (
    <div>
        <ParentApp />
      <h2>Child Component</h2>
      <p>This is the child component.</p>
      {/* You can add more child components here */}
    </div>
  );
}

export default ChildApp