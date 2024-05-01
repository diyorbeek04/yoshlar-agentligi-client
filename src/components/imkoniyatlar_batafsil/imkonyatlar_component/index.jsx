import React, { useEffect, useRef, useState } from "react";
import styles from './style.module.css'
import image from './image/image.png'
import { useParams } from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axios from "axios";

function ImkoniyatlarBatafsilComponent() {
   const [data  , setData] = useState([])
   const {id} = useParams();
   useEffect( () =>{
      axios.get(`https://apiastro1.vtormetallmm.ru/possibilities/${id}`)
      .then((data) => setData(data))
  }, [])

   return (
      <>
         <div className={styles.top}>
            <hr className={styles.hr1} />
            <h1 className={styles.h1}>
               IMkoniyatlar
            </h1>
            <hr className={styles.hr2} />
         </div>
         <div className="container">
            <div className={styles.container}>
        {data?.data?.map((elem , index) => 
               <div key={index} className={styles.left}>
                  <h2 className={styles.h2 - 1}>{elem.title}</h2>
                  <small className={styles.small}><CalendarMonthIcon/>21 Sentabr 2021 </small>
                  <img src={image} alt="image" />
                  <p className={styles.p}>
                   {elem.desc}
                  </p>
               </div>
        )}
               <div className={styles.right}>
                  <h2 className={styles.h2}>
                     IMkoniyatlar
                  </h2>
                  <ul className={styles.ul}>
                     <li className={styles.li}>
                        Besh Tashabbus loyihalarini muvofiqlashtirish
                     </li>
                     <li className={styles.li}>
                        Yoshlarga oid qonunchilik tashabbuslari va huquqiy savodxonlikni oshirish bo‘limi
                     </li>
                     <li className={styles.li}>
                        Fuqarolar murojati bo'limi
                     </li>
                     <li className={styles.li}>
                        Yoshlarni ijtimoiy himoya qilish va sog‘lom turmush tarzini targ‘ib qilish bo‘limi
                     </li>
                     <li className={styles.li}>
                        Yoshlarga oid qonunchilik tashabbuslari va huquqiy savodxonlikni oshirish bo‘limi                  </li>
                     <li className={styles.li}>
                        Davlat va xo'jalik boshqaruv organlarida yoshlar siyosatini muvofiqlashtirish boshqarmasi                  </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}
export default ImkoniyatlarBatafsilComponent