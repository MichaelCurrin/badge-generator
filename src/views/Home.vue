<template>
  <div class="home container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Home</h1>

        <!-- It would look better on page load to use height=250, except that on mobile the image
        gets squashed. The image needs to actually get a smaller height when the width is made to be
        smaller and CSS can't help here it seems. Width was set before in HTML but now it converts
        100% to 0px so rather set by CSS. -->
        <div class="hero">
          <img
            id="logo"
            :src="`${baseUrl}hero.jpeg`"
            alt="Website banner logo"
          />

          <br />

          <Markdown :content="repoBadge"></Markdown>

          <p>
            <i>{{ description }}</i>
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <p>
          This is an online tool which generates badges (or "shields") based on
          your inputs. You can preview the badges on the tool and then copy the
          Markdown/HTML to your GitHub repo's
          <b>README.md</b> file. Those metadata badges can help people learn
          about your repo at a glance and make it look professional.
        </p>

        <p>
          This tool adds <b>convenience</b> and <b>productivity</b> to your life
          so you can make badges quickly and easily and get on with the coding.
        </p>

        <p>
          The power here is in narrowing the choices and putting less burden on
          your to figure out rules and syntax or read long URLs. For badges that
          you need to create regularly, there's no need to look at
          <i>shields.io</i> to figure out how it works or to write the markdown
          by hand (and do all the tedious things like escaping characters and
          learning the syntax for each badge.
        </p>

        <p>
          I use this tool regularly for myself - I hope you will too. If you
          want to contribute, issues and PRs are welcome.
        </p>
        <p>PS. This site works best on a desktop screen size.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Markdown from "@/components/Markdown.vue";
import { APP_THEME_COLOR, DESCRIPTION } from "@/constants/appearance";
import { Repo } from "@/core/Repo";

export default defineComponent({
  name: "Home",
  components: {
    Markdown,
  },
  data() {
    const repo = new Repo(
      "MichaelCurrin",
      "badge-generator",
      undefined,
      APP_THEME_COLOR
    );

    return {
      repoBadge: repo.ghBadge(),
      description: DESCRIPTION,
      baseUrl: process.env.BASE_URL,
    };
  },
});
</script>

<style scoped>
#logo {
  width: 100%;
}
</style>
