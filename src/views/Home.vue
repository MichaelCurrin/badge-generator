<template>
  <div class="home container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Home</h1>

        <!-- It would look better on page load to use height=250 except that on mobile the image gets squashed. The image needs to actually get a smaller heigh when the width is made to be smaller and CSS can't help here it seems. -->
        <div class="hero">
          <a href="https://unsplash.com/photos/FHTxbpRWEsE">
            <img
              alt="Logo"
              src="https://source.unsplash.com/FHTxbpRWEsE/1300x250"
              width="100%"
              height="auto"
            />
          </a>
          <br />

          <small class="note">
            <span>
              Photo by
              <a
                href="https://unsplash.com/@technobulka?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                >Kevin Luarte</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/badges?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                >Unsplash</a
              >
            </span>
          </small>

          <vue-markdown>
            {{ repoBadge }}
          </vue-markdown>

          <p>
            <i>{{ description }}</i>
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <p>
          This is an online tool which generates badges (or "shield") based on
          your inputs. You can preview the badges on the tool and then copy the
          markdown/HTML to your GitHub repo's
          <b>README.md</b> file. Those badges can help people learn about your
          repo at a glance and make it look professional.
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
import Vue from "vue";
import VueMarkdown from "vue-markdown";

import { DESCRIPTION } from "@/core/constants";
import { Repo } from "@/core/Repo";

export default Vue.extend({
  name: "Home",
  components: {
    VueMarkdown,
  },
  data() {
    const repo = new Repo("MichaelCurrin", "badge-generator");

    return {
      repoBadge: repo.gh(),
      description: DESCRIPTION,
    };
  },
});
</script>
