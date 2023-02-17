
<template >

  <main>
    <section id="first">
      <div>
        <img src="@/assets/images/minance.png" alt="" class="minance" >
      </div>
      <div class="one">
        <img src="@/assets/images/dash.png" alt="" class="dashboard">
        <div class="block_service">
          <div class="inline">
            <img src="@/assets/images/invoises.png" alt="">
            <p>invoices</p>
          </div>
          <div class="inline">
            <img src="@/assets/images/clients.png" alt="">
            <p>clients</p>
          </div>
          <div class="inline">
            <img src="@/assets/images/products.png" alt="">
            <p>produits</p>
          </div>
          <div class="inline">
            <img src="@/assets/images/messages.png" alt="">
            <p>messages</p>
          </div>
          <div class="inline">
            <img src="@/assets/images/settings.png" alt="">
            <p>settings</p>
          </div>
          <div class="inline">
            <img src="@/assets/images/Heeeeelllppp.png" alt="">
            <p>Help</p>
          </div>
        </div>
        <div class="inend">
          <img src="@/assets/images/logout.png" alt="">
          <p>Log out</p>
        </div>
      </div>
    </section>
    <section id="second">
      <div class="middle">
        <div class="rogers">
          <h2 >
            Hi, Rogers
          </h2>
        </div>
        <div>
<!--          <p>search</p>-->
          <img src="@/assets/images/frame_search.png" alt="" class="searchbar" >
        </div>
      </div>
      <div>
        <div class="center">
          <div class="first_row_block">
            <div>
              <h3>Total Balance</h3>
              <div class="num">
                <p>0.97894652 </p>
                <img src="@/assets/images/Bitcoin_tag.png" alt="">
              </div>
              <p class="least">$40,123.56</p>
            </div>
            <div class="portfolio">
              <div>
                <p>Portfolio</p>
              </div>
              <p>Funding</p>
              <p>Assets</p>
              <p>P2P</p>
            </div>
          </div>
          <div class="second_row_block">
            <img src="@/assets/images/gros-diagrame.png" alt="" class="menacing"  >
          </div>
        </div>
        <div class="recent-trans">
          <p>Recent Transactions</p>
          <p>See all coins</p>
        </div>
        <div class="bitcoin_bar">
          <img src="@/assets/images/bitcoin_log.png" alt="">
          <div>
            <p>Bitcoin</p>
            <p>BTC</p>
          </div>
          <div>
            <p>Market Cap</p>
            <p class="blue">$40,243.70</p>
          </div>
          <div>
            <p>24h change</p>
            <p class="vert">+1,56</p>
          </div>
          <img src="@/assets/images/color_line.png" alt="">
          <div class="trade">
            <p>Trade</p>
          </div>
        </div>
        <div class="bitcoin_bar">
          <img src="@/assets/images/etherium.png" alt="">
          <div>
            <p>Bitcoin</p>
            <p>BTC</p>
          </div>
          <div>
            <p>Market Cap</p>
            <p class="violet">$40,243.70</p>
          </div>
          <div>
            <p>24h change</p>
            <p class="rouge">+1,56</p>
          </div>
          <img src="@/assets/images/color_line2.png" alt="">
          <div class="trade">
            <p>Trade</p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
    <section id="third">
      <div class="end">
        <img src="@/assets/images/side_bar.png" alt="">
      </div>
      <h2>Assets</h2>
      <div>
        <div class="card">
          <div>
            <img src="@/assets/images/bitcoin_other_col.png" alt="">
            <p>Bitcoin</p>
          </div>
          <div class="rest">
            <p>121,6450.45</p>
            <p>BTC</p>
          </div>
        </div>
        <div class="card">
          <div >
            <img src="@/assets/images/other_etherium.png" alt="">
            <p>Etherum</p>
          </div>
          <div class="rest">
            <p>143,850.45</p>
            <p>ETH</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'DashView',
  props: {
    msg: String
  }
}
</script>

<style >
*{
  margin: 0px;
  color: aliceblue;
}
body {
  background: #000000;
  height: 100vh;
}
main{
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 5.4fr 2.6fr;
  grid-template-rows: 100vh;
}
#first{
  height: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
}
.minance{
  width: 70%;
  margin-inline: 12%;
  margin-top: 5%;
}
.dashboard{
  margin: 10%;
  width: 65%;
}
.block_service{
  display: flex;
  flex-direction: column;
  margin-inline: 20%;
  margin-top: 0%;
  margin-bottom: 50px;
}
.inline{
  display: flex;
  flex-direction: row;
  margin: 5%;
}
.inend{
  display: flex;
  flex-direction: row;
  margin-top: 300px;
  margin-left: 20%;
}
.inline img{
  width: 20%;
}
.inline p{
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size:  20px;
  margin-left: 10%;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
}
.one{
  text-align: center;
  /*color: rgb(244, 241, 232);*/
  margin-top: 20%;
}
#second{
  height: 100%;
  grid-column: 2/3;
  grid-row: 1/2;
}
.middle{
  display: flex;
  flex-direction: row;
}
.middle .rogers h2{
  font-family: 'Poppins',sans-serif;
  margin-top: 1em;
  color: aliceblue;
  width: 150px;
}
/*.middle div p{
  margin-left: 10em;
  z-index: 2;
  height: auto;
}*/
.middle div img{
  margin-left: 10em;
  margin-top: 1em;
  width: 60%;
  height: auto;
}
.first_row_block{
  display: flex;
  flex-direction: row;
  margin-top: 2.5em;
  gap: 15%;
  color: aliceblue;

}
.first_row_block div h3{
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  opacity: 0.8;
  color: #FFFFFF;
  margin-bottom: 10px;
}
.num{
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 3px;
}
.num p{
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: #FFFFFF;
}
.num img{
  width: 40px;
  height: auto;
}
.least{
  margin-bottom: 10px;
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 33px;
  color: #FFFFFF;
  opacity: 0.7;
}
.second_row_block img{
  width: 100%;
  height: auto;
}
.portfolio{
  display: flex;
  flex-direction: row;
  width: 300px;
  height:7vh ;
  align-items: center;
  margin-top: 20px;
  background: #292727;
  border-radius: 12px;
  gap: 15px;
}
.portfolio div{
  margin-left: 15px;
  padding-block: 5px;
  padding-inline: 15px;
  border-radius: 12px;
  background: #0D0C0C;
}
.recent-trans{
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: space-between;
}
.recent-trans p:nth-of-type(1){
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  color: #FFFFFF;
}
.recent-trans p:nth-of-type(2){
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}
.bitcoin_bar{
  padding: 10px;
  display: flex;
  flex-direction: row;
  margin: 20px;
  gap: 5%;
  background: rgba(32, 35, 43, 0.7);
  backdrop-filter:blur(1px) ;
  border-radius: 20px;
}
.bitcoin_bar img:nth-of-type(1){
  width: 5%;
  height: 3%;
  margin-left: 40px;
}
.bitcoin_bar img:nth-of-type(2){
  width: 20%;
  height: 15px;
  margin-top: 10px;
  margin-left: 5px;
}
.bitcoin_bar div div p{
  font-family: 'Inter',serif;
  width: 15px;
  font-style: normal;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  opacity: 0.95;
}
.bitcoin_bar div .blue{
  color: #1970D6;
  opacity: 0.7;
}
.bitcoin_bar div .vert{
  color: #4AD619;
  opacity: 0.7;
}
.bitcoin_bar div .violet{
  color: #6C1182;
  opacity: 0.7;
}
.bitcoin_bar div .rouge{
  color: #D61919;
  opacity: 0.7;
}
.bitcoin_bar div.trade{
  background: #000000;
  height: 20px;
  border-radius: 10px;
  padding-inline: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
}
#third{
  z-index: 2;
  height: 100%;
  grid-column: 3/4;
  grid-row: 1/2;
}
.end img{
  width: 95%;
  height: auto;
}
#third h2{
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  margin-left: 5%;

  color: #FFFFFF;
}
.card:nth-of-type(1){
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  background: linear-gradient(98.73deg, #611D8D 35.75%, #2F7EC1 73.26%);
  border-radius: 25px;
  margin-left: 5%;
}
.card:nth-of-type(2){
  margin-left: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  background: linear-gradient(99.56deg, #FAFF00 35.82%, #29ABE2 64.75%, rgba(255, 255, 255, 0.7) 91.33%);
  border-radius: 30px;
}
.card div{
  margin-left: 5%;
}
.card div img{
  width: 20%;
  margin: 2%;
}
.card div p{
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-left: 4%;
  color: #FFFFFF;
}
.card .rest{
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-inline: 15px;
}
.card .rest p{
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
/*Scrollbar CSS*/
.left::-webkit-scrollbar {
  width: 5px;
}

.left::-webkit-scrollbar-thumb {
  background-color: rgba(232, 198, 193, 0.795);
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(189, 124, 124);
}
/* Responsive */
@media (max-width: 964px) {
  *{
    margin: 0px;
    color: aliceblue;
  }
  body {
    background: #000000;
    height: 270vh;
  }
  main {
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 2% 96% 2%;
    grid-template-rows: 10vh 200vh 60vh ;
    height: 270vh;
    background: #000000;
  }
  #first{
    height: 100%;
    grid-column: 1/4;
    grid-row: 1/2;
  }
  main .right {
    background-color: rgb(244, 241, 232);
    height: 100%;
    grid-column: 1/4;
    grid-row: 1/2;
   }
}
/*# sourceMappingURL=style.css.map */
</style>