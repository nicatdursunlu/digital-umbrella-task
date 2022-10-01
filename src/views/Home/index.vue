<template>
  <div class="page">
    <div class="page__header">
      <Toolbar :handleOpenDialog="handleOpenDialog" />
    </div>
    <div class="pa-4">
      <Form @formSubmit="handleFormSubmit" />
      <List :subjects="subjects" />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

import Toolbar from './components/Toolbar'
import List from './components/List'
import Form from './components/Form'

export default {
  components: {
    Toolbar,
    List,
    Form
  },
  data() {
    return {
      dialog: false,
      subjects: []
    }
  },
  methods: {
    handleOpenDialog() {
      this.$eventBus.$emit('handleOpenDialog', true)
    },
    handleFormSubmit(form) {
      this.subjects.unshift({
        id: uuidv4(),
        subject: form.subject,
        tags: form.tags.split(','),
        createdAt: Date.now()
      })
      localStorage.setItem('subjects', JSON.stringify(this.subjects))
    }
  },
  mounted() {
    this.subjects = JSON.parse(localStorage.getItem('subjects')) || []
  }
}
</script>