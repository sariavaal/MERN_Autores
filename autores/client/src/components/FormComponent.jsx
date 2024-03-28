import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("name is required")
    .min(3, "name must be at least 3 characters"),
  lastName: Yup.string()
    .required("lastname is required")
    .min(3, "Lastname must be at least 3 characters"),
});

const Formulario = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field type="text" className="form-control" id="name" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className="alert alert-danger mt-2"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Lastname
            </label>
            <Field
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="alert alert-danger mt-2"
            />
          </div>
          <button type="button" className="btn btn-danger" style={{ marginRight: '10px' }}>
          <Link to="/" className="text-white text-decoration-none">
            Cancel
          </Link>
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
//prop validation
Formulario.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
  }),
};
export default Formulario;
