import React from "react";
import QualityForm from "../components/ui/qualityForm";

const AddQualityPage = () => {
  const handeleSubmit = (e) => {
    // e.preventDefault();
    console.log("ууу", e);
  };
  return (
    <>
      <h1>Add Quality</h1>
      <QualityForm onSubmit={handeleSubmit} />
      {/* <QualityForm onSubmit={handeleSubmit} /> */}
    </>
  );
};

export default AddQualityPage;
