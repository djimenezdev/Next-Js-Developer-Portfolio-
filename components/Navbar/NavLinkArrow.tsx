import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLinkArrow = ({ name, path }: { name: string; path: string }) => {
  const router = useRouter();
  const capitalizePage = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Link href={`/${name}`}>
      <a
        className={`text-base  ${
          router.asPath === `/${name}`
            ? 'text-gray-800 font-bold dark:text-gray-400'
            : 'text-gray-600 dark:text-gray-300 font-normal '
        }`}
      >
        {capitalizePage}
        {router.asPath === `/${name}` && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-arrow-down inline-block h-3 w-3'
            viewBox='0 0 16 16'
          >
            <path fillRule='evenodd' d={path} />
          </svg>
        )}
      </a>
    </Link>
  );
};

export default NavLinkArrow;
