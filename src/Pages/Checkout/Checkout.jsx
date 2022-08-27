import { useEffect } from 'react';
import { Address } from '../../Component/Address/Address';
import { CartCard } from '../../Component/CartCard/CartCard';
import { useAddress } from '../../Context/Cart/Address-Context';
import { useCart } from '../../Context/Cart/Cart-Context';

const Checkout = () => {
  const { getCart, cart } = useCart();
  const { getAddress } = useAddress();

  return (
    <>
      <main className='flex'>
        <Address />
        <aside>
          {[...cart]?.reverse().map((singleCart) => {
            return (
              <>
                <CartCard key={singleCart._id} product={singleCart} />
              </>
            );
          })}
        </aside>
      </main>
    </>
  );
};
export { Checkout };
