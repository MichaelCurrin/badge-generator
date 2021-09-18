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

              <TextInput label="Message" v-model="message" isRequired />
              <br />
            </fieldset>
            <br />

            <fieldset name="display-options">
              <legend>Display options</legend>

              <TextInput
                label="Color"
                v-model="color"
                placeholder="e.g. blue"
                :isRequired="true"
                :note="colorHelp"
              />

              <Checkbox label="Large" v-model="isLarge" />
              <br />

              <TextInput label="Logo" v-model="logo" :note="logoHelp" />

              <TextInput
                label="Logo color"
                v-model="logoColor"
                :disabled="logo === ''"
                :note="logoColorHelp"
              />
            </fieldset>
            <br />

            <fieldset name="links">
              <legend>Links</legend>

              <TextInput
                label="Click target"
                v-model="target"
                placeholder="e.g. https://example.com"
                note="URL or a local path like `/docs/`. This doesn't have to be set, but a button without a click destination is not so useful."
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
        <Help :message="note" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { COLOR_PRESETS } from "@/constants/appearance";
import {
  COLOR_HELP,
  INITIAL_RESULT,
  LOGO_COLOR_HELP,
  LOGO_HELP,
} from "@/constants/text";

import Checkbox from "@/components/Checkbox.vue";
import Help from "@/components/Help.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { genericBadge } from "@/core/genericBadge";

const note = `
This form lets you create a fixed badge using arbitrary text and a link.

For example, describe a tools or platforms your repo is built on or built for running. This form takes care of encoding characters so they are safe for the badge URL.
`;

export default defineComponent({
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
      color: COLOR_PRESETS.Green,
      isLarge: false,
      target: "https://",
      logo: "",
      logoColor: "",

      result: INITIAL_RESULT,

      note: note,
      colorHelp: COLOR_HELP,
      logoHelp: LOGO_HELP,
      logoColorHelp: LOGO_COLOR_HELP,
    };
  },
  methods: {
    submit() {
      console.debug("Process inputs and render results");

      const args = [
        this.label,
        this.message,
        this.color,
        this.isLarge,
        this.target,
        this.logo,
        this.logoColor,
      ];
      console.debug(args);

      const dashBadge = genericBadge(
          this.label,
          this.message,
          this.color,
          this.isLarge,
          this.target,
          this.logo,
          this.logoColor,
          false
        ),
        paramBadge = genericBadge(
          this.label,
          this.message,
          this.color,
          this.isLarge,
          this.target,
          this.logo,
          this.logoColor,
          true
        );

      this.result = `\
_Dash badge_

${dashBadge}

_Query parameter badge_

${paramBadge}
      `;
    },
  },
});
</script>
