# send_me

Devolva, muitas vezes é uma das poucas coisas que a pessoa tem!
Mas vale 10 Iphones na mão do que 01 bloqueado!

Protótipo consiste em uma aplicação para cadastro e celulares perdidos, o aparelho poderá ser cadastrado e consultado em uma lista para que o dono entre em contato para combinar uma (fair_shipp)

1 - O backend etá sendo desenvolvido em nodejs:
Atualmente conta com as rotas
GET: localhost:3000/cell (visualizar todos os aparelhos cadastrados)
POST: localhost:3000/cell/add (adicionar aparelho)

### Para adicionar aparelho é necessário encaminhar uma request do tipo POST com o seguinte corpo:

json ={
"brand": "Asus",
"model": "Zenfone 5 MAX",
"color": "Blue",
"details": "Broken screen",
"photos": "path-string",
"fair_shipp": 500
}

Obs: para testes no postman precisa enviar através de POST/form-data para incluir a foto como valor da chave!
