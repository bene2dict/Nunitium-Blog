import './MenuDropDown.css'
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppContext from '../../context/AppContext';


const MenuDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { handleSignOut } = useContext(AppContext);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();


  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);





  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleOptionClick = (options) => {
    const { option, link } = options;
    setIsOpen(false);
    if (option === 'Sign out') {
      handleSignOut();
      // console.log('sign out');
      return;
    }
    navigate(`/${link}`);
  };

  const options = [
    { option: 'Home', link: '' },
    { option: 'About', link: 'about' },
    { option: 'Articles', link: 'articles' },
    { option: 'Login', link: 'login' },
  ];


  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="profile">
      <span></span>
        <span className='material-symbols-outlined' onClick={toggleDropdown}>menu</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <div className='profile-name'>
            <p>Nunitium Blog</p>
          </div>

          <hr style={{ width: '100%', color: '#1c1c1c30' }} />
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuDropDown;
