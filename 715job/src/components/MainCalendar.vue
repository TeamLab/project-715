<template>
  <v-col class="fill-height main-calendar">
    <v-col class="rsv-text">
      <h1>예약일자 선택</h1>
    </v-col>
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="#769fcd"
          @click:date="showFloorPlan($event)"
        ></v-calendar>
      </v-sheet>
    </v-col>
    <v-col class="dummy-for-floorplan" v-if="!hideDummy"></v-col>
  </v-col>
</template>

<script>
export default {
  name: 'MainCalendar',
  props: {
    hideDummy: Boolean
  },
  data() {
    return {
      focus: ''
    }
  },
  mounted() {
    const date = document.getElementsByClassName('v-calendar-weekly__day v-past')
    for (let i = 0; i < date.length; i++) {
      date[i].children[0].children[0].disabled = true
      date[i].style.backgroundColor = '#f7f7f7'
    }
  },
  methods: {
    setToday () {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showFloorPlan(event) {
      if (String(event.month) === this.$refs.calendar.title.slice(0, 1)) {
        this.$emit('isDatePicked', true, this.focus)
      }
    }
  }
}
</script>
<style>
.main-calendar {
  width: 70%;
  max-width: 900px;
  margin: auto;
  padding: 0;
  padding-top: 48px;
  margin-bottom: 0;
}
.rsv-text {
  text-align: left;
  padding-bottom: 24px;
}
.dummy-for-floorplan {
  height: 596px;
}
</style>
