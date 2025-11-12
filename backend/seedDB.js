/* node seedDB.js para generar los datos iniciales en la base de datos */

const db = require('./database/models');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

async function seedDB() {
  //USERS
  try {
    const users = [
      {
        id: uuidv4(),
        name: "Admin",
        lastname: "Admin",
        email: "admin@gmail.com",
        profile: "avatar-1757550618552.jpg",
        rol: "admin",
        password: bcrypt.hashSync("1234", 12)
      },
      {
        id: uuidv4(),
        name: "NoAdmin",
        lastname: "NoAdmin",
        email: "noadmin@gmail.com", 
        profile: "avatar-1757550786618.jpg",
        rol: "user",
        password: bcrypt.hashSync("1234", 12)
      }
    ];

    for (const user of users) {
      const existingUser = await db.User.findOne({ 
        where: { email: user.email } 
      });
      
      if (!existingUser) {
        await db.User.create(user);
        console.log(`Usuario ${user.name} creado`);
      } else {
        console.log(`Usuario ${user.name} ya existe`);
      }
    }

    console.log('Proceso de seed usuarios completado!');
  } catch (error) {
    console.error('Error creando usuarios:', error);
  }

  // COLORS
  try {
    const colors = [
      { id: 1, name: "Rojo", code: "red" },
      { id: 2, name: "Azul", code: "blue" },
      { id: 3, name: "Verde", code: "green" },
      { id: 4, name: "Amarillo", code: "yellow" },
      { id: 5, name: "Negro", code: "black" },
      { id: 6, name: "Blanco", code: "white" },
      { id: 7, name: "Violeta", code: "violet" },
      { id: 8, name: "Naranja", code: "orange" },
      { id: 9, name: "Gris", code: "gray" },
      { id: 10, name: "Marrón", code: "brown" },
      { id: 11, name: "Rosa", code: "pink" },
      { id: 12, name: "Celeste", code: "lightblue" },
    ];

    for (const color of colors) {
      const existingColor = await db.Color.findOne({
        where: { id: color.id }
      });

      if (!existingColor) {
        await db.Color.create(color);
        console.log(`Color ${color.name} creado`);
      } else {
        console.log(`Color ${color.name} ya existe`);
      }
    }

    console.log('Proceso de seed colores completado!');
  } catch (error) {
    console.error('Error creando colores:', error);
  }

  // CATEGORIES
  try {
    const categories = [
      { id: 1, name: "Ropa" },
      { id: 2, name: "Accesorios" },
      { id: 3, name: "Stickers" },
    ];
    for (const category of categories) {
      const existingCategory = await db.Category.findOne({
        where: { id: category.id }
      });
      if (!existingCategory) {
        await db.Category.create(category);
        console.log(`Categoría ${category.name} creada`);
      } else {
        console.log(`Categoría ${category.name} ya existe`);
      }
    }

  } catch (error) {
    console.error('Error creando categorías:', error);
  }

  process.exit()
}


seedDB();