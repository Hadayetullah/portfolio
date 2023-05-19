import { UilPhone, UilMessage, UilEnvelope, UilMapMarker } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';


const Contactme = ({activeMenu}) => {
  return (
    <div>
        <section className="contact section" id="contactme">
            <div className={`contact__top ${activeMenu}-active`}>
                <h2 className="section__title">Contact Me</h2>
                <span className="section__subtitle">Get in touch</span>
            </div>

            <div className={`contact__container container grid ${activeMenu}-active`}>
                <div className='contact__info'>
                    <div className="contact__information">
                        <UilPhone className="contact__icon"  />

                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">01846-857388</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <UilEnvelope className="contact__icon" />
                    
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">hadayetullah30@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <UilMapMarker className="contact__icon" />
                    
                    <div>
                        <h3 className="contact__title">Location</h3>
                        <span className="contact__subtitle">Nikunja-2, Khelkhet, Dhaka</span>
                    </div>
                    </div>
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Name</label>
                        <input type="text" className="contact__input" />
                    </div>

                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Email</label>
                        <input type="email" className="contact__input" />
                    </div>
                    </div>

                    <div className="contact__content">
                    <label htmlFor="" className="contact__label">Project</label>
                    <input type="email" className="contact__input" />
                    </div>

                    <div className="contact__content">
                    <label htmlFor="" className="contact__label">Message</label>
                    <textarea name="" id="" cols="" rows="7" className="contact__input" />
                    </div>

                    <div>
                    <Link to="#" className="button button--flex">
                        Send Message
                        <UilMessage className="button__icon" />
                    </Link>
                    </div>
                </form>
            </div>
      </section>
    </div>
  )
}

export default Contactme;
