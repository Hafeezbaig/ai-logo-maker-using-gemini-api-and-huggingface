import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Colors from "@/app/_data/Colors";

function LogoColorPallete({ onHandleInputChange, formData }) {  // Destructure props

  const [selectedOption, setSelectedOption] = useState(formData?.palette);

  return (
    <div className="my-10">
      <HeadingDescription
        title="Choose Your Color Palette"
        description="Pick the colors you want in your logo. You can also add custom colors."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((palette, index) => (
          <div
            className={`flex p-1 cursor-pointer ${
              selectedOption === palette.name ? "border-2 rounded-lg border-primary" : ""
            }`}
            key={index}
          >
            {palette?.colors.map((color, colorIndex) => (
              <div
                className="h-24 w-full"
                key={colorIndex}
                onClick={() => {
                  setSelectedOption(palette.name);
                  if (onHandleInputChange) {  // Ensure function exists before calling
                    onHandleInputChange(palette.name);
                  }
                }}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoColorPallete;
