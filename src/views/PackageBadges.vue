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

                <!-- Radio buttons. -->
                <div>
                  <input
                    type="radio"
                    id="python"
                    name="package-type"
                    value="Python"
                    v-model="pkgType"
                    checked
                  />
                  <label for="python">Python (PyPI)</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="node"
                    name="package-type"
                    value="Node"
                    v-model="pkgType"
                  />
                  <label for="node">Node (NPM)</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="ruby"
                    name="package-type"
                    value="Ruby"
                    v-model="pkgType"
                  />
                  <label for="ruby">Ruby (RubyGems)</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="go"
                    name="package-type"
                    value="Go"
                    v-model="pkgType"
                  />
                  <label for="go">Go</label>
                </div>
              </div>
              <br />

              <div :class="!dynamicBadgeEnabled ? disabledClass : ''">
                <span>Environment: </span>

                <input
                  type="radio"
                  id="env-prod"
                  name="env-type"
                  :value="prodOption"
                  :disabled="!dynamicBadgeEnabled"
                  v-model="envType"
                  checked
                />
                <label for="env-prod">{{ prodOption }}</label>

                <input
                  type="radio"
                  id="env-dev"
                  name="env-type"
                  :value="devOption"
                  :disabled="!dynamicBadgeEnabled"
                  v-model="envType"
                />
                <label for="env-dev">{{ devOption }}</label>
              </div>
            </fieldset>
            <br />

            <fieldset name="ghRepo">
              <legend>GitHub repo</legend>

              <TextInput
                label="Username"
                v-model="username"
                :disabled="!dynamicBadgeEnabled"
              />
              <br />

              <TextInput
                label="Repo name"
                v-model="repoName"
                :disabled="!dynamicBadgeEnabled"
              />
            </fieldset>
            <br />

            <fieldset name="display-options">
              <legend>Display options</legend>
              <TextInput
                label="Color"
                v-model="badgeColor"
                :isRequired="true"
                :note="colorHelp"
              />

              <TextInput
                label="Logo"
                v-model="logo"
                placeholder="e.g. vue.js"
                note="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`"
              />

              <TextInput
                label="Logo color"
                v-model="logoColor"
                :disabled="logo === '' || !dynamicBadgeEnabled"
                :class="logo === '' ? disabledClass : ''"
                placeholder="e.g. white or #fff or #ffffff"
                note="Only used if Logo is set. You can override with your own color, or leave this blank to use the badge's own rich colors (these are often poor for reading on a dark background, while `white` is a bland but very readable choice)."
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

import { COLOR_PRESETS } from "@/constants/appearance";
import { COLOR_HELP, INITIAL_RESULT } from "@/constants/text";

import Help from "@/components/Help.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

import { REGISTRY, RegistryKeys } from "@/constants/urls";
import { dependency, nodeVersionBadge } from "@/core/packages";
import { Repo } from "@/core/Repo";
import { ENVIRONMENT, EnvironmentKeys } from "@/core/shieldsApi";

const NOTE = `
- For NPM, the badge is dynamic - whatever package name you set, the version of that package in your repo will be used, without having to update the badge code. The Environent setting is for prod vs dev dependencies.
- For the rest, the badge is just static - it does not care about your repo. If you put a version number in your badge, you'll have to remember to update it manually.
- Sample name values for Go: 'http' (redirects to 'net/http') or 'encoding/json'.
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

      badgeColor: COLOR_PRESETS.Default,
      logo: "",
      logoColor: COLOR_PRESETS.LogoDefault,

      result: INITIAL_RESULT,
      note: NOTE,
      colorHelp: COLOR_HELP,

      disabledClass: "disabled-text",
    };
  },
  computed: {
    dynamicBadgeEnabled(): boolean {
      return this.pkgType === "Node";
    },
  },
  methods: {
    submit() {
      console.debug("Process inputs and render results");

      const logoAppearance = { logo: this.logo, logoColor: this.logoColor };

      const registryKey = this.pkgType as RegistryKeys,
        registry = REGISTRY[registryKey];

      const dependencyBadge = registry
        ? dependency(this.pkgName, registry, logoAppearance)
        : "";

      const repo = new Repo(this.username, this.repoName);
      const envKey = this.envType as EnvironmentKeys,
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
