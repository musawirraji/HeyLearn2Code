import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';

function Logo() {
  return (
    <Link href='/' className='z-10'>
      <Image
        src={logo}
        height='150'
        width='150'
        alt=''
        quality={100}
        className=' bg-[#514a355d] bg-opacity-40'
      />
    </Link>
  );
}

export default Logo;
