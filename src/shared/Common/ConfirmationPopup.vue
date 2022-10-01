<template>
  <v-dialog :value="dialog" persistent max-width="370px">
    <v-card>
      <v-card-title class="py-3 px-4 border-bottom">
        <span class="gray--text text--darken-3 font-weight-medium">
          {{ title }}
        </span>
      </v-card-title>
      <v-card-text class="pa-4">
        <slot />
      </v-card-text>
      <v-card-actions class="py-3 px-4 d-flex justify-end border-top">
        <v-btn color="gray lighten-3 mr-2" depressed @click="handleCancel">
          {{ cancelText || 'İmtina et' }}
        </v-btn>
        <v-btn @click="handleConfirm" color="error" depressed>
          {{ confirmText || 'Sil' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cancelText: {
      type: String,
      required: false
    },
    confirmText: {
      type: String,
      required: false
    }
  },
  methods: {
    handleCancel() {
      this.$emit('cancel')
    },
    handleConfirm() {
      this.$emit('confirm')
    }
  }
}
</script>
