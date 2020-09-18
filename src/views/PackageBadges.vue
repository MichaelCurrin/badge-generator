<template>
  <div class="badges container-lg row">
    <div class="col-12">
      <h1>Package badges</h1>
    </div>

    <div class="col-6">
      <div class="app-input">
        <h2>Input values</h2>

        <form @submit.prevent.enter="submit">
          <fieldset name="ghRepo">
            <legend>Package metadata</legend>

            <TextInput label="Name" v-model="pkgName" />
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
                id="npm"
                name="package-type"
                value="npm"
                v-model="pkgType"
              />
              <label for="npm">Node (NPM)</label>

              <input
                type="radio"
                id="ruby"
                name="package-type"
                value="gem"
                v-model="pkgType"
              />
              <label for="ruby">Ruby (Rubygems)</label>
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
import { Package } from "@/badges";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

export default {
  name: "PackageBadges",
  components: {
    Results,
    TextInput,
  },
  data() {
    return {
      pkgName: "requests",
      pkgType: "python",
      result: "_Your output will appear here_",
    };
  },
  methods: {
    submit: function () {
      console.debug("Process inputs and render results");

      console.log(this.pkgName, this.pkgType);
      const pkg = new Package(this.pkgName, this.pkgType),
        badge = pkg.badge();
      console.log(badge);
      this.result = `\
${badge}
        `;
    },
  },
};
</script>
