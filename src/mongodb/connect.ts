import mongoose from 'mongoose'

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.q8ln9bh.mongodb.net/?retryWrites=true&w=majority");
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }
}
dbConnection()
const userSchema = new mongoose.Schema({
    Nombres : String,
    Apellidos : String,
    num_documento : String,
    num_codigo_universidad : String,
    Fecha_nacimiento : String,
    Correo_institucional : String,
    Contrasena : String
})
const Usr = mongoose.model('usuario', userSchema)
const usr = new Usr({
    Nombres: 'felipe',
    Apellidos: 'felipe',
    num_documento: '1193442004',
    num_codigo_universidad: '261218236',
    Fecha_nacimiento: 'felipe',
    Correo_institucional: 'felipe',
    Contrasena: 'felipe'
});
usr.save().then((usr)=>{
  //console.log(usr)
}).catch((err)=>{
  console.log(err)
});