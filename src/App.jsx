import styles from './style';

import {Navbar, Billing, CardDeal, Business, CTA, Footer, Testimonials, Hero, BasicTabs, Example} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        Hey
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing />
        <BasicTabs />
        <CardDeal />
        <Example />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>


  </div>
);

export default App