<template>
  <div class="badges container-lg row">
    <div class="col-12">
      <h1>Generic badges</h1>
    </div>

    <div class="col-6">
      <div class="app-input">
        <h2>Input values</h2>

        <form @submit.prevent.enter="submit">
          <fieldset name="text">
            <legend>Text</legend>

            <TextInput label="Label" v-model="label" />
            <br />

            <TextInput label="Message (required)" v-model="message" />
            <br />
          </fieldset>
          <br />

          <fieldset name="appearance">
            <legend>Appearance</legend>

            <TextInput
              label="Color"
              v-model="color"
              note="Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`"
            />

            <Checkbox label="Large" v-model="isLarge" />
          </fieldset>
          <br />

          <fieldset name="links">
            <legend>Links</legend>

            <TextInput
              label="Click target"
              v-model="target"
              placeholder="e.g. https://example.com"
              note="This doesn't have to be set, but a button without a click destination is not so useful."
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
import { genericBadge } from "@/badges";
import Checkbox from "@/components/Checkbox.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";

export default {
  name: "GenericBadges",
  components: {
    Checkbox,
    Results,
    TextInput,
  },
  data() {
    return {
      label: "Foo",
      message: "Bar",
      color: "green",
      isLarge: false,
      target: "https://",
      result: "_Your output will appear here_",
    };
  },
  methods: {
    submit: function () {
      console.debug("Process inputs and render results");

      const badge = genericBadge(
        this.label,
        this.message,
        this.color,
        this.isLarge,
        this.target
      );

      this.result = `\
${badge}
      `;
    },
  },
};
</script>
