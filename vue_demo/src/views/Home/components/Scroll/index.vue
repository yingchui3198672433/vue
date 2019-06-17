<template>
    <div class="scroll_bar">
        <div>
            <div class="item-bar" v-for='val in list' :key='val.applicationNumber'
            @click='handleToDetail(val.applicationNumber)'>
                <div class='title'>
                    <span class='tips'>{{val.applicationNumber}}</span><span><i class='iconfont icon-05 ff0'></i>{{showType(val.status)}}</span>
                </div>
                <div class='info'>
                    <div>
                        <p>申请人</p><span>{{val.nickname}}</span>
                    </div>
                    <div>
                        <p>加班日期</p><span>{{new Date().toLocaleString()}}</span>
                    </div>
                    <div>
                        <p>加班类型</p><span>{{val.list_type ==='overtime' ? '加班' :'休假'}}</span>
                    </div>
                    <div>
                        <p>加班时长</p><span>2.5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request';
export default {
  props:{
    list:Array,
    type:String
  },
  data(){
    return {

    }
  },
  methods:{
    showType(status){
      switch (status) {
        case 0:
          return '待处理'
        case 1:
          return '已发起'
        case 2:
          return '已处理'
        default:
          break;
      }
    },
    handleToDetail(id){
      this.$router.push(`/Detail/${this.type}/${id}`)
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/static/_minix.scss";
@import "@/static/common.scss";
.scroll_bar {
  width: 100%;
  flex: 1;
  @include box_flex;
  @include direction(column);
  overflow-y: scroll;
  .item-bar {
    width: 100%;
    height: pxTorem(100px);
    @include box_flex;
    @include direction(column);
    @include justify(space-between);
    @include align;
    @include sizing;
    padding: 0 pxTorem(15px);
    margin-bottom: pxTorem(8px);
    border-bottom: pxTorem(5px) solid #ccc;
    .title {
      width: 100%;
      height: pxTorem(15px);
      @include box_flex;
      @include justify(space-between);
      @include align;
      span {
        i {
          margin-right: pxTorem(6px);
        }
      }
    }
    .info {
      width: 100%;
      @include box_flex;
      flex-wrap: wrap;
      @include justify(space-between);
      @include sizing;
      div {
        width: 40%;
        height: pxTorem(40px);
        @include box_flex;
        @include align;
        @include justify(space-between);
        @include sizing;
        p {
          margin-right: pxTorem(10px);
        }
      }
    }
  }
}
</style>

