const db = require('../database/sqlite');
const User = require('../models/user.model');
class UsersRepository {
 async findById(id) {
 const row = await db.get('SELECT id, username, created_at FROM users WHERE id = ?', [id]);
 return row ? User.fromDB(row) : null;
 }
 async findByUsername(username) {
 const row = await db.get('SELECT id, username, email, name, password_hash, created_at FROM users WHERE username = ?', [username]);
 return row || null;
 }
 async create({ username, email, name, passwordHash }) {
 const result = await db.run('INSERT INTO users (username, email, name, password_hash) VALUES (?, ?, ?, ?)', [username, email, name, passwordHash]);
 console.log(result);
 const row = await db.get('SELECT id, username, email, name, created_at FROM users WHERE id = ?', [result.lastInsertRowid]);
 return { ...row, password_hash: passwordHash };
 }
}
module.exports = UsersRepository;