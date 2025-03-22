let lista = [];

function adicionar(){
    var list = document.querySelector('.input').value;
    lista.push(list);
    console.log(lista);
    var todo = document.querySelector('.todo');
    todo.innerHTML = '';
    
    for (let i = 0; i < lista.length; i++){
        const valores = lista[i];

        let divisao = document.createElement('div');

        divisao.classList.add('caixa');
        todo.appendChild(divisao);

        let item = document.createElement('p');

        item.classList.add('item');
        item.innerHTML = valores;

        divisao.appendChild(item);
        document.querySelector('.input').value = '';

        let lixeira = document.createElement('button');

        lixeira.classList.add('limpa');
        lixeira.innerHTML = `excluir`;
        divisao.appendChild(lixeira);

        lixeira.addEventListener('click', function() {
    
            divisao.remove();
            
            lista.splice(i, 1);
            console.log(lista);
        });

        
    };
};



function limpar(){
    lista = [];
    document.querySelector('.todo').innerHTML = '';
};