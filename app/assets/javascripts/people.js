// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      people: [
        {
          name: "Bob",
          bio: "Small batch salvia Marfa chillwave delectus, odio forage art party laborum street art minim fixie locavore hoodie mollit.",
          bioVisible: false
        },
        {
          name: "Alice",
          bio: "Tattooed letterpress gluten-free ugh, adipisicing scenester church-key gentrify tousled gastropub pour-over Shoreditch asymmetrical lomo High Life.",
          bioVisible: false
        },
        {
          name: "Tibor",
          bio: "Incididunt photo booth ethical reprehenderit adipisicing. Echo Park readymade Bushwick distillery Tonx. +1 semiotics qui duis literally.",
          bioVisible: false
        },
        {
          name: "Živa",
          bio: "Excepteur shabby chic semiotics Marfa, quinoa try-hard polaroid pariatur banh mi selfies incididunt brunch trust fund. Ethical dolor PBR&B Tumblr.",
          bioVisible: false
        }
      ]
    },
    mounted: function() {

    },
    methods: {
      toggleBio: function(inputPerson) {
        inputPerson.bioVisible = !inputPerson.bioVisible;
      }
    },
    computed: {

    }
  });
});
