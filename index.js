normal_button = document.getElementsByClassName("normal_button")[0]

normal_button.addEventListener("click", function () {
  card_pidgey = document.getElementsByClassName("card_pidgey")[0];

  card_pidgey.hidden = false;
  card_charmander.hidden = true;
  card_squirtle.hidden = true;
});

fire_button = document.getElementsByClassName("fire_button") [0]

fire_button.addEventListener("click", function() {
    card_charmander = document.getElementsByClassName("card_charmander")[0];

  card_charmander.hidden = false;
  card_pidgey.hidden = true;
  card_squirtle.hidden = true;
})

water_button = document.getElementsByClassName("water_button") [0]

water_button.addEventListener("click", function() {
    card_squirtle = document.getElementsByClassName("card_squirtle")[0];

  card_charmander.hidden = true;
  card_pidgey.hidden = true;
  card_squirtle.hidden = false;
})

seeall_button = document.getElementsByClassName("seeall_button") [0]

seeall_button.addEventListener("click", function() {
    card_squirtle = document.getElementsByClassName("card_squirtle")[0];
    card_squirtle = document.getElementsByClassName("card_squirtle")[0];
    card_pidgey = document.getElementsByClassName("card_pidgey")[0];



  card_charmander.hidden = false;
  card_pidgey.hidden = false;
  card_squirtle.hidden = false;
})

seeall_button = document.getElementsByClassName("seeall_button") [0]

seeall_button.addEventListener("mouseover", function() {
    var first = seeall_button.classList.add("seeall_button_red")
})
seeall_button.addEventListener("mouseleave", function() {
    var first = seeall_button.classList.remove("seeall_button_red")
})
