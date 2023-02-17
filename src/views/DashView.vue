
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
          <p>Recent transactions</p>
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
            <p>$40,243.70</p>
          </div>
          <div>
            <p>24h change</p>
            <p>+1,56</p>
          </div>
          <img src="@/assets/images/color_line.png" alt="">
          <div>
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
            <p>$40,243.70</p>
          </div>
          <div>
            <p>24h change</p>
            <p>+1,56</p>
          </div>
          <img src="@/assets/images/color_line.png" alt="">
          <div>
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
        <div>
          <div>
            <img src="@/assets/images/bitcoin_other_col.png" alt="">
            <p>Bitcoin</p>
          </div>
          <div>
            <p>121,6450.45</p>
            <p>BTC</p>
          </div>
        </div>
        <div>
          <div>
            <img src="@/assets/images/other_etherium.png" alt="">
            <p>Bitcoin</p>
          </div>
          <div>
            <p>121,6450.45</p>
            <p>BTC</p>
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
  margin-top: 100px;
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
  gap: 10%;
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
}
#third{
  z-index: 2;
  height: 100%;
  grid-column: 3/4;
  grid-row: 1/2;
}
.end img{
  width: 280px;
  height: auto;
}
</style>