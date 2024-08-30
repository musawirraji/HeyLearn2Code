import Link from 'next/link';

function Navigation() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex items-center gap-10 text-white'>
        <li>
          <Link href='/' className='transition-colors hover:text-yellow-400'>
            Home
          </Link>
        </li>
        <li className='transition-colors hover:text-yellow-400'>
          <Link href='/'>Courses</Link>
        </li>
        <li className='transition-colors hover:text-yellow-400'>
          <Link href='/'>About</Link>
        </li>
        <li className='p-1 transition-colors border border-yellow-600 rounded-2xl hover:text-yellow-400'>
          <Link href='/'>Register</Link>
        </li>
        <li className='transition-colors hover:text-yellow-400'>
          <Link href='/'>Login</Link>
        </li>
        <li className='transition-colors hover:text-yellow-400'>
          <Link href='/'>Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
