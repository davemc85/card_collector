document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector("#new-item-form");
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const cardListItem = createCardListItem(event.target);
  const cardList = document.querySelector('#card-list');
  cardList.appendChild(cardListItem);

  event.target.reset();
};

const createCardListItem = function (form) {
  const cardListItem = document.createElement('li');
  cardListItem.classList.add('card-list-item');

  const name = document.createElement('h3');
  name.textContent = `Player Name: ${form.name.value}`;
  cardListItem.appendChild(name);

  const team_name = document.createElement('h4');
  team_name.textContent = `Team Name: ${form.team_name.value}`;
  cardListItem.appendChild(team_name);

  const match_date = document.createElement('h4');
  match_date.textContent = `Match Date: ${form.match_date.value}`;
  cardListItem.appendChild(match_date);

  const opponent = document.createElement('h4');
  opponent.textContent = `Opponent: ${form.opponent.value}`;
  cardListItem.appendChild(opponent);

  const card_colour = document.createElement('h4');
  card_colour.textContent = form.card_colour.value;
  if (form.card_colour.value == 'Yellow Card'){
    card_colour.classList.add('cardColourYellow');}
  else
    {card_colour.classList.add('cardColourRed');
  };
  cardListItem.appendChild(card_colour);

  return cardListItem;


  newItemform.addEventListener('submit', handleNewItemFormSubmit);



}
const handleDeleteAllClick = function(event) {
  const cardList = document.querySelector('#card-list');
  cardList.innerHTML = '';
}




// d
//   const itemGrab = event.target.ingredient.value;
//   const quantityGrab = event.target.quantity.value;
//   const measurementGrab = event.target.measurement.value;
//   const preparationGrab = event.target.preparation.value;
//   targetDiv = document.querySelector('#recipe-list')
//   const newDiv = document.createElement("li");
//   newDiv.innerHTML = `<h3>${quantityGrab} ${measurementGrab} ${itemGrab} ${preparationGrab}</h3>`;
//   newDiv.className = "recipe-list-item";
//   targetDiv.appendChild(newDiv);
//   form.reset();
