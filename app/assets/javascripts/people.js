/* global Vue, Rails */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      people: [],
      newPersonName: "",
      newPersonBio: "",
      attributeFilter: ""
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
        Rails.ajax({
          url: "/api/v1/people",
          type: "POST",
          // data: "form_name=" + this.newPersonName + "&form_bio=" + this.newPersonBio,
          data: `form_name=${this.newPersonName}&form_bio=${this.newPersonBio}`,
          success: function(data) {
            console.log('success!!!', data);
            this.people.push(data);
            this.newPersonName = "";
            this.newPersonBio = "";
          }.bind(this)
        });
      },
      deletePerson: function(inputPerson) {
        var index = this.people.indexOf(inputPerson);
        this.people.splice(index, 1);
      },
      isValidPerson: function(inputPerson) {
        var validName = inputPerson.name.toLowerCase().indexOf(this.attributeFilter.toLowerCase()) !== -1;
        var validBio = inputPerson.bio.toLowerCase().indexOf(this.attributeFilter.toLowerCase()) !== -1;
        return validName || validBio;
      }
    },
    computed: {

    }
  });
});
