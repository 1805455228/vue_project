<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="PullRefresh">
      <router-link to="/booklist" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>


      <yd-list theme="4">
        <div v-for="(item,index) in list" :key="index" @click="getImage(item.bookId,item.id,item.title)">
          <yd-list-item  >
              <img slot="img" :src="pathUrl+'?type=directory&path='+item.localUrl">
              <span slot="title">{{item.title}}</span>
              <yd-list-other slot="other">
                <div>
                  <span class="list-price">{{item.author}}</span>
                  <span class="list-del-price">-</span>
                </div>
                <div>{{item.chapterCount}}</div>
              </yd-list-other>
          </yd-list-item>
        </div>
      </yd-list>

  </yd-layout>
</template>

<script type="text/babel">
  export default {
    name: "app-book",
    data () {
      return {
        page: 1,
        pathUrl:this.global.pathUrl,
        list:[]
      }
    },
    methods: {
        getImage: function(bookId,id,title){
          this.$router.push({
            name: `ImageList`,
            params: {
              bookId: bookId,
              chapterId: id,
              title:title
            }
          })
        }
    },
    // 页面加载之前，用created钩子函数-获取网页数据
    created() {
      const url = '/apis/show/directorylist';
      this.$http.get(url, {params: {type: 'pulldown', page: this.page,pageSize: 200,bookId:this.$route.params.id}}).then((response) => {

        this.list = response.body.content;

      });
    },
    computed: {
      theme() {
        return this.$route.params.id;
      },
      title() {
        return '章节' + this.$route.params.id;
      }
    }
  }
</script>


<style scoped>

</style>
