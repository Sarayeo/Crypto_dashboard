

<template >

  <main>
    <section id="first">
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </section>
    <section id="second">

    </section>
    <section id="third">

    </section>
  </main>

  <div>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>
lang="scss"
<style >

body {
   background: #000000;
}
main{
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 5.4fr 2.6fr;
  grid-template-rows: 10vh 90vh ;
}
#first{
  background-color: rgb(244, 241, 232);
  height: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
}
#second{
  background-color: rgb(104, 242, 232);
  height: 100%;
  grid-column: 2/3;
  grid-row: 1/2;
}
#third{
  background-color: rgb(104, 254, 132);
  height: 100%;
  grid-column: 3/4;
  grid-row: 1/2;
}


img {
  width: 20%;
  animation: animate 3s linear;
  transition: 0.7s;
}

</style>