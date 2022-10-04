import { apple, bill, google, design, Editing, Facebook, Hootsuite, HTML, Responsiveness, SEO, Shopify, Social, Wordpress, Design,} from "../assets"
import styles, {layout} from "../style"
import Filterizr from 'filterizr'
import $ from "jquery"

const Billing = () => {

  /* Filterizr */
  $(function() {

    $('.filterizr-filter button').on(function() {
      $('.filterizr-filter button').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });
    $('.filterizr-sorting button').on(function() {
      $('.filterizr-sorting button').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });

    var filterizd = $('.filtr-container', options).filterizr();

  });

  return (
    <section id='product' className={layout.sectionReverse}>
      <div className="flex flex-col mt-9">
        <ul>
          <button type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-2 mr-2 rounded-[10px]" onClick={Filterizr} data-filter="all"> All items </button>
          <button type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-2 mr-2 rounded-[10px]" onClick={Filterizr} data-filter="1"> Category 1 </button>
          <button type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-2 mr-2 rounded-[10px]" onClick={Filterizr} data-filter="2"> Category 2 </button>
          <button type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-2 mr-2 rounded-[10px]" onClick={Filterizr} data-filter="3"> Category 3 </button>
        </ul>
        <div className="filtr-container">
          <div class="filtr-item" data-category="1, 2" data-sort="value">
            <img src={HTML} alt="sample" class="portfolio-image" />
          </div>
          <div class="filtr-item" data-category="1, 2, 3" data-sort="value">
            <img src={Wordpress} alt="sample" class="portfolio-image" />
          </div>
          <div class="filtr-item" data-category="2, 3" data-sort="value">
            <img src={Hootsuite} alt="sample" class="portfolio-image" />
          </div>
          <div class="filtr-item" data-category="1, 2, 3" data-sort="value">
            <img src={Facebook} alt="sample" class="portfolio-image" />
          </div>
          <div class="filtr-item" data-category="3" data-sort="value">
            <img src={Shopify} alt="sample" class="portfolio-image" />
          </div>
          <div class="filtr-item" data-category="1, 2, 3" data-sort="value">
            <img src={design} alt="sample" class="portfolio-image" />
          </div>
          <div class="filtr-item" data-category="1, 2" data-sort="value">
            <img src={Responsiveness} alt="sample" class="portfolio-image" />
          </div>
          <div class="filtr-item" data-category="1, 2, 3" data-sort="value">
            <img src={Editing} alt="sample" class="portfolio-image" />
          </div>
          <div class="filtr-item" data-category="2, 3" data-sort="value">
            <img src={Social} alt="sample" class="portfolio-image" />
          </div>
          <div class="filtr-item" data-category="1, 2, 3" data-sort="value">
            <img src={SEO} alt="sample" class="portfolio-image" />
          </div>
        </div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} w-[650px] mt-5`}>Services that accomodate <br className="sm:block hidden"/> all your digital needs</h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>Filter the results by the type business you need a website for and see what is available for you.</p>
      </div>
    </section>
  ) 
}
// Adjust the CSS selector to match the container where
// you set up your image gallery


export default Billing