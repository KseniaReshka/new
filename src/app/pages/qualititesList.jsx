import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qualityService from "../services/quality.service";
import QualitiesTable from "../components/ui/qualitiesTable";

const QualitiesListPage = () => {
  const [qualitys, setQualities] = useState([]);
  const history = useHistory();
  useEffect(async () => {
    qualityService.fetchAll().then((data) => {
      console.log("data of qLISTP", data);
      return setQualities(data.content);
    });
  }, []);
  const handleEdit = (param) => {
    console.log(param);
    history.push(`/edit/${param}`);
  };
  const handleDelete = (param) => {
    console.log(param);
  };
  return (
    <>
      <h1>Qualitites List Page</h1>
      <QualitiesTable
        onDelete={handleDelete}
        onEdit={handleEdit}
        data={qualitys}
      />
    </>
  );
};

export default QualitiesListPage;
