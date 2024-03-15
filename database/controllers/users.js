const { Users, Profiles } = require('../db')
const users = {}

async function create(user_name, name, pass){
    const user = await Users.create({ 
        user_name: user_name,
        name: name,
        pass: pass
     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}


async function findAll(){
    const user = await Users.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function findOneById(id){
    const user = await Users.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user 
}

async function findOneByUserName(user_name){
    const user = await Users.findOne({ where: { user_name: user_name } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function update(id, user_name, name){
    const user = await Users.update({ user_name: user_name, name: name }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function destroy(id){
    const user = await Users.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function login(user_name, pass) {
    try {
        // Buscar el usuario en la base de datos
        const user = await Users.findOne({ where: { user_name: user_name } });

        if (!user) {
            throw new Error('Invalid user or password');
        }

        // Verificar si la contraseña es correcta
        const isValidPassword = user.pass === pass;

        if (!isValidPassword) {
            throw new Error('Invalid user or password');
        }

        // Retornar el usuario si la autenticación fue exitosa
        return { 'code': 1, 'data': user };
    } catch (error) {
        // Manejar cualquier error que pueda ocurrir durante la autenticación
        return { 'code': 0, 'data': error.message };
    }
}

async function loginId(id, pass) {
    try {
        // Buscar el usuario en la base de datos
        const user = await Users.findOne({ where: { id: id } });
        

        if (!user) {
            throw new Error('Invalid user or password');
        }

        // Verificar si la contraseña es correcta
        const isValidPassword = user.pass === pass;

        if (!isValidPassword) {
            throw new Error('Invalid user or password');
        }

        // Retornar el usuario si la autenticación fue exitosa
        return { 'code': 1, 'data': user };
    } catch (error) {
        // Manejar cualquier error que pueda ocurrir durante la autenticación
        return { 'code': 0, 'data': error.message };
    }
}


async function updatePass(id, pass, newPass) {
    try {
        // Realizar la autenticación del usuario
        const loginResult = await loginId(id, pass);
        
        // Verificar si la autenticación fue exitosa
        if (loginResult.code !== 1) {
            return { 'code': 0, 'data': 'Invalid user or password' };
        }

        // Actualizar la contraseña del usuario
        const user = await Users.update({ pass: newPass }, { where: { id: id } });

        if (user[0] === 1) {
            // La contraseña se actualizó correctamente
            return { 'code': 1, 'data': 'Password updated successfully' };
        } else {
            // No se pudo actualizar la contraseña
            throw new Error('Failed to update password');
        }
    } catch (error) {
        // Manejar cualquier error que pueda ocurrir durante el proceso
        return { 'code': 0, 'data': error.message };
    }
}




users.create = create
users.findAll = findAll
users.findOneById = findOneById
users.findOneByUserName = findOneByUserName
users.update = update
users.destroy = destroy
users.login = login
users.updatePass = updatePass





module.exports = users