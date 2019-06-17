<template>
    <div class="header">
        <span class='iconfont icon-arrow-left'></span>
        <p>加班/休假</p>
        <p><span class='iconfont icon-riqixuanze'></span><span class='iconfont icon-fangdajing'></span></p>
    </div>
</template>

<style lang="scss" scoped>
@import "@/static/_minix.scss";
@import "@/static/common.scss";
.header {
  width: 100%;
  height: pxTorem(40px);
  border-bottom: pxTorem(1px) solid #ccc;
  @include box_flex;
  @include justify(space-between);
  @include sizing;
  @include align;
  padding: 0 pxTorem(10px);
  > p {
    span {
      padding: 0 pxTorem(6px);
    }
  }
}
</style>

