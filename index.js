import inquirer from 'inquirer';
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
})


const menuPrompt = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['Search actors', 'Add an actor', 'Update an actor', 'Exit']
        }
    ])
    console.log(answers)
    if (answers.action === 'Search actors'){
        searchActors()
    } else if (answers.action === 'Add an actor'){
        addActor()
    } else if (answers.action === 'Update an actor'){
        updateActor()
    } else {
        process.exit(0)
    }
}

menuPrompt()



//custom promise
// const myQuery = (sql) => {
//     return new Promise((resolve, reject) => {
//         connection.query(sql, function(error, results) {
//             if (error) {
//                 reject(error)
//             }
//             resolve(results)
//         })

//     })
// }

// class FuncOb{
//     constructor(fn){
//         this.fn = fn;
//         this.fn(this.resolve,this.reject)

//     }
//     resolve(val){
//         console.log(val+"validated")

//     }
//     reject(val){
//         console.log(val+"rejected")
//     }
// }

// const myFuncOb = new FuncOb(function(resolve, reject){

//     resolve();

// })



// function myQuery(sql) {
//     return new Promise(function(resolve, reject) {
//         connection.query(sql, function(error, results) {
//             if (error) {
//                 reject(error)
//             }
//             resolve(results)
//         })

//     })
// }

// const init = async () => {
//     // await myQuery(`UPDATE actor SET last_name = "BBBBBB" WHERE actor_id = 193;`)

//     // const results = await myQuery("SELECT * FROM actor WHERE actor_id = 193;")

//     console.log(results)
// }

// init()




// connection.query(`UPDATE actor SET last_name = "Bigboi" WHERE actor_id = 193;`, function(error, results){
//     if(error) throw new Error(error);


//})

