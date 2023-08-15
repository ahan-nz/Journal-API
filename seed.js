import { EntryModel, CategoryModel, dbClose } from './db.js'

const categories = [
    { name: 'Food' },
    { name: 'Gaming' },
    { name: 'Coding' },
    { name: 'Other'}
]

await CategoryModel.deleteMany()
const cats = await CategoryModel.insertMany(categories)

const entries = [
    { category: cats[0], content: "Pizza is yummy!" },
    { category: cats[1], content: "Coding is fun!" },
    { category: cats[2], content: "Skyrim is for the Nords." }
]

await EntryModel.deleteMany()
await EntryModel.insertMany(entries)

dbClose()