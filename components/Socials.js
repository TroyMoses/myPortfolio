import Link from "next/link";

// Icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiDiscordLine,
  RiGithubLine,
} from 'react-icons/ri'


const Socials = () => {
  return (
    <div 
      className="flex items-center gap-x-5 text-lg">
      <Link 
        href={''} 
        className="hover:text-accent transition-all duration-300">
          <RiGithubLine />
      </Link>
      <Link 
        href={''} 
        className="hover:text-accent transition-all duration-300">
          <RiLinkedinLine />
      </Link>
      <Link 
        href={''} 
        className="hover:text-accent transition-all duration-300">
          <RiTwitterLine />
      </Link>
      <Link 
        href={''} 
        className="hover:text-accent transition-all duration-300">
          <RiYoutubeLine />
      </Link>
      <Link 
        href={''} 
        className="hover:text-accent transition-all duration-300">
          <RiInstagramLine />
      </Link>
      <Link 
        href={''} 
        className="hover:text-accent transition-all duration-300">
          <RiDiscordLine />
      </Link>
    </div>
  ); 
};

export default Socials;
