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

              <TextInput
                label="Name"
                v-model="pkgName"
                placeholder="e.g. vue"
                isRequired
              />
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
              <br />

              <div :class="!envEnabled ? disabledClass : ''">
                <span>Environment: </span>

                <input
                  type="radio"
                  id="env-prod"
                  name="env-type"
                  :value="prodOption"
                  v-model="envType"
                  :disabled="!envEnabled"
                  checked
                />
                <label for="env-prod">{{ prodOption }}</label>

                <input
                  type="radio"
                  id="env-dev"
                  name="env-type"
                  :value="devOption"
                  v-model="envType"
                  :disabled="!envEnabled"
                />
                <label for="env-dev">{{ devOption }}</label>
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
                :disabled="logo === ''"
                :class="logo === '' ? disabledClass : ''"
                placeholder="e.g. white or #fff or #ffffff"
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
import { defineComponent } from "vue";

import Help from "@/components/Help.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { REGISTRY } from "@/constants/urls";
import { COLOR } from "@/constants/appearance";
import { dependency, nodeVersionBadge } from "@/core/packages";
import { Repo } from "@/core/Repo";
import { ENVIRONMENT } from "@/core/shieldsApi";

const note = `
- Environent setting is for Node packages only and must match whether the package is in "dependencies" or "devDependencies".
- Optionally set Repo fields to your _own_ project, so the badge dynamically pick up version number of the package chosen above.
- Only NPM is currently supported for the dynamic package.
`;

export default defineComponent({
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

      devOption: ENVIRONMENT[ENVIRONMENT.Dev],
      prodOption: ENVIRONMENT[ENVIRONMENT.Prod],
      envType: ENVIRONMENT[ENVIRONMENT.Prod],

      username: "MichaelCurrin",
      repoName: "badge-generator",
      logo: "",
      logoColor: COLOR.LogoDefault,

      result: "_Your output will appear here_",
      note: note,

      disabledClass: "disabled-text",
    };
  },
  computed: {
    envEnabled(): boolean {
      return this.pkgType === "Node";
    },
  },
  methods: {
    submit() {
      console.debug("Process inputs and render results");

      const logoAppearance = { logo: this.logo, logoColor: this.logoColor };

      const registryKey = this.pkgType as keyof typeof REGISTRY,
        registry = REGISTRY[registryKey];

      const dependencyBadge = registry
        ? dependency(this.pkgName, registry, logoAppearance)
        : "";

      const repo = new Repo(this.username, this.repoName);
      const envKey = this.envType as keyof typeof ENVIRONMENT,
        environment = ENVIRONMENT[envKey];

      const lockedPkgBadge =
        registry === REGISTRY.Node
          ? nodeVersionBadge(repo, this.pkgName, logoAppearance, environment)
          : "";

      this.result = `\
${dependencyBadge}

${lockedPkgBadge}
        `;
    },
  },
});
</script>
