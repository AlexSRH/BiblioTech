# Alterar porta padrão da API

1. Vá na pasta `src` dentro de `backend` e abra o arquivo `core.ts`
2. Na função `start` mude o valor da variável `port` para a porta que voçê desejar:

```js
async function start() {
  const port = {coloque aqui a porta}

  await database.start()
  appExpress.start(port)
}
```

1. Você também precisa mudar a porta no frontend!! Então, volte para a raiz do projeto e entre nas pastas `frontend`, `src` e por fim `services`.

2. Abra o arquivo `api.ts` e edite a porta na propriedade `baseUrl` da api

```js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:{coloque aki a porta aqui}'
})

export default api
```
