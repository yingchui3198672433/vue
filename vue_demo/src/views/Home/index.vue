<template>
    <div class='wrap'>
        <Header></Header>
        <div class="content">
            <Nav @change='menueChange'></Nav>
            <hr>
            <div class="scroll">
                <div class="nav_scroll">
                    <span></span>
                    <p>
                      <span 
                        :class='{active:val.type===type}' 
                        v-for='(val,i) in buttons'
                        :key='i'
                        @click='changeType(val.type)'
                        >{{val.name}}  
                      </span>
                    </p>
                    <span><i class='iconfont icon-gouwuche'></i><i class='iconfont icon-zixun'></i></span>
                </div>
                <Scroll :list='list' :type='tableOptions.type'></Scroll>
            </div>
        </div>
        <button class='btn' @click='show=true'><span>+</span>发起任务</button>
        <Tank v-show='show' :show='show'></Tank>
    </div>
</template>

<script>
import Header from "./components/Header/index";
import Nav from "./components/Nav/index";
import Scroll from "./components/Scroll/index";
import Tank from "./components/Tank/index";
import request from "@/utils/request";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      show:false,
      type: "overtime",
      tableOptions: {
        status: 0,
        type: "overtime",
        page: 1,
        pageSize: 10,
        create_at: 0
      },
      list:[],
      buttons: [
        {
          type: "overtime",
          name: "加班"
        },
        {
          type: "vacation",
          name: "休假"
        }
      ]
    };
  },
  created() {
    this.getTaskList();
    // this.getUserInfo();
    window.home = this;
  },
  methods: {
    ...mapActions(["user"]),
    menueChange(index) {
      this.tableOptions.status = index;
      this.getTaskList();
    },
    changeType(type) {
      this.tableOptions.type = type;
      this.type = type;
      this.getTaskList();
    },
    getTaskList() {
      request
        .get("/api/task/list", {
          ...this.tableOptions
        })
        .then(res => {
            this.list=res.data.data
        })
    }
  },
  components: {
    Header,
    Nav,
    Scroll,
    Tank
  }
};
</script>

<style lang='scss' scoped>
@import "../../static/_minix";
@import "../../static/common";

.active {
  background: green;
  color: #fff;
}

.ff0 {
  color: #ff0;
}

.wrap {
  width: 100%;
  height: 100%;
  @include box_flex;
  @include direction(column);
}

.content {
  width: 100%;
  flex: 1;
  @include box_flex;
  @include direction(column);
  overflow: hidden;
}

.scroll {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  .nav_scroll {
    width: 100%;
    height: pxTorem(30px);
    @include sizing;
    @include box_flex;
    @include align;
    padding: 0 pxTorem(10px);
    margin-bottom: pxTorem(15px);
    p {
      flex: 1;
      height: 100%;
      @include box_flex;
      @include align;
      border: 1px solid green;
      border-radius: pxTorem(10px);
      overflow: hidden;
      span {
        flex: 1;
        height: 100%;
        @include box_flex;
        @include justify;
        @include align;
      }
      margin: 0 pxTorem(50px);
    }
    span {
      i {
        margin-right: pxTorem(8px);
      }
    }
  }
}

.btn {
  position: absolute;
  bottom: pxTorem(20px);
  right: pxTorem(20px);
  width: pxTorem(80px);
  height: pxTorem(30px);
  border-radius: pxTorem(20px);
  background: green;
  color: #fff;
  font-size: pxTorem(10px);
  span {
    margin-right: pxTorem(8px);
  }
}
</style>


