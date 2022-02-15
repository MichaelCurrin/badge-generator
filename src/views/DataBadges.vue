<template>
  <div class="badges container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Data badges</h1>
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
                label="Label"
                v-model="label"
                isRequired
                placeholder="e.g. keywords"
                note="Display text for the left of the badge"
              />
              <br />

              <TextInput
                label="Alt text"
                v-model="altText"
                placeholder="e.g. keywords"
                note="Markdown fallback alt text - useful for a broken link. If omitted, the _Label_ will be used."
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
                note="JSON query to get a value."
              />
            </fieldset>
            <br />

            <fieldset name="links">
              <legend>Links</legend>

              <TextInput
                label="Click target"
                v-model="target"
                placeholder="e.g. https://example.com"
                note="URL like for your GitHub repo, or a local path like `/docs/`."
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

import { dynamicDataBadge } from "@/core/dynamicData";

const note = `
Reference a value in a remote data file. The badge will update as the content there changes. Only the _JSON_ format is supported in this generator.

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
  name: "DataBadges",
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
      const dynamicDataBadgeResult = dynamicDataBadge(
        this.label,
        this.url,
        this.query,
        this.target
      );

      this.result = `\
_Query parameter badge_

${dynamicDataBadgeResult}
      `;
    },
  },
});
</script>
