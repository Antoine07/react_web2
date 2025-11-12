
const user = {
    name: "Alice",
    settings: {
      theme: "light",
      shortcuts: ["ctrl+s", "ctrl+p"]
    }
  }

const newUser = { ...user }

newUser.settings.shortcuts.push("ctrl+x")

console.log(user)
console.log(newUser)

// deep copy
const newNewUser = {
    ...user,
    settings : {
        ...user.settings,
        shortcuts : [
            ...user.settings.shortcuts
        ]
    }
}

newNewUser.settings.shortcuts.push("ctrl+l")
console.log(user)
console.log(newUser)
console.log(newNewUser)
