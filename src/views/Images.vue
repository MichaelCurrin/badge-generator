<template>
  <div class="images container-lg">
    <h1>Images</h1>

    <p>Prepare a logo or sample screenshot image for your README.md file.</p>

    <div class="app-input">
      <h2>Input values</h2>

      <form @submit.prevent.enter="submit">
        <fieldset name="image">
          <legend>Documentation images</legend>

          <div>
            <span>Source (required): </span>
            <input v-model="imgSrc" />
            <small>Local path or URL</small>
          </div>

          <br />

          <div>
            <span>Alt text: </span>
            <input v-model="altText" />
            <small>Fallback image text</small>
          </div>

          <br />

          <div>
            <span>Title: </span>
            <input v-model="imgTitle" />
            <small>Text to show on hover</small>
          </div>

          <br />

          <div>
            <span>Link target: </span>
            <input v-model="linkTarget" />
            <small>Internal path or external URL</small>
          </div>

          <br />

          <div>
            <span>Link target: </span>
            <input v-model="linkTarget" />
            <small>Internal path or external URL</small>
          </div>

          <br />

          <div>
            <span>Width: </span>
            <input v-model="width" placeholder="e.g. 400" />
          </div>

          <br />

          <div>
            <span>Height: </span>
            <input v-model="height" placeholder="e.g. 400" />
          </div>

          <br />

          <div>
            <span>Align direction: </span>
            <select v-model="alignDir">
              <option>center</option>
              <option>right</option>
              <option>left</option>
            </select>
          </div>
        </fieldset>

        <br />

        <input class="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>

    <div class="app-notes">
      <h2>Help</h2>
      <details>
        <summary>Click to show/hide notes</summary>
        <p>
          Tip: Pressing the <kbd>Enter</kbd> key after updating a text field
          will also submit.
        </p>
        <p>
          Setting <i>width</i> and <i>height</i> is optional, but this can help
          in certain cases. For example, a screenshot or logo will be set by
          GitHub to <i>100%</i> of the page width making it look large and take
          up vertical space, so reduce height or width manually.
        </p>
        <p>
          Setting height can also make sure the height of the tag is set before
          the image loads, so it reserves the space - if the height is larger
          than the original image though then the image will looked stretched.
        </p>
        <p>
          Warning: If you set height only to say 400, then the image in the
          README.md will look fine on desktop but ends up looking distorted on
          mobile.
        </p>
      </details>
    </div>

    <!-- TODO turn into component -->
    <div class="app-results">
      <h2>Output values</h2>

      <div>
        <h3>Preview</h3>
        <!-- Make sure to not add result on a new line otherwise it will indent and format. -->
        <!-- Make sure to use :source since {{ result }} as inner text will fail to update on UI changes. -->
        <vue-markdown :source="result"></vue-markdown>
      </div>

      <hr />

      <div>
        <h3>Code</h3>
        <!-- To reduce whitespace, make sure to keep everything on one line here. -->
        <pre><code>{{ result }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

import { markdownImageWithLink } from "../badges";
import { mkHtmlImg } from "../images";
import { stripLeadingSlash } from "../lib";

export default {
  name: "Images",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      imgSrc: "/sample.png",
      linkTarget: "",
      altText: "Sample screenshot",
      imgTitle: "",
      width: "400",
      height: "",
      alignDir: "center",
      result: "_Your output will appear here_",
    };
  },
  computed: {
    altTextOut() {
      return stripLeadingSlash(this.altText || this.imgSrc);
    },
    imgTitleOut() {
      // If neither is set then null string is fine.
      return stripLeadingSlash(this.imgTitle || this.altText);
    },
  },
  methods: {
    submit: function () {
      console.debug("Process inputs and render results");

      const htmlImg = mkHtmlImg(
        this.imgSrc,
        this.altTextOut,
        this.imgTitleOut,
        this.linkTarget,
        this.width,
        this.height,
        this.alignDir
      );
      const mdImg = markdownImageWithLink(
        this.altTextOut,
        this.imgSrc,
        this.linkTarget,
        this.imgTitleOut
      );

      // This shouldn't be a Vue component or template as that adds overheard. It doesn't even need to be a function
      // or method (the indentation fits better but then its another function to maintain).
      // Also this just needs to be plain text and not HTML. It gets converted to HTML and a code block.
      const result = `\
**HTML image**

${htmlImg}

**Markdown image**

${mdImg}
      `;

      // Change the global value on form submission.
      this.result = result;
    },
  },
};
</script>
