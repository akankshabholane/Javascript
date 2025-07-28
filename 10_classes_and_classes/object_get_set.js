const User = {
    _email : 'akanksha@gmail.com',
    _password : "abc",


    get email(){
        return this._email.toUpperCase()
    },  // even if email is private it will be accessed but this objects instance


    set email(value){
        this._email = value

    }
}

const tea = Object.create(User)            //factory funciton
console.log(tea.email);
