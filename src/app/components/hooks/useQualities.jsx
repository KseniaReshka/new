import React, { useContext, useEffect, useState } from "react";
import qualityService from "../../services/quality.service";

const QualitiesContex = React.createContext();

export const useQualities = () => {
  return useContext(QualitiesContex);
};
export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const getQualities = async () => {
    try {
      const { content } = await qualityService.fetchAll();
      setQualities(content);
      setLoading(false);
    } catch (error) {
      const { message } = error.response.data;
      setError(message);
    }
  };
  useEffect(() => {
    getQualities();
  }, []);
  const getQuality = (id) => {
    return qualities.find((q) => q._id === id);
  };

  const updateQuality = async ({ id, ...data }) => {
    try {
      const { content } = await qualityService.update(id, data);
      setQualities((prevState) =>
        prevState.map((item) => {
          if (item._id === content._id) {
            return content;
          }
          return item;
        })
      );
      return content;
    } catch (error) {
      const { message } = error.response.data;
      setError(message);
    }
  };

  return (
    <QualitiesContex.Provider
      value={{ qualities, loading, getQuality, updateQuality }}
    >
      {loading ? children : <h1>Загрузка</h1>}
    </QualitiesContex.Provider>
  );
};
