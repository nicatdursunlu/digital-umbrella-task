<template>
  <div>
    <v-data-table :headers="headers" :items="subjects">
      <template v-slot:[`item.tags`]="{ item }">
        <v-chip v-for="tag in item.tags" :key="tag.id" class="mr-2" small>
          <span class="body-2 gray--text text--darken-3">
            {{ tag }}
          </span>
        </v-chip>
      </template>
      <template v-slot:[`item.createdAt`]="{ item }">
        <span> {{ getDateFormat(item.createdAt) }}</span>
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
          // align: 'end',
          // width: '10%'
        }
      ],
      options: {},
      dialog: false
    }
  }
}
</script>
