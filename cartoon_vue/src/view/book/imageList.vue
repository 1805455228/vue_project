<template>
  <yd-layout>
    <yd-navbar fixed="true" slot="navbar" :title="title">
      <router-link :to="'/directoryList/'+bookId" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>



        <div class="image-vue" v-for="item in list">
          <img slot="img" :src="pathUrl+'?type=image_v2&path='+item.localUrl">
        </div>


  </yd-layout>
</template>

<script type="text/babel">
  export default {
    name: "app-book",
    data () {
      return {
        bookId:this.$route.params.bookId,
        page: 1,
        pathUrl:this.global.pathUrl,
        title:this.$route.params.title,
        list:[]
      }
    },
    methods: {

    },
    // 页面加载之前，用created钩子函数-获取网页数据
    created() {
      const url = '/apis/show/imagelist';
      this.$http.get(url, {params:
          {type:'pulldown',
            page: this.page,
            pageSize: 200,
            bookId:this.$route.params.bookId,
            chapterId:this.$route.params.chapterId}}).then((response) => {

        this.list = response.body.content;

        console.log();

      });
    },
    computed: {
      theme() {
        return this.$route.params.id;
      },
      title() {
        return this.title;
      }
    }
  }
</script>


<style scoped>
.image-vue img{
  width: 100%;
  margin:0px;
  margin-bottom: -5px;
  padding: 0px;
}
</style>
