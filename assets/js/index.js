
let people = [
    {
        name: 'Fernando Henrique Caversan Santos Duro',
        tel: '149999999',
        xp: true
    },
    //isto é um objeto
    {
        name: 'Anderson Arcenio Matos da Costa',
        tel: '14999393',
        xp: true
    },
    {
        name: 'Joao Marcos',
        tel: '140004043',
        xp: false
    },
];
//isto é um array de objetos
    
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
                        <button onclick="people.splice(${person}, 1); drawTable();"> Excluir </button>
                    </td>
                </tr>`; 
    };
};

drawTable();