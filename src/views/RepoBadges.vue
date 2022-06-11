<template>
  <div class="badges container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Repo badges</h1>

        <p>
          Generate shields about your repo and add them to your README.md file.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="app-input">
          <h2>Input values</h2>

          <form @submit.prevent.enter="submit">
            <fieldset name="gh-repo">
              <legend>GitHub repo</legend>

              <TextInput label="Username" v-model="username" isRequired />
              <br />

              <TextInput label="Repo name" v-model="repoName" isRequired />
              <br />

              <TextInput label="License" v-model="licenseType" />
              <br />

              <div>
                <label>Version type</label>

                <span>
                  <input
                    type="radio"
                    id="one"
                    value="tag"
                    v-model="versionType"
                  />
                  <label for="one">Tag</label>
                </span>

                <span>
                  <input
                    type="radio"
                    id="two"
                    value="release"
                    v-model="versionType"
                  />
                  <label for="two">Release</label>
                </span>
              </div>
            </fieldset>
            <br />

            <fieldset name="display-options">
              <legend>Display options</legend>

              <TextInput
                label="Color"
                v-model="badgeColor"
                placeholder="e.g. blue"
                :note="colorHelp"
              />

              <Checkbox
                label="Social badges"
                v-model="addSocialBadges"
                note="Show badges about the GitHub repo - not useful for your main README.md on GitHub but these are great for adding to a page on docs site or for linking to your repo from another location you control like a repo or website."
              />

              <Checkbox
                label="Issues badge"
                v-model="addIssues"
                note="Add a counter for number of open issues. The color will change based on the count."
              />

              <Checkbox
                label="Template button"
                v-model="useThisTemplate"
                note="Add a <i>Use This Template</i> button."
              />

              <Checkbox
                label="GH Pages button"
                v-model="ghPages"
                note="Add a link to a GitHub Pages site."
              />

              <Checkbox
                label="Documentation section"
                v-model="addDocsSection"
                note="Add heading and content around documentation."
              />

              <Checkbox
                label="License section"
                v-model="addLicenseSection"
                note="Add heading and content around license. If enabled, the license badge at the top of the page will point to this section on the page, otherwise it will point to the full URL of the license file."
              />
            </fieldset>
            <br />

            <fieldset name="gh-actions">
              <legend>GitHub Actions workflow</legend>

              <TextInput
                label="Name"
                v-model="workflowName"
                placeholder="e.g. Node CI"
                note='From the "name" field of a GH Actions workflow file. For the default repo settings, you can use "GH Pages Deploy".'
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

import { DEBUG } from "@/constants/";
import { COLOR_PRESETS } from "@/constants/appearance";
import { COLOR_HELP, INITIAL_RESULT } from "@/constants/text";

import Help from "@/components/Help.vue";
import Checkbox from "@/components/Checkbox.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { Repo } from "@/core/Repo";
import { TagTypes } from "@/core/Repo.d";
import { statusBadge } from "@/core/ghActions";
import store from "@/store";

const note = `
- Where to put the repo metadata badges.
    - In your \`README.md\` file.
- Where to put the social badges.
    - On a docs site to link back to your repo.
    - Link to a repo you don't own - such as if you want to link to the Vue repo and show its star count.
- The first social badge has fixed display logic - so make sure you enter a valid repo as the badge can't tell you it is broken. A positive of this is that it works to point to private repos.
- If you want to always how the latest tag, even if it has _no release_ yet, use the Tag badge. Otherwise, use the Release badge.
- For centered badges - note that the HTML \`align\` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the \`align\` attribute.

If you need more content for the body of your README.md or doc files, check out this generic template:

- [![MichaelCurrin - generic-project-template](https://img.shields.io/static/v1?label=MichaelCurrin&message=generic-project-template&color=blue&logo=github)](https://github.com/MichaelCurrin/generic-project-template)
`;

export default defineComponent({
  name: "RepoBadges",
  components: {
    Checkbox,
    Help,
    Results,
    TextInput,
  },
  data() {
    const versionType: TagTypes = "tag";

    return {
      username: store.getRepoUsername(),
      repoName: store.getRepoName(),
      licenseType: "MIT",

      addSocialBadges: false,
      addIssues: false,
      useThisTemplate: false,
      ghPages: false,
      addDocsSection: true,
      addLicenseSection: true,
      badgeColor: COLOR_PRESETS.Default,
      workflowName: "",

      versionType,

      result: INITIAL_RESULT,
      note,
      colorHelp: COLOR_HELP,
    };
  },
  methods: {
    submit() {
      if (DEBUG) {
        console.debug("Process inputs and render results");
        console.debug({
          username: this.username,
          repoName: this.repoName,
          licenseType: this.licenseType,
          useThisTemplate: this.useThisTemplate,
          versionType: this.versionType,
          ghPages: this.ghPages,
          workflowName: this.workflowName,
          badgeColor: this.badgeColor,
        });
      }

      store.setRepoUsername(this.username);
      store.setRepoName(this.repoName);

      const repo = new Repo(
        this.username,
        this.repoName,
        this.licenseType,
        this.badgeColor
      );

      let socialBadges = "";
      if (this.addSocialBadges) {
        const repoBadge = repo.ghBadge();
        const starsBadge = repo.ghCounterBadge("stars");
        const forksBadge = repo.ghCounterBadge("forks");
        socialBadges = `\
_Social buttons_

${repoBadge}
${starsBadge}
${forksBadge}
`;
      }

      const ghActionsBadge = this.workflowName
        ? statusBadge(repo, this.workflowName)
        : "";
      const versionBadge = repo.tagBadge(this.versionType as TagTypes);

      const useLocalLicense = this.addLicenseSection;
      const licenseBadge = repo.licenseBadge(useLocalLicense);
      const issuesBadge = this.addIssues ? repo.ghCounterBadge("issues") : "";

      const templateButton = this.useThisTemplate
        ? repo.useThisTemplateBadge()
        : "";
      // For now just GH pages but can be extended to have badges focused on
      // docs. A custom URL independent of repo can be generated in a separate
      // section or maybe here - just add output URL and assume the other data.
      const ghPagesButton = this.ghPages ? repo.ghPagesBadge() : "";

      const documentationMessage = this.addDocsSection
        ? repo.documentationMessage()
        : "";
      const licenseMessage = this.addLicenseSection
        ? repo.licenseMessage()
        : "";

      this.result = `\
${socialBadges}

_Repo metadata_

${ghActionsBadge}
${versionBadge}
${licenseBadge}
${issuesBadge}

_Call-to-Action buttons_

<div align="center">

${templateButton}

${ghPagesButton}

</div>

${documentationMessage}

${licenseMessage}`;
    },
  },
});
</script>
