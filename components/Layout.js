import Navbar from './navbar';
/* eslint-disable @next/next/no-head-element */


import Footer from './footer';
import DiscountBanner from './discountBanner';

export default function Layout({children}) {
  return (
      
      <body>
          <div>
            <div>
              <Navbar/>
          </div>
          
          <DiscountBanner className="mt-2"/>
          <main className="container m-auto  px-4">{children}</main>

          <div>
            <Footer />
          </div>
        </div>

      </body>
    
  );
}
