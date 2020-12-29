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
                  value="Python"
                  v-model="pkgType"
                  checked
                />
                <label for="python">Python (PyPI)</label>

                <input
                  type="radio"
                  id="node"
                  name="package-type"
                  value="Node"
                  v-model="pkgType"
                />
                <label for="node">Node (NPM)</label>

                <input
                  type="radio"
                  id="ruby"
                  name="package-type"
                  value="Ruby"
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
              <legend>Dynamic badge appearance</legend>
              <TextInput
                label="Logo"
                v-model="logo"
                placeholder="e.g. vue.js"
                note="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`"
              />

              <TextInput
                label="Logo color"
                v-model="logoColor"
                note="You can override with your own color, or leave blank to use the badge's own rich colors (these are often poor for reading on a dark background, while `white` is bland but most readable)."
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
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { COLORS, REGISTRY } from "@/core/constants";
import { dependency, nodeVersionBadge } from "@/core/packages";

const note = `
- Optionally set Repo fields to your _own_ project, so the badge dynamically pick up version number of the package chosen above.
- Only NPM is currently supported for the dynamic package.
`;

export default Vue.extend({
  name: "PackageBadges",
  components: {
    Help,
    Results,
    TextInput,
  },
  data() {
    return {
      pkgName: "vue",
      pkgType: "Node",
      username: "MichaelCurrin",
      repoName: "badge-generator",
      logo: "vue.js",
      logoColor: COLORS.LogoDefault,

      result: "_Your output will appear here_",
      note: note,
    };
  },
  methods: {
    submit() {
      console.debug("Process inputs and render results");

      const key = this.pkgType as keyof typeof REGISTRY,
        registry = REGISTRY[key];

      const dependencyBadge = registry
        ? dependency(this.pkgName, registry)
        : "";

      const lockedPkgBadge =
        registry === REGISTRY.Node
          ? nodeVersionBadge(
              this.username,
              this.repoName,
              this.pkgName,
              this.logo,
              this.logoColor
            )
          : "";

      this.result = `\
${dependencyBadge}

${lockedPkgBadge}
        `;
    },
  },
});
</script>
