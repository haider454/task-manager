require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate("5c8aeca0a1ca8f2893e68347", {
//     age: 1
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({
//         age: 1
//     })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age
    })
    const count = await User.countDocuments({
        age
    })
    return count
}

updateAgeAndCount('5c8aeb2c7339432878f0f3d9', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})