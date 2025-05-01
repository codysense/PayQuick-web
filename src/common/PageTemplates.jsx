import React from "react";
import { getBackground } from "./theme";

const PageTemplates = ({ pageTitle ="", pageContent }) => {
  return (
    <div>
      <div className="relative min-h-screen flex " style={getBackground()}>
        <div className="container max-w-screen-xl mx-auto my-auto relative flex flex-col w-4/5">
          <div className="text-5xl  text-white font-BG whitespace-pre-line text-center tracking-tighter mt-4 font-bold">
            {pageTitle}
          </div>
            {pageContent}
        </div>
      </div>
    </div>
  );
};

export default PageTemplates;