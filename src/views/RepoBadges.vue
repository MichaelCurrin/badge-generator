<template>
  <div class="badges container-lg row">
    <div class="col-12">
      <h1>Repo badges</h1>
    </div>

    <div class="col-6">
      <div class="app-input">
        <h2>Input values</h2>

        <form @submit.prevent.enter="submit">
          <fieldset name="ghRepo">
            <legend>GitHub repo metadata</legend>

            <TextInput label="Username" v-model="username" />
            <br />

            <TextInput label="Repo name" v-model="repoName" />
            <br />

            <TextInput label="License" v-model="licenseType" />
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
</template>

<script>
import { Repo } from "@/badges";
import Checkbox from "@/components/Checkbox.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

export default {
  name: "RepoBadges",
  components: {
    Checkbox,
    Results,
    TextInput,
  },
  data() {
    return {
      username: "MichaelCurrin",
      repoName: "badge-generator",
      licenseType: "MIT",
      result: "_Your output will appear here_",
      useThisTemplate: false,
      ghPages: false,
    };
  },
  methods: {
    submit: function () {
      console.debug("Process inputs and render results");

      const repo = new Repo(this.username, this.repoName);

      const release = repo.tagBadge({
        isRelease: true,
      });
      const tag = repo.tagBadge();
      const license = repo.licenseBadge(this.licenseType);

      const useThisTemplate = this.useThisTemplate
        ? repo.useThisTemplateBadge(this.useThisTemplate)
        : "";
      // For now just GH pages but can be extended to have badges
      // focused docs. A custom URL independent of repo can be generated in a separate section or maybe here - just add output URL and assume the other data.
      const viewSite = this.ghPages ? repo.ghPagesBadge() : "";

      this.result = `\
_Repo metadata_

${release}

${tag}

${license}

_Call-to-Action buttons_

<div align="center">

${useThisTemplate}
${viewSite}

</div>
      `;
    },
  },
};
</script>
