import { RoughNotationGroup } from 'react-rough-notation';
import HighlightText from './HighlightText';
import HeroImage from './HeroImage';
import userData from '@constants/data';

const highlightSections = [
  { color: '#F59E0B', text: 'Developer.' },
  { color: '#84CC16', text: 'Designer.' },
  { color: '#10B981', text: 'Programmer.' },
  { color: '#3B82F6', text: 'Teacher.' },
];

export default function Hero() {
  return (
    <div className='flex flex-row md:justify-center lg:justify-between xl:justify-center items-start overflow-hidden'>
      {/* Text container */}

      <div className='relative w-full md:w-[94vw] lg:w-1/2 text-center md:text-left lg:pl-4 lg:pr-20   xl:pl-20  xl:pr-24'>
        <h1 className={`text-6xl text-center  mb-2`}>{userData.name}</h1>
        <h3 className='mb-2 text-2xl bg-gradient-to-r text-center from-[#38bdf8] to-[#3b82f6] px-2 py-1 rounded-md text-white'>
          {userData.designation}
        </h3>
        <p className='text-md xss:text-xl mt-3 mb-10  text-center'>
          "I'm a developer {userData.about.title[2]}"
        </p>
        <RoughNotationGroup show={true}>
          {highlightSections.map(({ color, text }, i) => (
            <HighlightText color={color} text={text} key={color + '-' + i} />
          ))}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <HeroImage />
    </div>
  );
}
