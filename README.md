Pra rodar esta atividade, basta rodar "docker-compose up" para criar os dois containers, do front e do json-server.

o primeiro container criado com o arquivo docker-compose.yml, app, é contruído a partir da imagem montada com o Dockerfile do repositório.

o segundo container é criado a partir de uma imagem obtida no dockerhub, "clue/json-server". Foi lida a documentação da imagem para utilizá-la de forma correta.
Por exemplo, a porta que a imagem expoê o container é a 80, e o endereço para o volume interno do container, que contêm o arquivo .json pro json-server é /data/db.json.

Utilizadas essas informações, e criando uma rede, também no docker-compose.yml, conseguimos rodar os dois containers e fazer eles se comunicarem entre si.
