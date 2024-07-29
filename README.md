# Tienda la bruja store

Backend creado para la tienda version de api

# Instaladores
npm init -y
npm i express dotenv mongoose cors morgan multer bcryptjs jsonwebtoken
npm i -D nodemon
npm init @eslint/config@latest

# Agrega en scrip dentro del package.json
"start": "node ./src/server.js",
"dev": "nodemon ./src/server.js",

# La arquitectura utilizada es clean
domain (domain)
application (application, domain)
infrastucture (infrastucture, application, domain)

# cambiar en slint.config.mjs
cambia de browser a node


