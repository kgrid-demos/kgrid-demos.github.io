
<template>
<div class='apps'>
  <div class='sectiontitle'> <h2>Core Components</h2></div>


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
                .filter(x => x.path.startsWith('/coreapps/') )
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

</style>
