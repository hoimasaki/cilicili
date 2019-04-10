<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal"  theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <!-- <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem> -->
                    </div>
                </Menu>
            </Header>
            <Content>
                   <div class="player">
        <video id="videojs-flvjs-player" class="video-js vjs-default-skin" controls>
            <source src=http://cn-sdjn3-cu-v-05.acgvideo.com/vg5/upgcxcode/55/66/43706655/43706655-1-80.flv?expires=1530173100&platform=pc&ssig=K3_o89LwIzwxWSRme-Pdsg&oi=1778518955&nfa=zlb44/URExVDmluh6FGErg==&dynamic=1&hfa=2030524866&hfb=Yjk5ZmZjM2M1YzY4ZjAwYTMzMTIzYmIyNWY4ODJkNWI=&trid=693829cba02c4dc8b821979eff90c32e"
         " type='video/x-flv'>
            </video>

          <br/>
        </div>
            </Content>
            <Footer class="layout-footer-center">沪ICP备16011151号-1 2018 &copy; CBPASS 境界</Footer>
        </Layout>
    </div>
</template>



<style scoped>
.ivu-layout-header {
  background: #ffff !important;
  padding: 0 0 !important;
  height: 64px !important;
  line-height: 64px !important;
}
.ivu-layout-content {
  margin: 60px 0px 0px !important;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>

<script>
videojs("videojs-flvjs-player", {
  techOrder: ["html5", "flvjs"],
  flvjs: {
    mediaDataSource: {
      isLive: true,
      cors: true,
      withCredentials: false
    }
    // config: {},
  }
});
export default {
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
