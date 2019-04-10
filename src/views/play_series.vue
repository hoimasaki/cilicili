<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal"  theme="light" active-name="1">
                    <router-link :to="{ path:'/'}"><img data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" style="margin-left:20px" src="../assets/images/logo.png" alt="neuer"/></router-link>
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
          <video-player  class="vjs-custom-skin"
                         ref="videoPlayer"
                         crossOrigin="Anonymous"
                         :options="playerOptions"
                         :playsinline="true"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
                         @ended="onPlayerEnded($event)"
                         @loadeddata="onPlayerLoadeddata($event)"
                         @waiting="onPlayerWaiting($event)"
                         @playing="onPlayerPlaying($event)"
                         @timeupdate="onPlayerTimeupdate($event)"
                         @canplay="onPlayerCanplay($event)"
                         @canplaythrough="onPlayerCanplaythrough($event)"
                         @ready="playerReadied"
                         @statechanged="playerStateChanged($event)">
          </video-player>
          <div class="cbp-l-project-container">
          <!--Description-->
          <div class="cbp-l-project-desc">
            <div class="cbp-l-project-desc-title">
                <span>简介</span>
            </div>
            <div class="cbp-l-project-desc-text"><b>{{title}}</b>&nbsp;&nbsp;<Rate allow-half v-model="valueHalf"></Rate></div>
                <p>{{ResouceInfo.desc}}</p>
             <div class="cbp-l-project-desc-title">
                <span>选集</span><br/>
              </div>
              <Button  style="margin-left:5px;margin-right:5px;margin-top:5px;margin-bottom:5px"  v-on:click='switchsource(value.source_url)' v-for="value,key in playlist" >{{value.title}}</Button>
          </div>
          <!--/Description-->
          <!--/Detail List-->
          <div class="cbp-l-project-details">
            <div class="cbp-l-project-details-title">
                <span>信息</span>
            </div>
             <!-- List-->
            <ul class="cbp-l-project-details-list">
                <li><strong>作者</strong>{{ResouceInfo.auth}}</li>
                <li><strong>发布日期</strong>{{ResouceInfo.create_date}}</li>
                <li><strong>分类</strong>{{ResouceInfo.tag}}</li>
            </ul>
             <!--/List-->
            <!-- <a href="https://wrapbootstrap.com/?ref=themebang" target="_blank" class="cbp-l-project-details-visit btn red uppercase">visit the site</a> -->
          </div>
        <!--/Detail List-->
    </div>
          <div class="cbp-l-project-container">
          <div class="cbp-l-project-related">
            <!--Title-->
            <div class="cbp-l-project-desc-title">
                <span>相关内容</span>
            </div>
            <!--/Title-->
            <!--Related List-->
            <ul class="cbp-l-project-related-wrap">
                <li class="cbp-l-project-related-item">
                    <a href="projects/project6.html" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="../assets/images/600x600/1.jpg" alt="">
                        <div class="cbp-l-project-related-title">火花</div>
                    </a>
                </li>
                <li class="cbp-l-project-related-item">
                    <a href="projects/project7.html" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="../assets/images/600x600/2.jpg" alt="">
                        <div class="cbp-l-project-related-title">非自然死亡</div>
                    </a>
                </li>
                <li class="cbp-l-project-related-item">
                    <a href="projects/project8.html" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="../assets/images/600x600/4.jpg" alt="">
                        <div class="cbp-l-project-related-title">致命之吻</div>
                    </a>
                </li>
            </ul>
            <!--/Related List-->
        </div>
    </div>

        </div>
            </Content>
            <Footer class="layout-footer-center">2018 &copy; Masaki 在你身边</Footer>
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
.vjs-texttrack-settings {
  display: none;
}
</style>


<script>
import { videoPlayer } from "vue-video-player";
import "../assets/css/video.css";
import "../assets/css/video-js.css";
import _ from "underscore";
import moment from 'moment';
import { GetPlayList,GetResourceInfo} from "../api/index";

export default {
  components: {
    videoPlayer
  },
  data() {
    return {
      ResouceInfo:"",
      valueHalf: 4.5,
      // videojs options
      playlist: [],
      title:this.$route.query.title,
      playerOptions: {
        height: "700",
        autoplay: true,
        crossOrigin: "Anonymous",
        muted: false,
        language: "zh",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        html5: {
          nativeTextTracks: false
        },
        textTrackSettings: false,
        tracks: [
          {
            default: true,
            kind: "captions",
            src: this.$route.query.sub_url,
            srclang: "zh-TW",
            label: "中文"
          }
        ],
        sources: [
          {
            type: "video/mp4",
            src: this.$route.query.src_url
          }
        ],
        poster:this.$route.query.poster,
      }
    };
  },
  mounted() {
    this.setDocumentTitle(this.$route.query.title);
    this.getResourceInfo()
    this.getPlayList()
    console.log(this.$route.query.id)
    setTimeout(() => {
      console.log("dynamic change options", this.player);
      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })
      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false);
    }, 5000);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
       //兼容微信设置页面的title
    setDocumentTitle(title) {
      document.title = title+'|MASAKI';
      let ua = navigator.userAgent;
      if (
        /\bMicroMessenger\/([\d\.]+)/.test(ua) &&
        /ip(hone|od|ad)/i.test(ua)
      ) {
        var i = document.createElement("iframe");
        i.src = "/favicon.ico";
        i.style.display = "none";
        i.onload = function() {
          setTimeout(function() {
            i.remove();
          }, 9);
        };
        document.body.appendChild(i);
      }
    },
    //获取播放列表
    getPlayList() {
      GetPlayList(this.$route.query.id)
        .then(res => {
          return res;
        })
        .then(body => {
          _.each(body.Sets,(row)=>{
            this.playlist.push(row)
          })
          console.log(this.playlist)
        });
    },
    //获得资源信息
    getResourceInfo() {
      GetResourceInfo(this.$route.query.id)
        .then(res => {
          return res;
        })
        .then(body => {
          this.ResouceInfo = body.Data
          this.ResouceInfo.create_date = moment(
            this.ResouceInfo.create_date
          ).format("YYYY-MM-DD HH:mm");
          console.log(this.ResouceInfo)
        });
    },
    //切换播放源 
    switchsource(source_url){
      this.playerOptions.sources = [{
      type: "video/mp4",
      src: source_url,
      }]
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // seek to 10s
      console.log("example player 1 readied", player);
      player.currentTime(10);
      // console.log('example 01: the player is readied', player)
    }
  }
};
</script>