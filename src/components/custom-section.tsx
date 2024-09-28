import React from "react";

interface SectionProps {
  concept: string;
  mission: string;
  whatIDid: string[];
}

const CustomSection: React.FC<SectionProps> = ({
  concept,
  mission,
  whatIDid,
}) => {
  return (
    <div className="bg-mediumRed text-customBlack flex justify-center items-center py-10 h-screen w-screen">
      <div className="flex w-full max-w-screen justify-around">
        {/* Concept */}
        <div className="text-left">
          <h2 className="text-[50px] font-bold font-footer">
            (01){" "}
            <span className="text-mainColor font-helveticaNeue">Concept</span>
          </h2>
          <p className="mt-6 max-w-sm">{concept}</p>
        </div>

        {/* Mission */}
        <div className="text-left">
          <h2 className="text-[50px] font-bold font-footer">
            (02){" "}
            <span className="text-mainColor  font-helveticaNeue">Mission</span>
          </h2>
          <p className="mt-6 max-w-sm">{mission}</p>
        </div>

        {/* What I did */}
        <div className="text-left">
          <h2 className="text-[50px] font-bold font-footer">
            (03){" "}
            <span className="text-mainColor  font-helveticaNeue">
              What I did
            </span>
          </h2>
          <ul className="mt-6 list-disc list-inside">
            {whatIDid.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
