import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string().min(2, 'Name Too Short!').max(70, 'Name Too Long!').required('Required Name'),
  email: Yup.string().email('Invalid email').required('Required Email'),
  pass: Yup.string().min(8, 'Password must be 8 characters long').required('Required password'),
  tandc: Yup.string().required('Accept Term & conditions')
});

const Register = () => {
  const navigate = useNavigate();
  const initialValues = {
    fullname: '',
    email: '',
    pass: '',
    tandc: ''
  }
  const onsubmit = async (values) => {
    const post = {
      fullname: values.fullname,
      email: values.email,
      password: values.pass
    }
    try {
      let res = await fetch("http://localhost/apidata/register.php", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(post),
      }).then(response => response.json())
        .then(d => d)
        .catch((error) => {
          console.log(error);
        });
      if (res.data === '0') {
        console.log("User created successfully");
        navigate('login')
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={onsubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="min-h-100 p-0 p-sm-6 d-flex align-items-stretch">
            <div className="card w-25x flex-grow-1 flex-sm-grow-0 m-sm-auto">
              <div className="card-body p-sm-5 m-sm-3 flex-grow-0">
                <h1 className="mb-0 fs-3">Sign Up</h1>
                <div className="fs-exact-14 text-muted mt-2 pt-1 mb-5 pb-2">Fill out the form to create a new account.</div>
                <div className="mb-4">
                  <label className="form-label">Full name</label>
                  <ErrorMessage component="div" name="fullname" className="text-danger" />
                  <Field type="text" name="fullname" className={`form-control form-control-lg ${errors.fullname ? "input-error" : ''}`} />
                </div>
                <div className="mb-4">
                  <label className="form-label">Email Address</label>
                  <ErrorMessage component="div" name="email" className="text-danger" />
                  <Field type="text" id="form3Examplev2" name="email" className={`form-control form-control-lg ${errors.email ? "input-error" : ''}`} />
                </div>
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <ErrorMessage component="div" name="pass" className="text-danger" />
                  <Field type="password" name="pass" className={`form-control form-control-lg ${errors.pass ? "input-error" : ''}`} />
                </div>
                <div className="mb-4 py-2">
                  <label className="form-check mb-0">
                    <Field name="tandc" type="checkbox" value="" id="form2Example3c" className={`form-check-input ${errors.tandc ? "input-error" : null}`} />
                    <span className="form-check-label">I agree to the <a href="page-terms.html">terms and conditions</a>.</span>
                    <ErrorMessage component="div" name="tandc" className="text-danger" />
                  </label>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary btn-lg w-100">Sign Up</button>
                </div>
              </div>
              <div className="sa-divider sa-divider--has-text">
                <div className="sa-divider__text">Or continue with</div>
              </div>
              <div className="card-body p-sm-5 m-sm-3 flex-grow-0">
                <div className="d-flex flex-wrap me-n3 mt-n3">
                  <button type="button" className="btn btn-secondary flex-grow-1 me-3 mt-3">Google</button>
                  <button type="button" className="btn btn-secondary flex-grow-1 me-3 mt-3">Facebook</button>
                  <button type="button" className="btn btn-secondary flex-grow-1 me-3 mt-3">Twitter</button>
                </div>
                <div className="form-group mb-0 mt-4 pt-2 text-center text-muted">Already have an account?
                  <Link to="/login">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default Register;