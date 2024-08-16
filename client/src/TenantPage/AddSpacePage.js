import React from "react";
import SpaceForm from "./SpaceForm";

const AddSpacePage = () => {
  const handleSuccess = (data) => {
    // Redirect or update UI after successful addition
    console.log("Space added successfully:", data);
  };

  return (
    <div className="wrapp" style={{ paddingTop: "150px" }}>
      <SpaceForm
        onSuccess={handleSuccess}
        onClose={() => {
          /* handle close */
        }}
      />
    </div>
  );
};

export default AddSpacePage;
