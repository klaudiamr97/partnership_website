import React from 'react';

export function ErrorMessage({ children }) {
  return (
    <div className="flex flex-col mx-4 mt-10 md:mt-16 items-center text-center">
      <h2>
      {children}</h2>
      
    </div>
  );
}
