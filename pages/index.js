import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router'

const formSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().email().required(),
  phoneNo: yup.number().min(10).required(),
  address: yup.string().required().min(10),
  password: yup.string().min(6).required(),
})


const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})


const Login = () => {

  const [registerDetails, setRegisterDetails] = useState({});
  const [loginDetails, setLoginDetails] = useState({});
  const [validation,setValidation] = useState(null);

  let enter = false;

  const [login,setLogin] = useState(true);
  const router = useRouter();

  useEffect(()=>{
    fetch('http://localhost:8000',{
      method : 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({
        register : registerDetails,
        login : loginDetails
      })
    }).then(res => { 
      if(!res.ok)
      {
        throw new Error('Error Occured')
      }
      setValidation(true);
      console.log(res);
    }).catch(err => {
      console.log(err);
      alert('User Does not Exit')
    })
    
    
  },[registerDetails,loginDetails])


  return ( 
    <div className={styles.container}>
      <Head>
        <title>Shoppers</title>
        <meta name="description" content="E Commerce Website" />
        <link rel="icon" href="/TitleIcon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      {
        login ?
          <Formik
            initialValues={{name: '', email: '', phoneNo: '', address: '',password: ''}}
            validationSchema={formSchema}
            onSubmit={(values) => {
              console.log('formSchema',values);
              setRegisterDetails(values);
              router.replace('/home')
            }}
          >
            {(props) => (
              <form className={styles.form}>
                <input placeholder="Name" className={styles.input} type="name"  onChange={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')}/>
                <p className={styles.error}>{props.touched.name && props.errors.name}</p>
                <input placeholder="Email" className={styles.input} type="email"  onChange={props.handleChange('email')} value={props.values.email} onBlur={props.handleBlur('email')}/>
                <p className={styles.error}>{props.touched.email && props.errors.email}</p>
                <input placeholder="Phone Number" className={styles.input} type="phoneNo"  onChange={props.handleChange('phoneNo')} value={props.values.phoneNo} onBlur={props.handleBlur('phoneNo')}/>
                <p className={styles.error}>{props.touched.phoneNo && props.errors.phoneNo}</p>
                <input placeholder="Address" className={styles.input} type="address"  onChange={props.handleChange('address')} value={props.values.address} onBlur={props.handleBlur('address')}/>
                <p className={styles.error}>{props.touched.address && props.errors.address}</p>
                <input placeholder="Password" className={styles.input} type="password"  onChange={props.handleChange('password')} value={props.values.password} onBlur={props.handleBlur('password')}/>
                <p className={styles.error}>{props.touched.password && props.errors.password}</p>
                <button type="submit" className={styles.button} onClick={props.handleSubmit}>Register</button>
              </form>
            )}
          </Formik>
        :
          <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                console.log('loginSchema',values);
                setLoginDetails(values);
                if(validation==true)
                {
                  router.replace('/home')
                }
              }}
            >
              {(props) => (
                <form className={styles.form}>
                  <input placeholder="Email" className={styles.input} type="email"  onChange={props.handleChange('email')} value={props.values.email} onBlur={props.handleBlur('email')}/>
                  <p className={styles.error}>{props.touched.email && props.errors.email}</p>
                  <input placeholder="Password" className={styles.input} type="password"  onChange={props.handleChange('password')} value={props.values.password} onBlur={props.handleBlur('password')}/>
                  <p className={styles.error}>{props.touched.password && props.errors.password}</p>
                  <button type="submit" className={styles.button} onClick={props.handleSubmit}>Login</button>
                </form>
              )}
            </Formik>

      }
      <div className={styles.vline} ></div>
      {
        login ? 
          <button className={styles.Bigbutton} onClick={()=> setLogin(false)}>Login</button>
        :
          <button className={styles.Bigbutton} onClick={()=> setLogin(true)}>Create Account</button>
      }
      
    </div>
   );
}
 
export default Login;