<template>
  <div class="home">
    <Navbar />
    <div class="banner">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
      >

      <div class="heroContent">
        <h1>{{ data.heroText || $title || 'Hello' }}</h1>
        <p class="description">
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>
      </div>
      <!-- <p
        class="action"
        v-if="data.actionText && data.actionLink"
      > -->
        <!-- <NavLink
          class="action-button"
          :item="actionLink"
        /> -->
      </p>
    </div>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>

        <label class='launch' v-if='feature.appurl'><a :href="feature.appurl">Launch App</a></label>
        <label class='guide' v-if='feature.guideurl'><a :href="feature.guideurl">Learn More</a></label>
      </div>
    </div>

    <Content custom/>

    <CoreAppIndex />

    <AppIndex />

    <SmartAppIndex />

    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import Navbar from "../../../node_modules/@vuepress/theme-default/components/Navbar.vue";
export default {
  components: { Navbar },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">

// colors
$accentColor = #3eaf7c
$textColor = #333
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc

// layout
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px

// responsive breakpoints
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px

// code
$lineNumbersWrapperWidth = 3.5rem
$codeLang = js ts html md vue css sass scss less stylus go java c sh yaml py
.home
  padding 2rem 2rem 0
  max-width 960px
  margin 0px auto
  .banner
    margin-top 60px
    text-align left
    img
      max-height 160px
      display inline-block
      margin 1.5rem auto
    .heroContent
      display inline-block
      position absolute
      margin-top 1rem
      margin-left 2rem
    h1
      font-size 2.5rem
      color #656565
    h1, .description, .action
      margin 1rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 40%
    max-width 100%
    border 1px solid $borderColor
    margin 10px
    padding 3px 6px
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      text-align left
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
    .launch

    .download
      float right
      background-color green
      margin 0 5px
      padding 0px 6px 3px
      a
        color #fff
        font-size 0.8rem
        line-height 1.2rem
    .guide
      float right
      background-color #fff
      margin 0 5px
      padding 0px 6px 3px
      a
        color green
        font-size 0.8rem
        line-height 1.2rem
  .footer
    padding 2rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    padding-top 0
    .banner
      text-align center
      margin-bottom 3.6rem
      img
        max-height 140px
        margin 1.4rem auto 0.6rem
      .heroContent
        display block
        margin-top 0
        padding-top 1rem
        position relative
        margin-left 0
        h1
          font-size 1.4rem
        h1, .description, .action
          margin 0 auto
        .description
          font-size 1.2rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
    .feature
      max-width 100%
      padding 0 2.5rem
      h2
        font-size 1.25rem
    .features
      flex-direction column


@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    padding-top 0
    .banner
      text-align center
      margin-bottom 0.6rem
      img
        max-height 100px
        margin 1.4rem auto 0.6rem
      .heroContent
        display block
        margin-top 0
        padding-top 1rem
        h1
          font-size 1.1rem
        h1, .description, .action
          margin 0 auto
        .description
          font-size 1rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1rem
</style>
