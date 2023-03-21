import { useState } from "react";

const useForm = (initialState = {}, onSubmit) => {
  const [form, setForm] = useState(initialState);
  const handeleSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);
    onSubmit?.(form);
  };
  const handleChange = (target) => {
    console.log("target", target);
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return { form, handleChange, handeleSubmit };
};
export default useForm;
