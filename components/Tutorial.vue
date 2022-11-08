<!-- Please remove this file from your project -->
<template>
  <scale-app-shell>
    <scale-app-header slot="header" id="header">
      <div slot="menu-main">
        <scale-nav-main name="Custom Item #1"></scale-nav-main>
        <scale-nav-main name="Custom Item #2" id="nav-main-with-mega-menu">
          <app-mega-menu>
            <div slot="custom-body"><pre>custom-body</pre></div>
          </app-mega-menu>
        </scale-nav-main>
        <!--
          Deprecated:
          <scale-nav-main is-active name="Custom Item #3"></scale-nav-main>
        -->
        <scale-nav-main active name="Custom Item #3"></scale-nav-main>
        <scale-nav-main name="Custom Item #4"></scale-nav-main>
      </div>
    </scale-app-header>
    <div style="height: 800px; padding: 48px 0;">
      Scroll to test header behavior
    </div>
    <div style="height: 800px; padding: 48px 0;">
      Scroll more to test header behavior
    </div>
  </scale-app-shell>

</template>

<script>

export default {
  name: 'NuxtTutorial'
}

</script>
<style>
@import "@telekom/scale-components/dist/scale-components/scale-components.css";
</style>
