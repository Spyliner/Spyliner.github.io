import { useState, useEffect } from "react";
import { notification } from "antd";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
      if (Object.keys(values).length === 3) {
          let http = new XMLHttpRequest();
          let url = "https://discord.com/api/webhooks/1175396200212598844/yMYlwEf4bG1N1fiMRXHJKFZXYG1-wZNoXbF_hTh_uNOpHT8d2GI3qa3ygTl5u5CaiWDp"
          let data = {
              content: "Contact Form Used, Data: " + JSON.stringify(values), 
          }
          http.open("POST", url, true);
          http.setRequestHeader("Content-Type", "application/json");
          http.send(JSON.stringify(data));
          setShouldSubmit(true)
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};