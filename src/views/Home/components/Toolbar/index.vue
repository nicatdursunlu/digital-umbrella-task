<template>
  <div class="py-3 px-4">
    <v-row class="my-0" align-center>
      <v-col md="6">
        <div class="d-flex align-center justify-end">
          <v-btn class="ml-auto mr-2" text depressed>
            <v-icon class="mr-2" medium> mdi-magnify </v-icon>
            <span> Axtarış </span>
          </v-btn>
          <v-btn @click="handleOpenDialog" color="primary" depressed>
            <v-icon class="mr-2" medium> mdi-plus </v-icon>
            <span> Əlavə et </span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    handleOpenDialog: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      showFilter: false
    }
  }
}
</script>
