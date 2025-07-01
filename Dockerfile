#Se urara Node 20 (para reducir el tamaño de la imagen se uso alpine)
FROM node:20-alpine

#Directorio de trabajo
WORKDIR /app

#Copiar arhivos del package.json e instalar dependencias
COPY package*.json ./
RUN npm install

#Coiar el resto del código
COPY . .

#Exponer puerto (El puerto puede cambiar a tu preferencia)
EXPOSE 3000

#Inicio del servidor
CMD ["npm", "start"]