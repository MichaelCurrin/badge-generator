<template>
  <div class="home container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Home</h1>

        <div class="hero">
          <img
            alt="Logo"
            src="https://source.unsplash.com/hh4R3gAbhs8/650x250"
            width="650"
            height="250"
          />
          <br />

          <small>
            <span>
              Photo by
              <a
                href="https://unsplash.com/@technobulka?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                >Stanislav Kondratiev</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/badges?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                >Unsplash</a
              >
            </span>
          </small>

          <!-- TODO replace with better GH badge and with markdown maybe. Need new style to handle hyphen. A corner badge would help too -->
          <p>
            GitHub repo:
            <a href="https://github.com/MichaelCurrin/badge-generator"
              >MichaelCurrin/badge-generator</a
            >
          </p>

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

<script>
import { DESCRIPTION } from "@/core/constants";

export default {
  name: "Home",
  data() {
    return {
      description: DESCRIPTION,
    };
  },
};
</script>
