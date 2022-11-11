import { Map} from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find out how our digital transformation<br className="sm:block hidden"/>works in a few steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>From consultation up to the point of implementation, this is what you should expect when you choose to work with us.</p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={Map} alt="Map" className="w-[90%] h-[90%] rounded-[20px]"/>
      </div>
    </section>
  )

export default CardDeal