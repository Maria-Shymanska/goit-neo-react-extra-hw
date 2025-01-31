import css from "./LoginForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";

export const LoginForm = ({ submit }) => {
  const emailId = useId();
  const passwordId = useId();

  const validateSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validateSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={emailId}>
          Email
        </label>
        <Field className={css.input} name="email" id={emailId} />
        <ErrorMessage className={css.error} name="email" component="span" />
        <label className={css.label} htmlFor={passwordId}>
          Password
        </label>
        <Field
          className={css.input}
          name="password"
          id={passwordId}
          type="password"
        />
        <ErrorMessage className={css.error} name="password" component="span" />
        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};
