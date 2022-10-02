<template>
  <div class="page">
    <div class="page__header">
      <Toolbar :toggleDialog="toggleDialog" />
    </div>
    <div class="pa-4">
      <v-dialog v-model="dialog" persistent max-width="570px">
        <Form
          :selectedSubject="selectedSubject"
          :toggleDialog="toggleDialog"
          @formSubmit="handleFormSubmit"
        />
      </v-dialog>
      <List
        :subjects="subjects"
        @deleteSubject="handleDeleteSubject"
        @editSubject="handleEditSubject"
      />
    </div>
    <ConfirmationPopup
      title="Subjectin silinməsi"
      v-if="subjectToDelete"
      :dialog="confirmationDialog"
      @confirm="handleDeleteConfirmation"
      @cancel="handleDeleteCancellation"
    >
      <span class="font-weight-bold">
        {{ subjectToDelete.subject }}
      </span>
      subjecti silmək istədiyinizə əminsiniz?
    </ConfirmationPopup>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

import ConfirmationPopup from '@/shared/Common/ConfirmationPopup'
import Toolbar from './components/Toolbar'
import List from './components/List'
import Form from './components/Form'

export default {
  components: {
    Toolbar,
    List,
    Form,
    ConfirmationPopup
  },
  data() {
    return {
      dialog: false,
      subjects: [],
      confirmationDialog: false,
      subjectToDelete: null,
      selectedSubject: null
    }
  },
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog
      if (!this.dialog) {
        this.selectedSubject = null
      }
    },
    handleFormSubmit(form) {
      if (form.id) {
        let subject = this.subjects.find((subject) => subject.id === form.id)
        subject.subject = form.subject
        subject.tags = form.tags.split(',')
      } else {
        this.subjects.unshift({
          id: uuidv4(),
          subject: form.subject,
          tags: form.tags.split(','),
          createdAt: Date.now()
        })
      }
      localStorage.setItem('subjects', JSON.stringify(this.subjects))
      this.toggleDialog()
    },
    handleDeleteSubject(item) {
      this.confirmationDialog = true
      this.subjectToDelete = item
    },
    handleDeleteConfirmation() {
      const index = this.subjects.indexOf(this.subjectToDelete)
      this.subjects.splice(index, 1)
      localStorage.setItem('subjects', JSON.stringify(this.subjects))
      this.handleDeleteCancellation()
    },
    handleDeleteCancellation() {
      this.confirmationDialog = false
      this.subjectToDelete = null
    },
    handleEditSubject(item) {
      this.toggleDialog()
      this.selectedSubject = item
    }
  },
  mounted() {
    this.subjects = JSON.parse(localStorage.getItem('subjects')) || []
  }
}
</script>