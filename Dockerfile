# imagem base
FROM node:20

# instala o nodemon para o servidor atualizar sozinho sem precisar reiniciar 
RUN npm install -g nodemon

# cria o diretorio da aplicacao no conteiner
WORKDIR /app

# copia o package.json e package-lock.json 
COPY package*.json ./

# instala as dependecias do projeto 
RUN npm install

# copia todo o resto do codigo 
COPY . .

# expoe a porta que a aplicacao vai usar
EXPOSE 3000

# roda a aplicacao 
CMD ["npm", "run", "dev"]