import React from "react";
import { useParams } from "react-router";
import QualityForm from "../components/ui/qualityForm";
import { useQualities } from "../components/hooks/useQualities";
import httpService from "../services/http.service";

const EditQualityPage = () => {
  const id = useParams().id;
  const { getQuality, updateQuality } = useQualities();
  const quality = getQuality(id);

  const handeleSubmit = (data) => {
    updateQuality(data);
  };

  return (
    <>
      <h1>Edit Quality Page</h1>{" "}
      <QualityForm data={quality} onSubmit={handeleSubmit} />
    </>
  );
};

export default EditQualityPage;
