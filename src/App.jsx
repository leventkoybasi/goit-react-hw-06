import { useState, useEffect } from 'react';
import style from './App.module.css';
import { useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import ErrorModal from './components/ErrorModal.jsx';
import { setSearchTerm } from './store/filtersSlice';
import { setContacts } from './store/contactsSlice';
import { contactData } from './data/contactData.js';

function App() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setContacts(contactData));
  }, [dispatch]);

  const handleSearch = (searchValue) => {
    dispatch(setSearchTerm(searchValue));
    if (searchValue.trim() === '') {
      setError(false);
    }
  };

  return (
    <>
      <div className={`${style.shadowContainer}  w-md-100 m-md-auto`}>
        <div className='mx-xl-5 m-sm-0'>
          <div className='mb-4 border-bottom pb-4 fs-xxl-1 fs-lg-4'>
            <h1 className={`${style.mainTitle} text-white text-start mt-5`}>
              <i className='bi bi-telephone-fill me-4 '></i>
              Phonebook
            </h1>
          </div>
          <div className='row pt-5 '>
            <div className='col-12 col-xl-4 mb-4 px-lg-5 px-sm-2'>
              <SearchBox handleSearch={handleSearch} />
              <ContactForm />
            </div>
            <div className='col-12 col-xl-8 p-sm-0'>
              {!error ? (
                <ContactList />
              ) : (
                <ErrorModal
                  onClose={() => {
                    setError(false);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='text-white text-center my-3' id='me'>
        <a href='https://github.com/leventkoybasi'>
          <p>
            leventkoybasi <i className='bi bi-github ms-2'></i>
          </p>
        </a>
      </div>
    </>
  );
}

export default App;
