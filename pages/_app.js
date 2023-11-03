import '../styles/globals.css';

//components set in the main app and th elayout becomes the main layout
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { useRouter } from 'next/router'

//imports framer motion for transitions
import {motion , AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {
//to enable transitions
  const router = useRouter();
  return (
    //we first use the layout as the main pagination the wrap with AP and m.d 
    //waits for complete transition of the page by using Animate presence
    //the key determines the new page
    <Layout>
      <AnimatePresence mode='wait'> 
      <motion.div key={router.route} className='h-full'>
          <Transition/>
          <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
