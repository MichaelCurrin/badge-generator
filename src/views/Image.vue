<template>
  <div class="images container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Image</h1>

        <p>
          Add an image to your README.md file, such as your logo or a sample
          screenshot of your app. This is just a badge section, but displaying
          an image using markdown and HTML. An image is provided to make it
          easier to test sizing, but this image will not be used when you reuse
          the code elsewhere.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="app-input">
          <h2>Input values</h2>

          <form @submit.prevent.enter="submit">
            <fieldset name="links">
              <legend>Links</legend>

              <TextInput
                label="Source"
                v-model="imgSrc"
                placeholder="e.g. /sample.png"
                note="Local path or URL."
                isRequired
              />

              <TextInput
                label="Click target"
                v-model="linkTarget"
                placeholder="e.g. https://example.com"
                note="Local path or external URL. Such as docs/ or link to project site."
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
                note="Text to show on hover. Recommended - describe the action that the button will trigger e.g. 'Go to website', 'Go to repo', or 'Go to docs'"
              />
            </fieldset>
            <br />

            <fieldset id="appearance">
              <legend>Appearance</legend>

              <TextInput
                label="Width"
                v-model="width"
                placeholder="e.g. 400"
                note="Measured in pixels, but no px symbol is needed. If you set width only, then height will default to 'auto', which works well on mobile and desktop."
              />
              <br />

              <TextInput
                label="Height"
                v-model="height"
                placeholder="e.g. 400"
                note="Warning: You probably don't need to set height. If you set height but not width, then you might get a squashed image on mobile view."
              />
            </fieldset>

            <br />

            <input class="btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>

      <div class="col-6">
        <Results :result="result" />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <Help :message="helpMessage" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { stripLeadingSlash } from "@/lib";

import { DEBUG } from "@/constants/";
import { SCREENSHOT } from "@/constants/image";
import { INITIAL_RESULT } from "@/constants/text";

import Help from "@/components/Help.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { mdImageWithLink } from "@/core/markdown";
import { mkHtmlImg } from "@/core/images";

const helpMessage = `\
<p>
  Styling has been setup so that images in the preview pane will not
  extend beyond the width of the preview area, even no width or a
  large width has been set.
</p>
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
</p>`;

// 'Image' is reserved in Vue so use alternative.
export default defineComponent({
  name: "ImageView",
  components: {
    Help,
    Results,
    TextInput,
  },
  data() {
    return {
      ...SCREENSHOT,

      result: INITIAL_RESULT,
      helpMessage,
    };
  },
  computed: {
    altTextOut(): string {
      return stripLeadingSlash(this.altText || this.imgSrc);
    },
    imgTitleOut(): string {
      return stripLeadingSlash(this.imgTitle);
    },
  },
  methods: {
    submit() {
      if (DEBUG) {
        console.debug("Process inputs and render results");
      }

      const htmlImg = mkHtmlImg(
        this.imgSrc,
        this.altTextOut,
        this.imgTitleOut,
        this.linkTarget,
        this.width,
        this.height
      );

      const mdImg = mdImageWithLink({
        altText: this.altTextOut,
        imageTarget: this.imgSrc,
        linkTarget: this.linkTarget,
        hoverTitle: this.imgTitleOut,
      });

      this.result = `\
_HTML image_

<div align="center">
    ${htmlImg}
</div>


_Markdown image_

<div align="center">

${mdImg}

</div>
      `;
    },
  },
});
</script>

<style>
/* Prevent markdown preview image from going way off the right. Using `scoped` doesn't work, but
adding an explicit wrapping class helps scope this. */
.app-results img {
  max-width: 100%;
}
</style>
