function search() {
   let towns = Array.from(document.getElementById('towns').children);
    let searchedText = document.getElementById('searchText').value;
    let matchesFound = 0;

   for (let town of towns) {
       if (town.textContent.includes(searchedText) && searchedText !== '') {
           town.style.fontWeight = 'bold';
           town.style.textDecoration = 'underline';
           matchesFound++;
       } else {
           town.style.fontWeight = '';
           town.style.textDecoration = 'none';
       }
   }
   
   document.getElementById('result').textContent = `${matchesFound} matches found`;
}

