<template>
  <div class="badges container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Generic badges</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="app-input">
          <h2>Input values</h2>

          <form @submit.prevent.enter="submit">
            <fieldset name="text">
              <legend>Text</legend>

              <TextInput label="Label" v-model="label" />
              <br />

              <TextInput
                label="Message (required)"
                v-model="message"
                :isRequired="true"
              />
              <br />
            </fieldset>
            <br />

            <fieldset name="appearance">
              <legend>Appearance</legend>

              <TextInput
                label="Color"
                v-model="color"
                note="Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`"
              />

              <Checkbox label="Large" v-model="isLarge" />
              <br />

              <TextInput
                label="Logo"
                v-model="logo"
                note="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`"
              />

              <TextInput
                label="Logo color"
                v-model="logoColor"
                note="The badge's specific color will be used unless you specify and override. Using `white` is great for readability against the dark label background."
              />
            </fieldset>
            <br />

            <fieldset name="links">
              <legend>Links</legend>

              <TextInput
                label="Click target"
                v-model="target"
                placeholder="e.g. https://example.com"
                note="This doesn't have to be set, but a button without a click destination is not so useful."
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
        <Help
          message="Create a fixed badge using arbitrary text and a link. For example, describe a tools or platforms your repo is built on or built for running. This form takes care of encoding characters so they are safe     for the badge URL. Warning: hyphens are not supported and will break
          the badge."
        />
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox.vue";
import Help from "@/components/Help.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { genericBadge } from "@/core/badges";

export default {
  name: "GenericBadges",
  components: {
    Checkbox,
    Help,
    Results,
    TextInput,
  },
  data() {
    return {
      label: "Foo",
      message: "Bar",
      color: "green",
      isLarge: false,
      target: "https://",
      logo: "",
      logoColor: "",

      result: "_Your output will appear here_",
    };
  },
  methods: {
    submit: function () {
      console.debug("Process inputs and render results");

      const badge = genericBadge(
        this.label,
        this.message,
        this.color,
        this.isLarge,
        this.target,
        this.logo,
        this.logoColor
      );

      this.result = `\
${badge}
      `;
    },
  },
};
</script>
