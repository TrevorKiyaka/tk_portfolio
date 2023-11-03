// links
import Link from 'next/link';

// icons
import {
  RiTwitterXFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://linkedIn.com/TrevorKiyaka'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://github.com/TrevorKiyaka'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={'https://twitter.com/TrevorKiyaka'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterXFill />
      </Link>
      <Link href={'https://instagram.com/TrevorKiyaka'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      
    </div>
  );
};

export default Socials;
