import React, { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../constext/UserContext';
const SignupSchema = Yup.object().shape({
  email: Yup.string().required('Required Email'),
  pass: Yup.string().required('Required password')
});

const Login = () => {
  const usenavigate = useNavigate();
  const { setIsLogin, setShowloader } = useContext(UserContext)
  const initialValues = {
    email: '',
    pass: '',
  }
  const onsubmit = async (values) => {
    //console.log(values);
    const post = {
      email: values.email,
      password: values.pass
    }
    try {
      let res = await fetch("http://localhost/apidata/login.php", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(post),
      }).then(response => response.json())
        .then(d => d)
        .catch((error) => {
          console.log(error);
        });
      if (res.error === '0') {
        console.log(res.token);
        setIsLogin(true);
        localStorage.setItem('jwtoken', res.token);
        usenavigate('./')
      } else {
        alert("Email or password are invalid");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      const jwtoken = localStorage.getItem('jwtoken');
      try {
        let resp = await fetch("http://localhost/apidata/verifytoken.php", {
          method: "POST",
          mode: 'cors',
          body: JSON.stringify({ 'jwtoken': jwtoken }),
        }).then(response => response.json())
          .then(d => d)
          .catch((error) => error);
        setShowloader(false);
        if (resp.error == '0') {
          setIsLogin(true);
        } else {
          alert("Invalid Token");
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [])
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
                <h1 className="mb-0 fs-3">Sign In</h1>
                <div className="fs-exact-14 text-muted mt-2 pt-1 mb-5 pb-2">Log in to your account to continue.</div>
                <div className="mb-4">
                  <label className="form-label">Email Address</label>
                  <ErrorMessage component="div" name="email" className="text-danger" />
                  <Field type="email" name="email" className={`form-control form-control-lg ${errors.email ? "input-error" : ''}`} />
                </div>
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <ErrorMessage component="div" name="password" className="text-danger" />
                  <Field type="password" name="pass" className={`form-control form-control-lg ${errors.pass ? "input-error" : ''}`} />
                </div>
                <div className="mb-4 row py-2 flex-wrap">
                  <div className="col-auto me-auto">
                    <label className="form-check mb-0">
                      <Field type="checkbox" name="remember" className="form-check-input" />
                      <span className="form-check-label">Remember me</span>
                    </label>
                  </div>
                  <div className="col-auto d-flex align-items-center">
                    <a href="auth-forgot-password.html">Forgot password?</a>
                  </div>
                </div>
                <div><button type="submit" className="btn btn-primary btn-lg w-100">Sign In</button></div>
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
                <div className="form-group mb-0 mt-4 pt-2 text-center text-muted">Don&#x27;t have an account?
                  <Link to="/register">Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default Login;