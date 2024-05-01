import React from "react";
import { Route, Routes } from "react-router-dom";
import AsosiySahifaPage from "../pages/asosiy_sahifa";
import YangiliklarPage from "../pages/yangiliklar_page";
import YangiliklarBatafsilPage from "../pages/yangiliklar_batafsil_page";
import LoyihalarPage from "../pages/loyihalar";
import LoyihalarBatafsilPage from "../pages/loyihalar_batafsil";
import ImkoniyatlarPage from "../pages/imkoniyatlar";
import ImkoniyatlarBatafsilPage from "../pages/imkoniyatlar_batafsil";
import BoglanishComponent from "../components/asosiy_sahifa/boglanish";
import RahbariyatPage from "../pages/rahbariyat";
import RahbariyatMorePage from "../pages/rahbariyat_more_page";
import HuquqiyBoshqarmaPage from "../pages/hududiy_boshqarmalar";
import FotogaleriyaPage from "../pages/fotogaleriya";
import FotogaleriyaBatafsilPage from "../pages/fotogaleriya_batafsil";
import OchiqMalumotlarPage from "../pages/ochiq_malumotlar";
import VideogaleriyaPage from "../pages/videogaleriya";
import VideogaleriyaBatafsilPage from "../pages/videogaleriya_batafsil";
import TadbirlarPage from "../pages/tadbirlar";
import AgentlikHaqidaPage from "../pages/agetlik_haqida";
import MaqsadVaVazifalarPage from "../pages/maqsad_va_vazifalar";
import AgentlikTuzilmasiPage from "../pages/agentlik_tuzilmasi";
import ImkoniyatlarBatafsilComponent from "../components/imkoniyatlar_batafsil/imkonyatlar_component";

function RouterComponent() {
   return (
      <Routes>
         <Route path={"/"} element={<AsosiySahifaPage />} />
         <Route path={"/yangiliklar"} element={<YangiliklarPage />} />
         <Route path={"/yangiliklar/batafsil-yangiliklar"} element={<YangiliklarBatafsilPage />} />
         <Route path={"/loyihalar"} element={<LoyihalarPage />} />
         <Route path={"/loyihalar/batafsil-loyihalar"} element={<LoyihalarBatafsilPage />} />
         <Route path={"/imkoniyatlar"} element={<ImkoniyatlarPage />} />
         <Route path={"/imkoniyatlar/batafsil-imkoniyatlar"} element={<ImkoniyatlarBatafsilPage />} />
         <Route path={"/biz-haqimizda"} element={<AgentlikHaqidaPage />} />
         <Route path={"/boglanish"} element={<BoglanishComponent />} />
         <Route path={"/rahbariyat"} element={<RahbariyatPage />} />
         <Route path={"/rahbariyat/batafsil-rahbariyat"} element={<RahbariyatMorePage />} />
         <Route path={"/rahbariyat/batafsil-rahbariyat"} element={<RahbariyatMorePage />} />
         <Route path={"/hududiy-boshqarmalar"} element={<HuquqiyBoshqarmaPage />} />
         <Route path={"/fotogaleriya"} element={<FotogaleriyaPage />} />
         <Route path={"/fotogaleriya/fotogaleriya-batafsil"} element={<FotogaleriyaBatafsilPage />} />
         <Route path={"/ochiq-malumotlar"} element={<OchiqMalumotlarPage />} />
         <Route path={"/videogaleriya"} element={<VideogaleriyaPage />} />
         <Route path={"/videogaleriya/batafsil-videogaleriya"} element={<VideogaleriyaBatafsilPage />} />
         <Route path={"/tadbirlar"} element={<TadbirlarPage />} />
         <Route path={"/maqsad-va-vazifalar"} element={<MaqsadVaVazifalarPage />} />
         <Route path={"/agentlik-tuzilmasi"} element={<AgentlikTuzilmasiPage />} />
         <Route path="/imkoniyatlar/:id" element={<ImkoniyatlarBatafsilComponent />} />
         <Route path="/yangiliklar/:id" element={<YangiliklarBatafsilPage />} />


      </Routes>
   )
}

export default RouterComponent