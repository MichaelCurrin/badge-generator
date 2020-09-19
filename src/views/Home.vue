<template>
  <div class="home container-lg row">
    <div class="col-12">
      <h1>Home</h1>

      <div class="hero">
        <img
          alt="Vue logo"
          src="https://source.unsplash.com/hh4R3gAbhs8/650x250"
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

        <!-- TODO replace with better GH badge and with markdown maybe. A corner badge would help too -->
        <p>
          GitHub repo:
          <a href="https://github.com/MichaelCurrin/badge-generator"
            >MichaelCurrin/badge-generator</a
          >
        </p>

        <p>
          This is an online tool which generates badges to add to your GitHub
          repo's README.md file, to help people learn about your repo at a
          glance and also for a professional look.<br />
          This tool adds convenience to your life so you can make badges quickly
          and easily and get on with the coding.
          <br />For badges that you need to create regularly, there's no need to
          look at <i>shields.io</i> to figure out how it works or to write the
          markdown by hand (and do all the tedious things like escaping
          characters and learning the syntax for each badge.
          <br />
          I use this tool regularly for myself - I hope you will too. If you
          want to contribute, issues and PRs are welcome.
          <br />PS. This site works best on a desktop screen size.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
