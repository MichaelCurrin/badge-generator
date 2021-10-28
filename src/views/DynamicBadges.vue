<template>
  <div class="badges container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Dynamic badges</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="app-input">
          <h2>Input values</h2>

          <form @submit.prevent.enter="submit">
            <fieldset name="text">
              <legend>Text</legend>

              <TextInput label="Label" v-model="label" isRequired />
              <br />

              <TextInput label="URL" v-model="url" isRequired />
              <br />

              <TextInput label="Query" v-model="query" isRequired />
              <br />
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

import { INITIAL_RESULT } from "@/constants/text";

import Help from "@/components/Help.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { dynamicBadge } from "@/core/dynamicData";

const note = `
This form lets you create a dynamic badge by passing a URL to a JSON file and a [JSON path](https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html) to the value.

For example, describe tools or platforms your repo is built on or built for running.
`;

export default defineComponent({
  name: "DynamicBadges",
  components: {
    Help,
    Results,
    TextInput,
  },
  data() {
    return {
      label: "Foo",
      url: "",
      query: "",
      target: "",
      result: INITIAL_RESULT,
      note: note,
    };
  },
  methods: {
    submit() {
      console.debug("Process inputs and render results");

      const args = [this.label, this.url, this.query];
      console.debug(args);

      const paramBadge = dynamicBadge(
        this.label,
        this.url,
        this.query,
        this.target
      );

      this.result = `\
_Query parameter badge_

${paramBadge}
      `;
    },
  },
});
</script>
