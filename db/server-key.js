
const faunadb = require("faunadb")
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({
        secret: "fnAD5PU7l6ACBuDiTCvPBFJQOglpuWC4juQ1VSQn"
    })
    try {
        const result = await client.query(
            q.CreateKey({
                database: q.Database("todo-app"),
                role: "server",
            }))
        console.log(result)
    } catch (err) {
        console.log("error", err.message)
    }
})()
