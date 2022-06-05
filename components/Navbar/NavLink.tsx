import Link from 'next/link';

const NavLink = ({ page }: { page: string }) => {
  const capitalizePage = page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <Link href={`/${page}`}>
      <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
        {capitalizePage}
      </a>
    </Link>
  );
};

export default NavLink;
