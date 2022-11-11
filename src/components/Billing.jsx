import { apple, google} from "../assets"
import styles, {layout} from "../style"
import Slider from "../components/Slider";

const Billing = () => {
  
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <div className="wrapper">
          <div className="container">
            <Slider />
          </div>
        </div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Services that you<br className="sm:block hidden"/> can benefit from</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We can offer a wide array of services to help put your business in the best position to be digitally proficient.</p>
        <div className="flex flex-row flex-wrap sm:mt-0 mt-6">
        </div>
      </div>
    </section>
  )
};

export default Billing