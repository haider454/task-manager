require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete("5c8ecf0854ae615416631c93").then((task) => {
//     console.log(task)
//     return Task.countDocuments({
//         completed: false
//     })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    return await Task.countDocuments({
        completed: false
    })
}

deleteTaskAndCount('5c8ecf0054ae615416631c92').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})