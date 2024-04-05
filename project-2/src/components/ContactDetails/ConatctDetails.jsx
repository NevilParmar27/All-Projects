import Button from "../Button/Button";
import styles from "./ContactDetails.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const ConatctDetails = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPOPRT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
          />

          <Button text="VIA CALL" icon={<IoMdCall fontSize={"24px"} />} />
        </div>

        <Button
          isSecond={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMail fontSize={"24px"} />}
        />

        <form>
          <div className={styles.form_controler}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className={styles.form_controler}>
            <label htmlFor="e-mail">E-mail</label>
            <input type="email" name="e-mail" id="e-mail" />
          </div>

          <div className={styles.form_controler}>
            <label htmlFor="Feedback">Feedback</label>
            <textarea type="text" name="Feedback" id="Feedback" rows={5} />
          </div>

            <div style={{display:"flex", justifyContent:"end"}}>

            <Button text= 'SUBMIT'/>
            </div>
          
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ConatctDetails;
