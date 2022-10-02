// hacer conexion a mongo con mongoose
import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.q8ln9bh.mongodb.net/?retryWrites=true&w=majority");
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }
}
dbConnection();
// enviar datos a una coleccion
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);
const user = new User({
    name: 'Juan',
    email: 'juanlov@gmail.com',
    password: '123456'
});
user.save().then((user) => {
    console.log(user);
}
).catch((err) => {
    console.log(err);
}
);