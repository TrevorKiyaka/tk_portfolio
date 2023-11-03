//components are laid out and are setup by importing
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

//import fonts
import { Sora } from '@next/font/google'

//set up font settings
//can be found in the tailwind config file under font
const sora = Sora ({
  subsets: ['latin'],
  variable: '--font-sora' ,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});


const Layout = ({ children }) => {
  return (
    //we apply styles from global css for this component and added
      //alter bg-site to get desired colour check out tailwind config that leads to svg in public
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}
    font-sora relative`}>
      <TopLeftImg/>
      <Nav/>
      <Header/>
      {children}
    </div>
  )
};

export default Layout;
