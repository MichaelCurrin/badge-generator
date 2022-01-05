<template>
  <div class="badges container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Dynamic data badges</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="app-input">
          <h2>Input values</h2>

          <form @submit.prevent.enter="submit">
            <fieldset name="text">
              <legend>Text</legend>
              <TextInput
                label="Alt text"
                v-model="altText"
                placeholder="e.g. Keywords"
                note="Markdown fallback text. If omitted, _Label_ will be used."
              />
              <br />

              <TextInput
                label="Label"
                v-model="label"
                isRequired
                placeholder="e.g. keywords"
                note="Display text for the left of the badge"
              />
              <br />

              <TextInput
                label="URL"
                v-model="url"
                isRequired
                placeholder="e.g. https://example.com/foo.json"
                note="URL for a public JSON file."
              />
              <br />

              <TextInput
                label="Query"
                v-model="query"
                isRequired
                placeholder="e.g. $.keywords "
                note="JSON value query."
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

import { INITIAL_RESULT } from "@/constants/text";

import Help from "@/components/Help.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { dynamicBadge } from "@/core/dynamicData";

const note = `
Reference a value in remote data file and the badge will update as the content changes. Only JSON files are supported in this generator.

Help on form fields:

- Label: A text label to display. e.g.
    - \`keywords\`
    - \`vscode\` or \`VS Code\`
- URL: A raw URL for a JSON file on GitHub, or URL for a JSON file on your REST API server. e.g.
    - \`https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json\`
    - \`https://example.com/foo.json\`
- Query: Look-up value within the data structure. For syntax rules, see this [JSON path](https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html) guide.  e.g.
    - \`$.keywords\`
    - \`$.engines["vscode"]\`

Sample badges:

- Badge Generator package.json - [![node](https://img.shields.io/badge/dynamic/json?label=node&query=%24.engines["node"]&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fbadge-generator%2Fmaster%2Fpackage.json)](https://github.com/MichaelCurrin/badge-generator)
- AutoCommitMsg package.json - [![keywords](https://img.shields.io/badge/dynamic/json?label=keywords&query=%24.keywords&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)](https://github.com/MichaelCurrin/auto-commit-msg)
- AutoCommitMsg package.json - [![vscode](https://img.shields.io/badge/dynamic/json?label=vscode&query=%24.engines["vscode"]&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)](https://github.com/MichaelCurrin/auto-commit-msg/)
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
      altText: "",
      label: "",
      url: "",
      query: "",
      target: "",
      result: INITIAL_RESULT,
      note,
    };
  },
  methods: {
    submit() {
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
