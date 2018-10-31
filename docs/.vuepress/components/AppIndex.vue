
<template>
<div class='apps'>
  <div class='sectiontitle'> <h2>Web Apps</h2></div>
  <div class='apppreview' v-for="post in posts">
    <div class='appicon'>
      <img
        v-if="post.frontmatter.icon"
        :src="$withBase(post.frontmatter.icon)"
        alt="icon" width="80px"
      >
      <font-awesome-icon :icon="post.frontmatter.fa" v-if="post.frontmatter.fa" size="4x"></font-awesome-icon>
    </div>
    <div class='apptitle'>
      <h2>
        <a :href="post.frontmatter.guideurl">{{ post.frontmatter.title }}</a>
      </h2>
    </div>
    <div class='appdetail'>
      <p >{{ post.frontmatter.description }}</p>
    </div>
    <div class='actionlink'>
      <label class='launch' v-if='post.frontmatter.appurl'><a :href="post.frontmatter.appurl" target='_blank'>{{post.frontmatter.applabel}}</a></label>
      <label class='download' v-if='post.frontmatter.downloadurl'><a :href="post.frontmatter.downloadurl" target='_blank'>{{post.frontmatter.downloadlabel}}</a></label>
      <label class='guide' v-if='post.frontmatter.guideurl'><a :href="post.frontmatter.guideurl" target='_blank'>Learn More</a></label>
    </div>
  </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/apps/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>
<style lang="stylus">
// colors
$accentColor = #0075bc
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
.apps
  border-top none
  padding 1.4rem 0
  margin-top 0
  display flex
  flex-wrap wrap
  align-items flex-start
  align-content stretch
  justify-content space-between
.sectiontitle
  height 1.8em
  width 100%
  margin-bottom 1em
  padding 0.6em
  background #eee
  h2
    position relative
    border none
    color #666
    margin 0
    margin-bottom 0.5em
    small
      font-size 60%
      color #777
.sectiondescription
  padding 0px 12px
.apppreview
  flex-grow 1
  flex-basis 44%
  max-width 44%
  min-height 180px
  border 2px solid $borderColor
  margin 10px 10px
  padding 10px 16px
  position relative
  .appicon
    width 100px
    height 100px
    display inline-block
    position absolute
    text-align center
    svg
      color #0075bc
      margin-top 10px
  .apptitle
    display inline-block
    position relative
    left 120px
    max-width calc(100% - 120px)
    min-width calc(100% - 120px)
    margin-top 1rem
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      text-align left
      padding-bottom 0
      margin 5px 0px
      color lighten($textColor, 10%)
      a
        color #0075bc
  .appdetail
    margin-top 2.5rem
  .actionlink
      position relative
      bottom 0px
      .launch
      .download
        float right
        background-color #0075bc
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
          color #0075bc
          font-size 0.8rem
          line-height 1.2rem


@media (max-width: $MQMobile)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .apps
      flex-direction column
      margin-top 0rem
      padding-top 0
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .apppreview
      max-width 100%
      padding 0 0.5rem
      h2
        font-size 1.25rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .apppreview
      h2
        font-size 1.25rem
      .appdetail
        margin-top 1.2rem
</style>
