var peopleRaw = localStorage.getItem('people');

if(peopleRaw != null){
    var people = JSON.parse(peopleRaw);
}else{
    var people = [];
}
    
function drawTable(){
    
    currentLines = [...document.querySelectorAll('table.lista tbody .dynamic-content')];
    currentLines.forEach((element) => {
        element.remove();
    })
    
    for (person in people) {
   
        document.querySelector('table.lista tbody').innerHTML += `
                <tr class="dynamic-content" style="background-color: ${ ((person % 2 === 0 ) ? '#fff' : '#eee') }">
                    <td>
                        ${people[person].name}
                    </td>
                    <td>
                        ${people[person].tel}
                    </td>
                    <td>
                        ${ (people[person].xp ? '<strong style="color:green">Sim</strong>' : '<strong style="color:red">Não</strong>')}
                    </td>
                    <td>
                        <button onclick="deleteUser(${person})"> Excluir </button>
                    </td>
                </tr>`; 

    };
};


function deleteUser(p){
    people.splice(p, 1); 
    drawTable();
    localStorage.setItem('people', JSON.stringify(people))
}

drawTable();