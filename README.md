# Tienda la bruja store

Backend creado para la tienda version de api

# Instaladores
npm init -y
npm i express dotenv mongoose cors morgan multer bcryptjs jsonwebtoken express-validator
npm i -D nodemon
npm init @eslint/config@latest

# Seleccionar en mi eslint
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · commonjs
√ Which framework does your project use? · none
√ Does your project use TypeScript? · javascript
√ Where does your code run? · browser

# Agrega en scrip dentro del package.json
"start": "node ./src/server.js",
"dev": "nodemon ./src/server.js",

# La arquitectura utilizada es clean
domain (domain)
application (application, domain)
infrastucture (infrastucture, application, domain)

# cambiar en slint.config.mjs
cambia de browser a node


