<template>
  <div id="app-book">
    <yd-layout>
      <yd-navbar slot="navbar" :title="title">
        <router-link to="/" slot="left">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>

      <yd-list :theme="theme">
        <yd-list-item v-for="item in booklist" :href="'/directoryList/' + item.id">
          <img slot="img" :src="pathUrl+'?type=book&path='+item.localUrl">
          <span slot="title">{{item.name}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price">{{item.author}}</span>
              <span class="list-del-price">-</span>
            </div>
            <div>{{item.chapterCount}}</div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>
    </yd-layout>
  </div>
</template>

<script type="text/babel">
  export default {
    name: "app-book",
    data () {
      return {
        pathUrl:this.global.pathUrl,
        booklist:[]
      }
    },
    methods: {
    },
    // 页面加载之前，用created钩子函数-获取网页数据
    created() {
      this.$http.get("/apis/show/booklist?page=1&pageSize=500&")
        .then((data) => {
          console.log(data)
          this.booklist = data.body.content;
        })
    },
    computed: {
      theme() {
        return this.$route.params.id;
      },
      title() {
        return '漫画' + this.$route.params.id;
      }
    }
  }
</script>


<style scoped>

</style>
