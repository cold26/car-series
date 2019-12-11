<template>
  <div class="wrap">
    <div class="header">
      <p>可向多个商家咨询最低价，商家及时回复</p>
    </div>
    <div class="main">
      <div v-if="list.details">
        <div class="shang">
          <img :src="list.details.serial.Picture" />
          <div class="shang-right">
            <p>{{list.details.serial.AliasName}}</p>
            <p>
              <span>{{list.details.market_attribute.year}}</span>
              {{list.details.exhaust}}
              <span>{{list.details.exhaust_str}}</span>
              <span>{{list.details.car_name}}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="zhong">个人信息</div>
      <div class="gerenxinxi">
        <p>
          <span>姓名</span>
          <input type="text" placeholder="请输入你的真实姓名" />
        </p>
        <p>
          <span>手机</span>
          <input type="text" placeholder="输入你真实的手机号码" />
        </p>
        <p class="chengshi1" @click="tanchu">
          <span class="c1">城市</span>
          <span class="c2"></span>
          <span class="c3">{{cityName || '北京'}}></span>
        </p>
      </div>
      <!-- <div class="gun"></div>    测试滚动对下面滑块有没有影响-->
      <div class="button1">
        <button>咨询底价</button>
      </div>
      <div class="box">
        <div class="one" v-for="(item,index) in list.list" :key="index">
          <span
            class="duigou"
            @click="changeduigou(index)"
            :class="{active4:isArr.includes(index)}"
          >√</span>
          <!-- <span class="duigou" @click="changeduigou" >√</span> -->

          <!-- <span :style="{display:'block',width:'20px',height:'20px',background:'red'}">√</span> -->
          <li>
            <p>{{item.dealerShortName}}</p>
            <span>万</span>
          </li>
          <li>
            <p class="c1">{{item.address}}</p>
            <span :style="{width:'37px'}">售本市</span>
          </li>
        </div>
      </div>
    </div>

    <!-- up是划出城市的二级联动，是定位的 -->
    <Up :chuan.sync="flag" @func="getMsgFormSon"></Up>
    <!-- 通过.sync子组件可以改变父组件的值 -->
  </div>
</template> 


<script>
import { mapState, mapActions } from "vuex";
import Up from "../components/up";

export default {
  data() {
    return {
      flag: false,
      flag1: false,
      msgFormSon: false,
      cityid: 201,
      currentIndex: 0,
      isArr: [0, 1, 2]
    };
  },
  created() {
    this.nashuju({ carId: this.$route.query.carId, cityId: this.cityid });
    
  },
  components: {
    Up
  },
  computed: {
    ...mapState({
      list: state => state.Zxdj.list,
      list1: state => state.Up.list, //list1是为了获取cityid,
      cityName: state => state.Up.cityName,
      getCityID: state => state.Up.cityID
    })
  },
  watch: {   //watch方法用于监听data和computed里数据得变化,第一个参数现在的值，第二个参数，旧的值，里面写函数名
    getCityID(now, old) { //函数名就是上面data或者computed里的数据，在这里一旦getCityID值变化，会立即执行这个函数
       this.nashuju({ carId: this.$route.query.carId, cityId: now });
    }
  },  
  methods: {
    //在mehoods里拿过来vuex里的方法，然后在生命周期里掉
    ...mapActions({
      nashuju: "Zxdj/nashuju"
      
    }),
    ...mapActions({
      getSheng: "Up/getSheng"
    }),
    tanchu() {
      this.flag = true;
    },
    getMsgFormSon(data) {
      this.cityid = data;
      console.log(this.cityid);

      // this.nashuju({carId:this.$route.query.carId,cityId:this.cityid})
    },
    changeduigou(ind) {   //isArr此时是[0,1,2]，所以前三个默认打对勾
      //let arr = Object.assign(this.);
      let id = this.isArr.indexOf(ind); //点击查找传过来的下标
      if (this.isArr.includes(ind)) {  //如果这个数组里有点击传过来的值，将这个值从数组里删掉，此时就不打对勾了
        this.isArr.splice(id, 1);
        
      } else {   //如果这个数组里没有，push进去，就打上对勾了
        this.isArr.push(ind);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  margin-top: 10px;
  padding: 0 10px;
  background: #fff;
}
.box .one {
  position: relative;
  width: 100%;
  height: 60px;
  padding: 10px;
  padding-left: 30px;
  border-bottom: 1px solid #ccc;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      overflow: hidden;
    }
  }
}
.one li:first-child p {
  font-size: 15px;
}

.wrap {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f4f4f4;
  // overflow: hidden;
}
.main {
  width: 100%;
  overflow-y: auto;
}
.header {
  width: 100%;
  height: 37px;
  background: #79cd92;
  line-height: 37px;
}
.header p {
  color: white;
  text-align: center;
}
.shang {
  display: flex;
  width: 100%;
  height: 70x;
  img {
    width: 115px;
    height: 70.5px;
  }
}
.shang .shang-right {
  display: flex;
  flex-direction: column;
  height: 30px;
  line-height: 30px;
}
.shang .shang-right .p {
  margin-top: 10px;
}
.zhong {
  width: 100%;
  height: 30px;
  background: #ccc;
  color: #666;
  line-height: 30px;
}
.gerenxinxi {
  width: 355px;
  margin: 0 auto;
  background: #fff;
}
.gerenxinxi p {
  width: 100%;
  height: 44px;

  border-bottom: 1px solid #ccc;
  line-height: 44px;
}
.gerenxinxi p span {
  font-size: 16px;
}
.gerenxinxi p input {
  width: 312px;
  height: 20px;
  border: none;
  outline: none;
  text-align: right;
}
.gerenxinxi p input::-webkit-input-placeholder {
  font-size: 13px;
}
.chengshi1 {
  display: flex;
  .c1 {
    flex: 2;
  }
  .c2 {
    flex: 6;
  }
  .c3 {
    flex: 2;
  }
}
.button1 {
  width: 375px;
  height: 35px;
  margin-top: 20px;
  text-align: center;
  button {
    width: 300px;
    height: 100%;
    background: #3aacff;
    color: white;
    outline: none;
    margin: 0 auto;
    border: none;
    border-radius: 5px;
  }
}
.gun {
  width: 100%;
  background: red;
  height: 2000px;
}

.duigou {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3aacff;
  color: #3aacff;
  line-height: 20px;
  text-align: center;
  position: absolute;
  left: 5px;
  top: 50%;

  &.active4 {
    color: white;
  }
}
</style>