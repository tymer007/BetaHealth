import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useNavigate } from 'react-router-dom';

const LoginDashboard = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = async(e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
      try {
        const response = await axios.post('https://health-4-u5fi.onrender.com/api/betta/auth/signin', formData);
        console.log(response.data);
        const { token } = response.data;
      localStorage.setItem('accessToken', token);
      setSuccessMessage('Login successful');
      setErrorMessage('');
      setTimeout(() => {
        Navigate('/HomeExpert'); 
      }, 3000);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      setErrorMessage('Login failed. Please check your credentials and try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="md:w-2/3 flex justify-center bg-white relative">
        <div className="absolute mx-auto">
        <Link to="/HomeReader"><img src="./images/logo.png" alt="Logo" className="w-32 h-24" /></Link>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-14 bg-white ">
          <h1 className="text-3xl font-bold mb-4">
            Welcome back, <span className="text-teal-500">sign in</span> to your Dashboard
          </h1>
          <p className="text-gray-600 mb-6">Access your dashboard and get writing!</p>
          {successMessage && (
            <div className="text-green-500 text-center mb-4">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-customOrange font-bold mb-1">Your email</label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-customOrange font-bold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="8"
                  maxLength="15"
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  pattern="(?=.*\d)[A-Za-z\d]{8,}"
                  title="Password must be at least 8 characters long and contain at least one digit"
                  required
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
            >
              CONTINUE
            </button>
          </form>
          <p className="text-center mt-4">
             Want to work with us? <Link to="/SignUpExpert" ><a href="#" className="text-orange-500">Apply here</a></Link><a href="#" className="text-orange-500">Apply here</a>
          </p>
        </div>
      </div>
      <div className="md:w-1/3 hidden md:flex items-center justify-center">
        <img src="./images/Image (3).png" alt="Form" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LoginDashboard;
