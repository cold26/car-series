<template>
  <div>
    <div class="top1">     
        <!-- ajax请求是异步，第五行一般没事，网不好的时候，页面已经加载，其实其实渲染，【】渲染可以，起码不报错 -->
      <span v-for="(item,index) in list" :key="index" @click="changefn(index)">{{item.key}}</span>
    </div>
    <div class="bottom1">
      <!-- 下面这行注意啦，【】.属性会报错，如果报错，在渲染前判断，判断条件如第九行，这里虽然报错，页面效果正常 -->
      <div v-if="list.length!==0">
        <div v-for="(item,index) in  list[currentIndex].colorList" :key="index">
          <span class="span1" :style={backgroundColor:item.Value}></span>
          <span>{{item.Name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      currentIndex: 1
    };
  },
  computed: {
    ...mapState({
      list: state => state.Color.list
    })
  },
  methods: {
    ...mapActions({
      getcolor: "Color/getcolor"
    }),
    changefn(index) {
      this.currentIndex = index;
    }
  },
  created() {
    this.getcolor(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.span1 {
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>>
