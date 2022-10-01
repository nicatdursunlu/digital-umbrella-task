<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="subjects"
      :item-class="getItemClass"
    >
      <template v-slot:[`item.check`]="{ item }">
        <v-checkbox
          @change="toggleCompletedState"
          v-model="item.isCompleted"
          hide-details
          class="mt-0"
        />
      </template>
      <template v-slot:[`item.tags`]="{ item }">
        <v-chip v-for="tag in item.tags" :key="tag.id" class="mr-2" small>
          <span
            class="body-2"
            :class="
              item.isCompleted ? 'gray--text text--darken-3' : 'gray--text'
            "
          >
            {{ tag }}
          </span>
        </v-chip>
      </template>
      <template v-slot:[`item.createdAt`]="{ item }">
        <span> {{ getDateFormat(item.createdAt) }}</span>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="mr-2" @click="deleteSubject(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { getDateFormat } from '@/utils/date'

export default {
  props: {
    subjects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      getDateFormat,
      headers: [
        {
          text: '',
          value: 'check',
          sortable: false,
          align: 'start',
          width: '10%'
        },
        { text: 'Subject', value: 'subject', sortable: false, width: '50%' },
        {
          text: 'Tags',
          value: 'tags',
          sortable: false
        },
        {
          text: 'Date',
          value: 'createdAt',
          sortable: false
        },
        {
          text: '',
          value: 'actions',
          sortable: false,
          align: 'end',
          width: '10%'
        }
      ],
      options: {},
      dialog: false
    }
  },
  methods: {
    deleteSubject(item) {
      this.$emit('deleteSubject', item)
    },
    toggleCompletedState() {
      localStorage.setItem('subjects', JSON.stringify(this.subjects))
    },
    getItemClass(item) {
      if (!item.isCompleted) {
        return 'gray--text lighten-4'
      }
      return ''
    }
  }
}
</script>
