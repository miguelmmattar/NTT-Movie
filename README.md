# NTT-Movie

Uma SPA para pesquisar filmes por títulos.

## Como rodar

1. Clone este repositório na sua máquina

### Back-end
2. Abra a pasta /ntt-movie-back
3. Crie um arquivo .env seguindo as instruções do .env.example, como abaixo:
```bash
API_KEY=83c7b7d2 // esta é a minha chave, mas pode utilizar outra se preferir

PORT=4000 // pode utilizar a porta de sua preferência
``` 
4. Abra esta pasta no terminal e instale as dependências com o comando:
```bash
npm i
```
5. Para rodar em desenvolvimento, execute o script dev:
```bash
npm run dev
```

### Front-end
6. Abra a pasta /ntt-movie-front
7. Crie um arquivo .env seguindo as instruções do .env.example, como abaixo:
```bash
REACT_APP_BASE_URL=http://localhost:4000  // a porta deve ser a mesma do back
``` 
8. Abra esta pasta no terminal e instale as dependências com o comando:
```bash
npm i
```
9. Para rodar em desenvolvimento, execute:
```bash
npm start
```
