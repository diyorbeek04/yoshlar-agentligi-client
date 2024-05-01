import React from "react";
import styles from './style.module.css'
import image from '.././imkonyatlar_component/image/image.png'

function YangiliklarBatafsilComponent() {
   const data = [1, 2, 3, 4]

   return (
      <>
         <div className={styles.top}>
            <hr className={styles.hr1} />
            <h1 className={styles.h1}>
               mavzuga oid
            </h1>
            <hr className={styles.hr2} />
         </div>
         <div className="container">
        <div className={styles.container}>
            <div className={styles.left}>
               {data.map((elem, index) =>

                  <div key={index} className={styles.box}>
                     <img src={image} alt="image" />
                     <h3 className={styles.h3}>{"Yoshlar bandligini ta’minlash va rivojlantirish".slice(0 , 29)}...</h3>
                     <p className={styles.p}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
               )}
            </div>
         </div>
        </div>
      </>
   )
}
export default YangiliklarBatafsilComponent