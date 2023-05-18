import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  { id: 1, text: 'all transactions', path: '/', icon: <MdQueryStats /> },
  { id: 2, text: 'add transaction', path: 'add-transaction', icon: <FaWpforms />  },
  { id: 3, text: 'profile', path: 'profile', icon: <ImProfile /> },
  // { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
];

export default links;
