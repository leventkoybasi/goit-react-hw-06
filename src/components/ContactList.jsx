import Contact from './Contact';
import style from '../App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../store/contactsSlice';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const searchTerm = useSelector((state) => state.filters.searchTerm);

  const filteredContacts = contacts.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.toString().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDelete = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <div className='mt-xl-3 mx-xl-3 px-xl-5 p-xs-3 m-xs-0'>
      <table className={`table table-hover text-white fs-xxl-3 fs-xl-6 ${style.transparentTable}`}>
        <thead>
          <tr className='align-middle'>
            <th scope='col'></th>
            <th scope='col'>Name</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>E-Mail</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((item, index) => (
            <Contact key={item.id} item={item} index={index} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
