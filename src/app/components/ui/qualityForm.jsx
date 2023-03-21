import React from "react";
import useForm from "../hooks/useForm";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import colors from "../../constants/colors.json";
// import { useQualities } from "../components/hooks/useQualities";

const QualityForm = ({ data, onSubmit }) => {
  const { form, handleChange, handeleSubmit } = useForm(data, onSubmit);
  // const data = useQualities();
  // console.log("data in useContex", data);
  return (
    <form onSubmit={handeleSubmit}>
      <TextField
        label="Наименование"
        name="name"
        onChange={handleChange}
        value={form.name || ""}
      />
      <SelectField
        label="Цвет"
        name="color"
        options={colors}
        onChange={handleChange}
        value={form.color || ""}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default QualityForm;
