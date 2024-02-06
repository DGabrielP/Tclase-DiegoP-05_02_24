'use strict'

class User {
    constructor(username, password, email){

    this.username = username,
    this.password = password,
    this.email = email
    };

    login (username, password) {
        //validar el usuario y contraseña
        if (username === this.username && password == this.password ){
            alert("Wilcomen")
        } else {
            alert("Usuario o cotraseña incorrecta")
        }
    }
    //resetear contraseña 
    resetpassword(newpassword){
        this.password = newpassword
    }
    //resetear correo
    resetemail(newemail){
        this.email = newemail
    }
    Showinfo(){
        alert(`Usuario: ${this.username}, Contraseña: ${this.password}, email: ${this.email}`)
    }

}
//Instanciar
let user = new User("Gabrielux", "1234", "dg@yolo.com");

user.login("Gabrielux","1234");
user.resetpassword("5678");
user.login("Gabrielux","5678");
user.resetemail("dd@yolo.com");
user.Showinfo()


class Product{
    constructor(description, price, stock){
        this.description = description,
        this.price =price,
        this.stock = stock
    }
    Showinfo(){
        alert(`descripcion: ${this.description}, price: ${this.price}, stock: ${this.stock}`)
    }
    minusstock(sold){
        this.stock -= sold
    }
    incrementstock(newstock){
        this.stock += newstock
    }
    udatePrice(newprice){
        this.price = newprice
    }
}

let product = new Product("FerrariBerlineta", 250000, 5);

product.Showinfo();
product.minusstock(2);
product.incrementstock(5);
product.udatePrice(270000);
product.Showinfo();
