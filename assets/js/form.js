function formTest(e){
    e.preventDefault();
    
    //teste do campo telefone

   /*  for (i in e.target.elements['phone'].value){
            if ('0123456789'.indexOf(e.target.elements['phone'].value[i]) == -1){
                alert('Apenas números são permitidos no campo telefone!');
                return false
            }
    } */

    var phonePattern = /[^0-9-() ]+/g;
    //expressao regular que checa se existe algo alem de numeros

    if (phonePattern.test(e.target.elements['phone'].value)){
        
        alert('Apenas números são permitidos no campo telefone!');
        return false

    }

    //faz duplo teste (se existem elementos alem de numeros (espaco e parenteses) e se o numero esta no tamanho correto)
    if (e.target.elements['phone'].value.replace(/[-() ]/g, '').length < 11){
        alert('Número inválido!');
        return false
    }

    var peopleRaw = localStorage.getItem('people');

    if(peopleRaw != null){
        var people = JSON.parse(peopleRaw);
    }else{
        var people = [];
    }

    if (id !== null){
        people[id] = {
            name: e.target.elements['name'].value,
            tel: e.target.elements['phone'].value,
            xp: (e.target.elements['xp'].value == 'true'),
            
        }

    }else{
        people.push({
            name: e.target.elements['name'].value,
            tel: e.target.elements['phone'].value,
            xp: (e.target.elements['xp'].value == 'true'),
            //e = element,  target = o objeto element, elements = os itens do objeto, value = o valor armazenado,
        });
    
        
    };

    localStorage.setItem('people', JSON.stringify(people));
    
    document.getElementById("goHome").click(); //seleciona o elemento pela id e direciona para goHome ao clicar
        

    //Salvando conteúdo no localStorage, apos validacao

}

var urlPrincipal = new URL(window.location.href);
//urlPrincipal guarda a pagina atual (funcao window.location.href)

var id = urlPrincipal.searchParams.get('person'); 
//guarda em id os parametros (searchParams), neste caso de 'person' da pagina atual
if (id !== null){
    //verifica se id não é nulo (validacao)
    var peopleRaw = localStorage.getItem('people');

    if(peopleRaw != null){
        var people = JSON.parse(peopleRaw);
    }else{
        var people = [];
    }

    document.getElementById('name').value = people[id].name;
    document.getElementById('phone').value = people[id].tel;
    if (people[id].xp) {
        document.getElementById('xp-yes').checked = true;
    }else{
        document.getElementById('xp-no').checked = true;
    }
    
}

function phoneFieldTest(e){
    e.preventDefault();
    
    if (e.target.value.length === 0){
        e.target.value += '(';
    }

    if (e.target.value.length === 3){
        e.target.value += ')';
    }

    if (e.target.value.length === 5){
        e.target.value += ' ';
    }

    if (e.target.value.length === 10){
        e.target.value += '-';
    }

    if ((/[0-9]/g).test(e.key) && e.target.value.length < 15) {
        //testa se o usuario inseriu somente numeros e se o total de caracteres eh menor que 15
        e.target.value += e.key;
    }
}