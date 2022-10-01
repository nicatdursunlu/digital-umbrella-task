<template>
  <v-dialog v-model="dialog" persistent max-width="570px">
    <v-form
      ref="form"
      v-model="isFormValid"
      lazy-validation
      @submit.prevent="handleFormSubmit"
    >
      <v-card>
        <v-card-title class="py-3 px-4 border-bottom">
          <span class="gray--text text--darken-3 font-weight-regular">
            New Subject
          </span>
        </v-card-title>
        <v-card-text class="px-4 py-0 border-bottom">
          <v-row class="row-reset mt-3">
            <v-col cols="12" md="12">
              <v-text-field
                v-model="form.subject"
                :rules="rules.subject"
                outlined
                hide-details="auto"
                label="Subject"
              />
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="form.tags"
                :rules="rules.tags"
                outlined
                label="Tags"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions
          class="py-3 px-4 d-flex align-center justify-end border-top"
        >
          <v-btn
            @click="handleCloseDialog"
            color="gray lighten-3 mr-3"
            depressed
            type="button"
          >
            İmtina et
          </v-btn>
          <v-btn color="primary" depressed type="submit"> Yadda saxla </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
const initialValues = {
  subject: null,
  tags: null,
  isCompleted: false,
  createdAt: null
}

export default {
  data() {
    return {
      dialog: false,
      loading: false,
      isFormValid: false,
      form: { ...initialValues },
      rules: {
        subject: [(v) => !!v || 'Subject daxil edin'],
        tags: [
          (v) => !!v || 'Tegler daxil edin',
          (v) =>
            /,(?!(?<=(?:^|,)\s*"(?:[^"]|""|\\")*,)(?:[^"]|""|\\")*"\s*(?:,|$))/.test(
              v
            ) || 'Seperate with coma'
        ]
      }
    }
  },
  methods: {
    handleCloseDialog() {
      this.dialog = false
      this.resetForm()
    },
    handleFormSubmit() {
      const isFormValid = this.$refs.form.validate()
      if (isFormValid) {
        this.$emit('formSubmit', this.form)
        this.handleCloseDialog()
      }
    },
    resetForm() {
      this.form = { ...initialValues }
      this.$refs.form && this.$refs.form.resetValidation()
    }
  },
  mounted() {
    this.$eventBus.$on('handleOpenDialog', () => {
      this.dialog = true
    })
  },
  beforeDestroy() {
    this.$eventBus.$off('handleOpenDialog', null)
  }
}
</script>
