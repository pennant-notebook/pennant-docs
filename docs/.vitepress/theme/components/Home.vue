<script setup lang="ts">
import GithubButton from "vue-github-button";

defineProps<{
  externalLinks: any[];
}>();
</script>

<template>
  <div class="top-section">
    <Hero />
  </div>

  <div class="section love">
    <div class="icon" data-v-6f4cd6f0="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="icon"
        data-v-6f4cd6f0=""
      >
        <path
          d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"
        ></path>
      </svg>
    </div>
    <p class="intro">
      Pennant is free and open source, forever!
    </p>
    <div class="star">
      <GithubButton
        href="https://github.com/pennant-notebook/client"
        data-size="large"
        data-show-count="true"
        aria-label="Star Pennant on GitHub"
        >Star</GithubButton
      >
    </div>
  </div>

</template>

<style scoped lang="scss">
@import "@theme/styles/vars.scss";

.top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -72px;
  padding-top: 276px;
  // min-height: 100lvh;

  background: linear-gradient(
      180deg,
      rgba(0, 255, 255, 0) 0%,
      rgba(0, 255, 255, 0) 400px,
      rgba(255, 255, 255, 1) 700px
    ),
    radial-gradient(circle at 15% 35%, #dbe4ff, rgba(255, 255, 255, 0) 25%),
    radial-gradient(circle at 85% 20%, #e3fafc, rgba(255, 255, 255, 0) 25%),
    white;

  :root.dark & {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 400px,
        rgb(7, 8, 11) 700px
      ),
      radial-gradient(circle at 15% 35%, #243148, rgba(34, 34, 34, 0) 25%),
      radial-gradient(circle at 85% 20%, #1c2e3c, rgba(34, 34, 34, 0) 25%), #222;
  }
  background-size: cover;
  background-position: center bottom;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    padding-top: 160px;
  }

  h3 {
    @media (max-width: 1024px) {
      margin-top: 52px;
    }
  }
}


.section > h2 {
  margin-bottom: 32px;
  font-family: Gilroy, var(--vp-font-family-base);
  font-size: 52px;
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #000;
  :root.dark & {
    color: #fff;
  }
  strong {
    font-weight: 600;
  }
  @media (max-width: 680px) {
    margin-bottom: 40px;
    font-size: 34px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
}

.section > p {
  width: 700px;
  max-width: 100%;
  margin-bottom: 52px;
  font-size: 17px;
  line-height: 1.8;
  @media (max-width: 680px) {
    max-width: 84%;
    font-size: 15px;
    line-height: 1.8;
  }
  @media (max-width: 680px) {
    max-width: 100%;
  }
}

h3 {
  margin-bottom: 48px;
  font-family: "Gilroy", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  color: #000;
  :root.dark & {
    color: #fff;
  }
  @media (max-width: 680px) {
    font-size: 26px;
  }
}

h4 {
  margin-bottom: 48px;
  font-family: "Gilroy", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  color: #000;
  :root.dark & {
    color: #fff;
  }
  @media (max-width: 680px) {
    font-size: 26px;
  }

  margin-top: 40px;
}

.section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: var(--content-max-width);
  padding: 0 18px;
  margin: 0 auto 132px;
  text-align: center;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
}

img {
  max-height: 84px;
  margin-block-end: 24px;
  &.light {
    :root.dark & {
      display: none;
    }
  }
  &.dark {
    :root:not(.dark) & {
      display: none;
    }
  }
}

.external-links {
  padding-bottom: 60px;

  :root.dark & {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.16),
      rgba(0, 0, 0, 0) 360px
    );
  }

  @media (min-width: $bp-medium) {
    padding-top: 20px;
    padding-bottom: 80px;
  }
}
</style>

<style lang="scss">
.VPNavBar.fill .content-body {
  background-color: transparent !important;
}
.VPNavBar {
  transition: 0.2s ease !important;
  transition-property: background-color, backdrop-filter !important;
}
.VPNavBar.fill {
  transition-property: background-color, backdrop-filter !important;
  backdrop-filter: blur(6px) !important;
  background-color: rgba(255, 255, 255, 0.8) !important;
  :root.dark & {
    background-color: rgba(7, 8, 10, 0.8) !important;
  }
}
.VPContent:not(.has-sidebar) {
  padding-top: 0 !important;
}

.love svg {
  width: 40px;
}

.love .intro {
  margin-top: 1em;
  max-width: 350px !important;
  margin-bottom: 26px !important;
}

.love .star {
  margin-bottom: 52px;
}
</style>
