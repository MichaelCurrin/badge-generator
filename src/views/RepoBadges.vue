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

        <Help
          message="Note that HTML `align` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the `align` attribute."
        />
      </div>
    </div>

    <div class="col-6">
      <Results :result="result" />
    </div>
  </div>
</template>

<script>
import { Repo } from "@/badges";
import Help from "@/components/Help.vue";
import Checkbox from "@/components/Checkbox.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

export default {
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
    };
  },
  methods: {
    submit: function () {
      console.debug("Process inputs and render results");

      const repo = new Repo(this.username, this.repoName);

      const release = repo.tagBadge({
          isRelease: true,
        }),
        tag = repo.tagBadge(),
        license = repo.licenseBadge(this.licenseType);

      const stars = repo.ghSocial("stars"),
        forks = repo.ghSocial("forks");

      const templateButton = this.useThisTemplate
        ? repo.useThisTemplateBadge(this.useThisTemplate)
        : "";
      // For now just GH pages but can be extended to have badges
      // focused docs. A custom URL independent of repo can be generated in a separate section or maybe here - just add output URL and assume the other data.
      const ghPagesButton = this.ghPages ? repo.ghPagesBadge() : "";

      this.result = `\
_Repo metadata_

${release}

${tag}

${license}

_Social_

${stars}
${forks}

_Call-to-Action buttons_

<div align="center">

${templateButton}
${ghPagesButton}

</div>
      `;
    },
  },
};
</script>