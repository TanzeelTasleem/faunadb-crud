require("dotenv").config()


const faunadb = require("faunadb")
const q = faunadb.query;
  (async () => {
        const client = new faunadb.Client({
            secret: "fnAD5PU7l6ACBuDiTCvPBFJQOglpuWC4juQ1VSQn",
        })
        try {
            const result = await client.query(q.CreateDatabase({ name: "todo-app" }))
            console.log(result)
        } catch (err) {
            console.log("error",err.message)
        }
    })()
