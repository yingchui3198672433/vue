<template>
    <div class="mask">
        <div class="choise">
            <div class="btns">
                <dl>
                    <dt><span class='iconfont icon-naozhong'></span></dt>
                    <dd>工作</dd>
                </dl>
                <dl>
                    <dt><span class='iconfont icon-share6'></span></dt>
                    <dd>休假</dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    show: Boolean
  },
  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/static/_minix.scss";
@import "@/static/common.scss";
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  .choise {
    width: 100%;
    height: 20%;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    @include box_flex;
    @include align;
    @include justify;
    .btns {
      @include box_flex;
      text-align: center;
      dl {
        dt {
          width: pxTorem(20px);
          height: pxTorem(20px);
          border-radius: 50%;
          @include box_flex;
          @include align;
          @include justify;
        }
      }
    }
  }
}
</style>



