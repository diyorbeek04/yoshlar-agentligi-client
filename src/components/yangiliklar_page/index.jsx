import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
// import image from '../imkoniyatlar/images/img1.png'
import axios from "axios";


function YangiliklarComponent() {
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [data , setData] = useState([])
  const navigate = useNavigate();

  useEffect( () =>{
     axios.get(`https://apiastro1.vtormetallmm.ru/news`)
     .then((data) => setData(data))
 }, [])
 const HandleMore = (e) => {
  Navigate(`/yangiliklar/${e.target.id}`)
}
   return (
      <>
         <div className={styles.top}>
            <hr className={styles.hr1} />
            <h1 className={styles.h1}>
               Yangliklar
            </h1>
            <hr className={styles.hr2} />
         </div>
         <div className="container">
            <div className={styles.links}>
               <p className={styles.links__p}><Link to={'/'} className={styles.links__link}> Asosiy </Link> {`>`} Rahbariyat</p>
            </div>
            <div className={styles.buttons}>
               <Link to={'/biz-haqimizda'}><button className={styles.buttons__button}>Agentlik haqida</button></Link>
               <Link to={'/maqsad-va-vazifalar'}><button className={styles.buttons__button}>Maqsad va vazifalar</button></Link>
               <Link to={'/agentlik-tuzilmasi'}><button className={styles.buttons__button}>Agentlikning tuzilmasi</button></Link>
               <Link to={'/rahbariyat'}><button className={styles.buttons__button_this}>Rahbariyat</button></Link>
               <Link to={'/hududiy-boshqarmalar'}><button className={styles.buttons__button}>Hududiy boshqarmalar</button></Link>
            </div>
         </div>

        <div className={styles.container}>
        <div className={styles.left}>
               {data?.data?.map((elem, index) =>

                  <div key={index} className={styles.box}  id={elem.id} onClick={(e) =>  HandleMore(e)}>
                     <img id={elem.id} src={elem.image} alt="image" />
                     <h3 id={elem.id} className={styles.h3}>{elem.title.slice(0 , 29)}...</h3>
                     <p id={elem.id} className={styles.p}>{elem.desc.slice(0, 40)}</p>
                  </div>
               )}
            </div>
        </div>
      </>
   )
}
export default YangiliklarComponent
