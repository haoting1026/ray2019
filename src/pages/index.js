import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';

const IndexPage = () => (
  <Layout>
    <Header />
    <div id="main">
      <header className="major container medium">
        <h2>
          前言
        </h2>
        <p style={{ 'textAlign': 'left', 'textTransform': 'none', }}>
          自2017年起，行政院PDIS小組展開青年學生體檢政府網站專案 (Rescue Action by Youth, RAY)。當年度由見習同學檢驗政府網站在 Chrome 與 Safari 上，是否能有相同的瀏覽體驗；2018年則是以政府機關網站是否支援「手機瀏覽」為目標實施檢測，以求精進政府網站跨平台的順暢度。
          由於行政院國家發展委員會開始進行改善政府數位服務的相關業務，在前兩年的基礎上，2019年的RAY計畫，便從挑選與大眾日常生活相關的行政院所屬網站開始，結合見習青年的設計專業和使用者角度，改善數位服務的使用者體驗。
        </p>
      </header>
      <header className="major container medium">
        <h2>
          計劃源起
        </h2>
        <p style={{ 'textAlign': 'left', 'textTransform': 'none', }}>
          2019年，我們以「協助優化政府網站數位服務」為計畫目的，招募具UI（User Interface）使用者介面或UX（User Experience）使用者體驗相關專長或實務經驗的青年學生，檢核服務後提供改善後的數位服務模型，供各網站主管機關和社會大眾參考。
        </p>
      </header>
      <header className="major container medium">
        <h2>
          設計步驟
        </h2>
        <p style={{ 'textAlign': 'left', 'textTransform': 'none', }}>
          為確保同學的工作重點一致、檢測後獲得明確結果，PDIS小組參考台灣科技大學林久翔老師的建議及本辦過往訪談經驗，整理出適用於2019年RYAY計畫的「使用者體驗」設計六步驟。在計畫開始時，我們舉辦工作坊，協助同學瞭解此六步驟及執行期程；過程中，同學需訪談相關使用者、確認問題以後，方能進行設計和產出原型。這些設計歷程除了讓同學們明確掌握自身專案進度，也可供往後相關單位參考。
        </p>
        <img src='https://raw.githubusercontent.com/PDIS/ray2019/master/src/assets/images/Ray3_process.png' alt='' width={"100%"}></img>
      </header>
      <header className="major container medium">
        <h2>
          專案成果
        </h2>
      </header>
      <Project />
      <footer className="major container medium">
        <h2>計畫結束</h2>
        <img src='https://github.com/PDIS/ray2019/blob/master/src/assets/images/final.jpg?raw=true' alt='' width={"100%"}></img>
      </footer>
    </div>
    {<Footer />}
  </Layout>
);

export default IndexPage;
