import React, { useEffect, useRef, useState } from "react";
import styles from './style.module.css'
import axios from "axios";
import image from './images/img1.png'
import { useNavigate } from 'react-router-dom'
import { navigate } from "react-router-dom";

function ImkoniyatlarComponent() {
   const [data , setData] = useState([])
   const navigate = useNavigate();

   useEffect( () =>{
      axios.get(`https://apiastro1.vtormetallmm.ru/possibilities`)
      .then((data) => setData(data))
  }, [])


  const HandleMore = (e) => {
   navigate(`/imkoniyatlar/${e.target.id}`)
 }
   // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
            <div className={styles.left}>
               {data?.data?.map((elem, index) =>

                  <div key={index} className={styles.box} id={elem.id} onClick={(e) =>  HandleMore(e)} >
                     <img id={elem.id} src={image} alt="image" />
                     <h3 id={elem.id} className={styles.h3}>{elem.title.slice(0 , 29)}...</h3>
                     <p id={elem.id} className={styles.p}>{elem.desc.slice(0, 40)}...</p>
                  </div>
               )}
            </div>
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
export default ImkoniyatlarComponent