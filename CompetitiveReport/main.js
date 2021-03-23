import renderMainPage from './Components/mainPage.js';

fetch('Assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
	// render HTML here

    renderMainPage(data);
    
});




