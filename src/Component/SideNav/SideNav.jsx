import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/Auth/Auth';
import toast from 'react-hot-toast';
const SideNav = ({ cart, wishlist, sideNavFlag, setSideNavFlag, nav }) => {
  const { tokenValue, logoutHandler } = useAuth();
  return (
    <>
      <nav className='bg-black-0 width-scaled4-4 ht-auto pd-7 position-ab top-0 right-0 '>
        <ul className='style-none flex flex-column items-start justify-start gap-1 position-rel wt-100'>
          <li
            className='flex items-end justify-end text-m'
            onClick={() => setSideNavFlag((nav) => !nav)}
          >
            <i class='fa-solid fa-xmark'></i>
          </li>
          <li className='pd-x-4'>
            <Link className='text-dec text-color-grey-9 text-xm cursor' to='/'>
              Home
            </Link>
          </li>
          <li className='pd-x-4 flex justify-btw gap-1'>
            <Link
              className='text-dec text-color-grey-9 text-xm cursor'
              to='/wishlist'
            >
              wishlist
            </Link>
            {wishlist.length >= 0 && (
              <span className='text-color-green-6  text-xm pd-x-3'>
                {wishlist.length}
              </span>
            )}
          </li>
          <li className=' pd-x-4 flex justify-btw gap-1'>
            <Link
              to='/cart'
              className='text-dec text-color-grey-9 cursor text-xm'
            >
              cart
            </Link>
            {cart.length >= 0 && (
              <span className=' flex justify-center items-center text-color-green-6 text-xm'>
                {cart.length}
              </span>
            )}
          </li>
          <li className='pd-x-4'>
            {tokenValue ? (
              <Link
                onClick={() => {
                  logoutHandler();
                  toast.success('Logged Out  successfully');
                }}
                to='/login'
                className='text-dec text-s pd-x-5 pd-y-2 bg-green-7 text-color-grey-0 rounded-s'
              >
                logout
              </Link>
            ) : (
              <Link
                to='/login'
                className='text-dec text-s text-color-grey-0 pd-x-5 pd-y-3 bg-green-6 rounded-s'
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default SideNav;
