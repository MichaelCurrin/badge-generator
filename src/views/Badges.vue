<template>
  <div class="badges container-lg row">
    <div class="col-12">
      <h1>Badges</h1>
    </div>

    <div class="col-6">
      <div class="app-input">
        <h2>Input values</h2>

        <form @submit.prevent.enter="submit">
          <fieldset name="gh-repo">
            <legend>Github repo</legend>

            <div>
              <span>Username: </span>
              <input v-model="username" />
            </div>
            <br />

            <div>
              <span>Repo name: </span>
              <input v-model="repoName" />
            </div>
            <br />

            <div>
              <span>License type: </span>
              <input v-model="licenseType" />
            </div>

            <br />

            <div>
              <span>Template: </span>
              <input type="checkbox" v-model="useThisTemplate" />
              <small>Add a <i>Use This Template</i> button</small>
            </div>

            <br />

            <div>
              <span>GitHub Pages: </span>
              <input type="checkbox" v-model="ghPages" />
              <small>Add a link to the project's GH Pages site</small>
            </div>
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
import Results from "@/components/Results.vue";

export default {
  name: "Badges",
  components: {
    Results,
  },
  data() {
    return {
      username: "MichaelCurrin",
      repoName: "badge-generator",
      licenseType: "MIT",
      result: "_Your output will appear here_",
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
**Repo metadata**

${release}

${tag}

${license}

**Call-to-Action buttons**

${useThisTemplate}

${viewSite}
      `;
    },
  },
};
</script>
