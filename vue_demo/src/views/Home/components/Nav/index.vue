<template>
    <ul class='nav'>
        <li :class='{
            green:value.index=== index
        }'
        @click="$emit('change',value.index)"
        v-for="value in buttons" 
        :key="value.index"
        >
            <span :class="'iconfont '+value.icon"></span>
            <p>{{value.title}}</p>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import "@/static/_minix.scss";
@import "@/static/common.scss";

.green {
  color: green;
}
.nav {
  width: 100%;
  height: pxTorem(60px);
  @include box_flex;
  @include justify(space-between);
  @include sizing;
  @include align;
  padding: 0 pxTorem(10px);
  border-bottom: pxTorem(4px) solid #ccc;
  li {
    flex: 1;
    height: 100%;
    @include box_flex;
    @include direction(column);
    @include justify;
    @include align;
    p {
      line-height: pxTorem(20px);
    }
  }
}
</style>

<script>
import request from '@/utils/request';
export default {
  data() {
    return {
      index:0,
      buttons: [
        {
          index: 0,
          title: "待处理",
          icon: "icon-05"
        },
        {
          index: 1,
          title: "已发送",
          icon: "icon-07"
        },
        {
          index: 2,
          title: "已处理",
          icon: "icon-xuanzhong-01"
        }
      ]
    };
  },
  methods: {
    change(index){
        this.index=index;
        this.$emit('change',index)
    }
  },
};
</script>


