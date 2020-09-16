<template>
  <div class="images container-lg row">
    <div class="col-12">
      <h1>Images</h1>

      <p>Prepare a logo or sample screenshot image for your README.md file.</p>
    </div>

    <div class="col-6">
      <div class="app-input">
        <h2>Input values</h2>

        <form @submit.prevent.enter="submit">
          <fieldset name="links">
            <legend>Links</legend>

            <TextInput
              label="Source (required)"
              v-model="imgSrc"
              placeholder="e.g. /sample.png"
              note="Local path or URL."
            />

            <TextInput
              label="Click target"
              v-model="linkTarget"
              placeholder="e.g. https://example.com"
              note="Local path or external URL."
            />
          </fieldset>
          <br />

          <fieldset name="text">
            <legend>Text</legend>

            <TextInput
              label="Alt text"
              v-model="altText"
              placeholder="e.g. Sample screenshot"
              note="Fallback image text on broken link. If not set, the image path will be used"
            />
            <br />

            <TextInput
              label="Title"
              v-model="imgTitle"
              note="Text to show on hover."
            />
          </fieldset>
          <br />

          <fieldset id="appearance">
            <legend>Appearance</legend>

            <TextInput
              label="Width"
              v-model="width"
              placeholder="e.g. 400"
              note="Measured in pixels. No px is needed."
            />
            <br />

            <TextInput
              label="Height"
              v-model="height"
              placeholder="e.g. 400"
              note="Recommended: Set height only if width is set too, as just height can cause distortion on mobile view"
            />
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

          <input class="btn" type="submit" value="Submit" />
        </form>
      </div>

      <!-- TODO make component -->
      <div class="app-notes">
        <h2>Help</h2>

        <details>
          <summary>Click to show/hide notes</summary>
          <p>
            Tip: Pressing the <kbd>Enter</kbd> key after updating a text field
            will also submit.
          </p>
          <p>
            Setting <i>width</i> and <i>height</i> is optional, but this can
            help in certain cases. For example, a screenshot or logo will be set
            by GitHub to <i>100%</i> of the page width making it look large and
            take up vertical space, so reduce height or width manually.
          </p>
          <p>
            Setting height can also make sure the height of the tag is set
            before the image loads, so it reserves the space - if the height is
            larger than the original image though then the image will looked
            stretched.
          </p>
          <p>
            Warning: If you set height only to say 400, then the image in the
            README.md will look fine on desktop but ends up looking distorted on
            mobile.
          </p>
        </details>
      </div>
    </div>

    <div class="col-6">
      <Results :result="result" />
    </div>
  </div>
</template>

<script>
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { markdownImageWithLink } from "../badges";
import { mkHtmlImg } from "../images";
import { stripLeadingSlash } from "../lib";

export default {
  name: "Images",
  components: {
    Results,
    TextInput,
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
      // If neither is set, then empty string is fine.
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

      this.result = `\
_HTML image_

${htmlImg}

_Markdown image_

${mdImg}
      `;
    },
  },
};
</script>
