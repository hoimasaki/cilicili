<template>
<div class="layout">
        <div class="container-fluid">
          <!--Menu-->
          <div class="d-none d-md-block menu">
            <div class="list-group cbp-l-filters-button js-filters-juicy-projects">
                <div data-filter="*" class="cbp-filter-item list-group-item logo">
                    <img src="../assets/images/logo.png" alt="img"/>
                </div>
                <div id="menu-links">
                    <div data-filter="*" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">全部</div>
                    <div data-filter=".mv" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">音乐MV</div>
                    <div data-filter=".movie"  class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">电影</div>
                    <div data-filter=".animation" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">动画</div>
                    <div data-filter=".tv" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">电视剧</div>
                    <div data-filter=".variety" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">综艺</div>
                    <div data-filter=".record" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">纪录片</div>
                </div>
                <!--Contact-->
                <!-- <div class="list-group-item">
                    <address>
                        <strong>anakintuhui@gmail.com</strong><br>
                    </address>
                </div> -->
                <!--/Contact-->
            </div>
          </div>
          <!-- /Menu-->
          <div class="main">
            <!--Mobile Menu-->
            <div class="d-block d-md-none">
                <nav class="navbar navbar-light">
                  <div class="container-fluid">
                    <div id="BtnMobilMenu" class="text-center">
                      <img data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" src="../assets/images/logo.png" alt="img2"/>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" aria-controls="bs-example-navbar-collapse-1" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul class="navbar-nav js-filters-juicy-projects">
                      <div data-filter="*" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">全部</div>
                       <div data-filter=".mv" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">音乐MV</div>
                      <div data-filter=".movie"  class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">电影</div>
                      <div data-filter=".animation" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">动画</div>
                      <div data-filter=".tv" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">电视剧</div>
                      <div data-filter=".variety" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">综艺</div>
                      <div data-filter=".record" class="cbp-filter-item list-group-item hvr-underline-from-left text-uppercase">纪录片</div>
                      <a href="typography.html" class="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase" data-cbp-singlePage="myCustomSinglePage1">关于</a>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
            <!-- /Mobile Menu-->
            <!--portfolio -->
            <div class="portfolio-content portfolio-1">
                <!--portfolio Grid-->
                <div id="js-grid-juicy-projects" class="cbp">
                    <!--portfolio 1-->
                    <div v-for="value,key in items" :class="'cbp-item '+value.type+''">
                        <div class="cbp-item-wrap">
                            <div class="cbp-caption">
                                <div class="cbp-caption-defaultWrap">                            
                                    <img :src="'http://masaki.ufile.ucloud.com.cn/'+value.img+''"  :alt="''+value.img+''">
                                </div>
                                <div class="cbp-caption-activeWrap">
                                    <div class="cbp-l-caption-alignCenter">
                                        
                                            <div class="btn-group" v-if="value.type=='mv'">
                                                <router-link :to="{ path:'play', query:{ type:value.type,id:value.id,poster:value.poster,title:value.title,src_url:value.source_url,sub_url:value.subtitle_url}}"  class="btn" rel="nofollow" data-cbp-singlePage="music">视频</router-link>                                         
                                            <!-- <a href="play" class="btn" rel="nofollow" data-cbp-singlePage="music">视频</a> -->
                                                <a href="#" class="cbp-lightbox btn btn-sm btn-right" data-title="Kobasolo">音频</a>
                                            </div>
                                            <div class="btn-group" v-if="value.type=='tv'">
                                                 <router-link :to="{ path:'play_series', query:{ type:value.type,id:value.id,poster:value.poster,title:value.title,src_url:value.source_url,sub_url:value.subtitle_url}}"  class="btn" rel="nofollow" data-cbp-singlePage="music">播放</router-link>                                         
                                            </div>
                                            <div class="btn-group" v-else>
                                                 <router-link :to="{ path:'play', query:{ type:value.type,id:value.id,poster:value.poster,title:value.title,src_url:value.source_url,sub_url:value.subtitle_url}}"  class="btn" rel="nofollow" data-cbp-singlePage="music">播放</router-link>                                         
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cbp-l-grid-projects-title uppercase text-center uppercase text-center">{{value.title}}</div>
                            <div class="cbp-l-grid-projects-desc uppercase text-center uppercase text-center">{{value.tag}}</div>
                        </div>
                    </div>
                    <BackTop></BackTop>
                </div>

                <!-- /portfolio Grid-->
                <!--portfolio loadMore-->
                <div id="js-loadMore-juicy-projects" class="cbp-l-loadMore-button">
                    <a href="loadMorePortfolio.html" class="cbp-l-loadMore-link hvr-underline-from-center text-uppercase" rel="nofollow">
                        <span class="cbp-l-loadMore-defaultText">加载更多</span>
                        <span class="cbp-l-loadMore-loadingText">加载中...</span>
                        <span class="cbp-l-loadMore-noMoreLoading">我是有底线的</span>
                    </a>
                </div>
                <!-- /portfolio loadMore-->
            </div>
            <!-- /portfolio -->
          </div>
        </div>
        <!--footer -->
        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="d-none d-md-block col-md-5 col-lg-5">
                        <small class="footer-small">2018 © &nbsp; Hoi Masaki Inc.</small>
                    </div>
                    <div class="col-sm-12 col-md-7 col-lg-7">
                        <!--Address -->
                        <div class="d-block d-md-none text-center">
                            <address>
                                <strong>Hoi Masaki Inc</strong><br>
                                <a href="mailto:#">anakintuhui@gmail.com</a>
                            </address>
                        </div>
                        <!-- /Address -->
                            <ul class="s-i">
                                <li class="f"><a href="#" target="_blank">Facebook</a> </li>
                                <li class="t"><a href="#" target="_blank">Twitter</a></li>
                                <li class="g"><a href="#" target="_blank">Google +</a></li>
                                <li class="y"><a href="#" target="_blank">YouTube</a></li>
                                <li class="p"><a href="#" target="_blank">Pinterest</a></li>
                                <li class="v"><a href="#" target="_blank">Vimeo</a></li>
                                <li class="l"><a href="#" target="_blank">LinkedIn</a></li>
                                <li class="r"><a href="#" target="_blank">RSS Feed</a></li>
                            </ul>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- /footer -->
        <div id="map" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Hoi Masaki Inc.</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <div id="map-canvas" style="width:100%; height:450px">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/hover-min.css";
import "../assets/css/portfolio/cubeportfolio.css";
import "../assets/css/portfolio/portfolio.min.css";
import "../assets/css/customize.css";

import "../assets/js/popper.min.js";
import "../assets/bootstrap/js/bootstrap.min.js";
import "../assets/portfolio/js/jquery.cubeportfolio.js";
import "../assets/js/main.js";

import { GetResourceList } from "../api/index";
import _ from "underscore";
import Vue from "vue";

export default {
  data() {
    return {
         items: []
    };
  },
  created() {
     this.getResouce()
  },
  mounted() {
     
  },
  methods: {
    getResouce() {
      GetResourceList("test")
        .then(res => {
          return res;
        })
        .then(body => {
               this.items = body.Sets
               this.$nextTick(function(){
                   this.cubegrid()
               })
        });
    },
    cubegrid() {
      $("#js-grid-juicy-projects").cubeportfolio({
        filters: ".js-filters-juicy-projects",
        loadMore: "#js-loadMore-juicy-projects",
        loadMoreAction: "click",
        plugins: {
          loadMore: {
            loadItems: 8
          }
        },
        layoutMode: "grid",
        defaultFilter: "*",
        animationType: "quicksand",
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: "responsive",
        mediaQueries: [
          {
            width: 1600,
            cols: 5
          },
          {
            width: 1280,
            cols: 4
          },
          {
            width: 800,
            cols: 3
          },
          {
            width: 480,
            cols: 2
          },
          {
            width: 320,
            cols: 1
          }
        ],
        caption: "overlayBottomReveal",
        displayType: "sequentially",
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: true,
        lightboxTitleSrc: "data-title",
        lightboxCounter:
          '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: true,
        singlePageStickyNavigation: false,
        singlePageCounter:
          '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
          // to update singlePage content use the following method: this.updateSinglePage(yourContent)
          var t = this;

          $.ajax({
            url: url,
            type: "GET",
            dataType: "html",
            timeout: 30000
          })
            .done(function(result) {
              t.updateSinglePage(result);
            })
            .fail(function() {
              t.updateSinglePage("AJAX Error! Please refresh the page!");
            });
        }
      });
    }
  }
};
</script>