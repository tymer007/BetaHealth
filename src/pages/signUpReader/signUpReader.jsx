import React, {useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Link } from 'react-router-dom';
import { Import } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignUpReader = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const Navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedValue = type === 'checkbox' ? checked : value;
     setFormData({
      ...formData,
      [name]: updatedValue,
    });
    

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === 'firstName' && updatedValue.trim()) {
        delete newErrors.firstname;
      }
      if (name === 'lastName' && updatedValue.trim()) {
        delete newErrors.lastname;
      }
      if (name === 'email') {
        if (!updatedValue.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(updatedValue)) {
          newErrors.email = 'Email is not valid';
        } else {
          delete newErrors.email;
        }
      }
      if (name === 'password') {
        if (!updatedValue.trim()) {
          newErrors.password = 'Password is required';
        } else if (updatedValue.length < 6) {
          newErrors.password = 'Password should be at least 8 characters';
        } else {
          delete newErrors.password;
        }
      }
      if (name === 'termsAccepted' && updatedValue) {
        delete newErrors.termsAccepted;
      }
      return newErrors;
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const validationErrors = {}
    if(!formData.firstName.trim()) {
        validationErrors.firstName = "First Name is required"
    }
    if(!formData.lastName.trim()) {
      validationErrors.lastName = "Last Name is required"
  }

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 8){
        validationErrors.password = "password should be at least 8 char"
    }
    if (!formData.termsAccepted) {
      validationErrors.termsAccepted = 'You must accept the terms and conditions';
    }

    setErrors(validationErrors)
    
    
      try {
        const response = await axios.post('https://health-4-u5fi.onrender.com/api/betta/auth/signup', formData);
        console.log(response.data);
        setSuccessMessage('Sign up successful');
        setTimeout(() => {
          Navigate('/Login'); 
        }, 3000);
      } catch (error) {
        console.error('There was an error submitting the form!', error);
      } finally {
        setIsSubmitting(false);
      }
    


  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-2/3 flex justify-center bg-white">
        <div className="md:w-1/2 flex flex-col justify-center p-8 bg-white">

          <h1 className="text-3xl font-bold mb-4">
            Join our <span className="text-orange-500">community</span> today
          </h1>
          <p className="text-gray-600 mb-6">Totally free. No payment needed.</p>
          {isSubmitting && (
            <div className="text-green-500 text-center mb-4">
              Logging in...
            </div>
          )}
           {successMessage && (
            <div className="text-green-500 text-center mb-4">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block font-bold mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                   placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  
                />
                {errors.firstName && <span className="text-red-500 text-sm mt-1 block">{errors.firstName}</span>}
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Last Name</label>
                <input
                  type="name"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  
                />
                {errors.lastname && <span className="text-red-500 text-sm mt-1 block">{errors.lastname}</span>}
              </div>

            </div>

            <div className="mb-4">
                <label className="block font-bold mb-1">Your email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  
                />
                {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
              </div>
            
            <div className="mb-4">
              <label className="block font-bold mb-1">Create Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  minLength="8"
                  maxLength="15"
                  pattern="(?=.*\d)[A-Za-z\d]{8,}"
                  
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
                {errors.password && <span className="text-red-500 text-sm mt-2 block">{errors.password}</span>}
              </div>
            </div>
            <div className="mb-4 flex items-start">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2 mt-1"
                
              />
             
              <label>
                By creating an account you are agreeing to our Terms and Conditions and Privacy Policy
              </label>
              
            </div>
            {errors.termsAccepted && <span className="text-red-500 text-sm mt-0 ml-0  block">{errors.termsAccepted}</span>}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
            >
              SIGN UP
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/Login"><a href="#" className="text-teal-500">Login</a></Link> 
            <Link to="/"><p className="text-teal-500">Back Home</p></Link>
          </p>
        </div>
      </div>

      <div className="md:w-1/3 flex items-center justify-center">
        <img src="./images/Image (3).png" alt="Form" className="w-full h-full object-cover" />
      </div>
    </div >
  );
};

export default SignUpReader
