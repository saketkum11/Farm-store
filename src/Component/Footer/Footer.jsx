const Footer = () => {
  return (
    <>
      <footer>
        <div className='bg-black-6 pd-y-8'>
          <span className='text-color-grey-0 text-m'>Made by Saket kumar.</span>
          <ul className='flex style-none itms-center justify-center gap-3'>
            <li className='m-y-2 text-m'>
              <a
                href='https://github.com/saketkum11'
                className='text-dec text-color-grey-0'
              >
                <i class='fa-brands fa-github'></i>
              </a>
            </li>
            <li className='m-y-2 text-m'>
              <a
                href='https://www.linkedin.com/in/saketkumar21/'
                className='text-dec text-color-grey-0'
              >
                <i class='fa-brands fa-linkedin'></i>
              </a>
            </li>
            <li className='m-y-2 text-m'>
              <a
                href='https://twitter.com/saketkum11'
                className='text-dec text-color-grey-0'
              >
                <i class='fa-brands fa-twitter'></i>
              </a>
            </li>
          </ul>
          <div className='text-color-grey-0'>@ 2023 Farmgistic</div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
