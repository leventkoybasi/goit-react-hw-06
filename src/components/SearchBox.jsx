import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/filtersSlice';

const initialFormValues = {
  search: '',
};

function SearchBox({ handleSearch }) {
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <Formik initialValues={initialFormValues} onSubmit={(values) => handleSearch(values.search)}>
      {({ handleChange }) => (
        <Form className='my-5 pb-5'>
          <div className='input-group'>
            <Field
              type='text'
              className='form-control fs-4 px-4'
              placeholder='Search'
              name='search'
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                handleChange(e);
                dispatch(setSearchTerm(e.target.value));
              }}
            />
            <span className='input-group-text'>
              <i className='bi bi-search fs-4'></i>
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SearchBox;
