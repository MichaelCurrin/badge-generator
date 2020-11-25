<template>
  <div class="badges container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Package badges</h1>

        <p>
          Show your project's dependencies as badges in your docs, including an
          external link to the package in a registry.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="app-input">
          <h2>Input values</h2>

          <form @submit.prevent.enter="submit">
            <fieldset name="package">
              <legend>Package metadata</legend>

              <TextInput label="Name" v-model="pkgName" isRequired />
              <br />

              <div>
                <span>Type: </span>

                <input
                  type="radio"
                  id="python"
                  name="package-type"
                  value="python"
                  v-model="pkgType"
                  checked
                />
                <label for="python">Python (PyPI)</label>

                <input
                  type="radio"
                  id="node"
                  name="package-type"
                  value="node"
                  v-model="pkgType"
                />
                <label for="node">Node (NPM)</label>

                <input
                  type="radio"
                  id="ruby"
                  name="package-type"
                  value="ruby"
                  v-model="pkgType"
                />
                <label for="ruby">Ruby (Rubygems)</label>
              </div>
            </fieldset>
            <br />

            <fieldset name="ghRepo">
              <legend>GitHub repo</legend>

              <TextInput label="Username" v-model="username" />
              <br />

              <TextInput label="Repo name" v-model="repoName" />
            </fieldset>
            <br />

            <fieldset name="appearance">
              <legend>Appearance</legend>
              <TextInput
                label="Logo"
                v-model="logo"
                placeholder="e.g. vue.js"
                note="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`"
              />

              <TextInput
                label="Logo color"
                v-model="logoColor"
                note="The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."
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

<script>
import Help from "@/components/Help.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { versionBadge, dependency } from "@/core/packages";

const note = `
Optionally set Repo fields to your _own_ project, so the badge dynamically pick up version number of the package chosen above.

Only NPM is currently supported for the dynamic package.
`;

export default {
  name: "PackageBadges",
  components: {
    Help,
    Results,
    TextInput,
  },
  data() {
    return {
      pkgName: "vue",
      pkgType: "node",
      username: "MichaelCurrin",
      repoName: "badge-generator",
      logo: "vue.js",
      logoColor: "white",

      result: "_Your output will appear here_",
      note: note,
    };
  },
  methods: {
    submit: function () {
      console.debug("Process inputs and render results");

      const dependencyBadge = dependency(this.pkgName, this.pkgType);

      const lockedPkgBadge = versionBadge(
        this.username,
        this.repoName,
        this.pkgName,
        this.pkgType,
        this.logo,
        this.logoColor
      );

      this.result = `\
${dependencyBadge}

${lockedPkgBadge}
        `;
    },
  },
};
</script>
