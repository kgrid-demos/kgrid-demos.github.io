
<template>
<div class='apps'>
    <div class='apppreview' v-for="post in posts">
      <div class='apptitle'>
      <img
        v-if="post.frontmatter.icon"
        :src="$withBase(post.frontmatter.icon)"
        alt="icon" width="100px"
      >
      <font-awesome-icon :icon="post.frontmatter.fa" v-if="post.frontmatter.fa" size="4x"></font-awesome-icon>
      </div>
      <div class='appdetail'>
        <h2>
            <a :href="post.frontmatter.guideurl">{{ post.frontmatter.title }}</a>
        </h2>

        <p >{{ post.frontmatter.description }}</p>

        <!-- <p><a :href="post.frontmatter.guideurl">Learn more</a></p> -->
        <p class='actionlink'>
        <label class='launch' v-if='post.frontmatter.appurl'><a :href="post.frontmatter.appurl">Launch App</a></label>
        <label class='download' v-if='post.frontmatter.downloadurl'><a :href="post.frontmatter.downloadurl">Download Kit</a></label>
        <label class='guide' v-if='post.frontmatter.guideurl'><a :href="post.frontmatter.guideurl">Learn More</a></label>

</p>

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
  padding 1.2rem 0
  margin-top 2.5rem
  display flex
  flex-wrap wrap
  align-items flex-start
  align-content stretch
  justify-content space-between
.apppreview
  flex-grow 1
  flex-basis 40%
  max-width 45%
  min-height 180px
  border 2px solid $borderColor
  margin 10px
  padding 10px 16px
  position relative
  .apptitle
    width: 100px
    height 100px
    display inline-block
    position absolute
    text-align center
    svg
      color #0075bc
      margin-top 10px
  .appdetail
    display inline-block
    position relative
    left 120px
    max-width calc(100% - 120px)
    min-width calc(100% - 120px)
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
    p
      color lighten($textColor, 30%)
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
</style>
