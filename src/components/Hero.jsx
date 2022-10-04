import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"
import Typewriter from 'typewriter-effect';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}> 
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify items-center w-full">
      <Typewriter 
        options={{
          strings: ['We are Developers', 'We are Creators','We are <span style="color:#004278">Software</span> <span style="color: #313131;"> Masters</span>'],
          autoStart: true,
          loop: true,
        }}

      />
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      A development team commited to providing high quality digital services to help you transform your business.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"> </div>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"> </div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"> </div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero