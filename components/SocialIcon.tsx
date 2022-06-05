type ISocialIcon = {
  name: string;
  path: string;
  link: string;
  fillColor: string;
};

const SocialIcon = ({
  name,
  path,
  link,
  fillColor = 'currentColor',
}: ISocialIcon) => {
  return (
    <a
      href={link}
      className='text-base font-normal text-gray-600 dark:text-gray-300'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill={fillColor}
        className={`bi bi-${name} h-5 w-5`}
        viewBox='0 0 16 16'
      >
        <path d={path} />
      </svg>
    </a>
  );
};

export default SocialIcon;
