// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      people: [],
      newPersonName: "",
      newPersonBio: ""
    },
    mounted: function() {
      Rails.ajax({
        url: "/api/v1/people",
        type: "GET",
        success: function(data) {
          console.log(data);
          this.people = data;
        }.bind(this)
      });
    },
    methods: {
      toggleBio: function(inputPerson) {
        inputPerson.bioVisible = !inputPerson.bioVisible;
      },
      addPerson: function() {
        var newPerson = {
          name: this.newPersonName,
          bio: this.newPersonBio,
          bioVisible: false
        };
        this.people.push(newPerson);
        this.newPersonName = "";
        this.newPersonBio = "";
      },
      deletePerson: function(inputPerson) {
        var index = this.people.indexOf(inputPerson);
        this.people.splice(index, 1);
      }
    },
    computed: {

    }
  });
});
