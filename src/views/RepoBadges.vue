<template>
  <div class="badges container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Repo badges</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="app-input">
          <h2>Input values</h2>

          <form @submit.prevent.enter="submit">
            <fieldset name="ghRepo">
              <legend>GitHub repo</legend>

              <TextInput label="Username" v-model="username" isRequired />
              <br />

              <TextInput label="Repo name" v-model="repoName" isRequired />
              <br />

              <TextInput label="License" v-model="licenseType" />
              <br />

              <div>
                <label>Version type</label>
                <input
                  type="radio"
                  id="one"
                  value="tag"
                  v-model="versionType"
                />
                <label for="one">Tag</label>
                <input
                  type="radio"
                  id="two"
                  value="release"
                  v-model="versionType"
                />
                <label for="two">Release</label>
              </div>
            </fieldset>
            <br />

            <fieldset name="buttons">
              <legend>Large CTA buttons</legend>

              <Checkbox
                label="Template"
                v-model="useThisTemplate"
                note="Add a <i>Use This Template</i> button."
              />
              <br />

              <Checkbox
                label="GitHub Pages"
                v-model="ghPages"
                note="Add link to a GitHub Pages site."
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
import Vue from "vue";

import Help from "@/components/Help.vue";
import Checkbox from "@/components/Checkbox.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { Repo } from "@/core/Repo";
import { TagTypes } from "@/core/Repo.d";

const note = `
- Where to put the badges
    - Use the Social badges on docs site to link back to your repo.
    - Or use the Social badges to link to repo you don't own.
    - Use the Repo metadata and the CTA sections at the top of your \`README.md\` and also on your docs site.
- The first social badge is dumb - so you have to make sure you enter a valid repo. A positive of this is that it works for private repos.
- If you want to always how the latest tag, even if it has _no release_ yet, use the Tag badge. Otherwise, use the Release badge.
- For centered badges - note that the HTML \`align\` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the \`align\` attribute.
`;

export default Vue.extend({
  name: "RepoBadges",
  components: {
    Checkbox,
    Help,
    Results,
    TextInput,
  },
  data() {
    return {
      username: "MichaelCurrin",
      repoName: "badge-generator",
      licenseType: "MIT",
      useThisTemplate: false,
      ghPages: false,
      result: "_Your output will appear here_",
      versionType: "tag",
      note: note,
    };
  },
  methods: {
    submit: function () {
      console.debug("Process inputs and render results");
      console.debug({
        username: this.username,
        repoName: this.repoName,
        licenseType: this.licenseType,
        useThisTemplate: this.useThisTemplate,
        versionType: this.versionType,
        ghPages: this.ghPages,
      });

      const repo = new Repo(this.username, this.repoName, this.licenseType);

      const versionBadge = repo.tagBadge(this.versionType as TagTypes),
        licenseBadge = repo.licenseBadge(true);

      const repoBadge = repo.gh(),
        starsBadge = repo.ghSocial("stars"),
        forksBadge = repo.ghSocial("forks");

      const templateButton = this.useThisTemplate
        ? repo.useThisTemplateBadge()
        : "";
      // For now just GH pages but can be extended to have badges
      // focused on docs. A custom URL independent of repo can be generated in a separate section or maybe here - just add output URL and assume the other data.
      const ghPagesButton = this.ghPages ? repo.ghPagesBadge() : "";

      const licenseMessage = repo.licenseMessage();

      this.result = `\
_Social buttons_

${repoBadge}
${starsBadge}
${forksBadge}

_Repo metadata_

${versionBadge}
${licenseBadge}

_Call-to-Action buttons_

<div align="center">

${templateButton}

${ghPagesButton}

</div>

${licenseMessage}
      `;
    },
  },
});
</script>
