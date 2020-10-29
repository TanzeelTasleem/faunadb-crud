
const faunadb = require("faunadb")
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({
        secret: "fnAD5PYjo4ACBx7Np3GxwRl1IpdqWUKZPbtIocFI"
    })
    try {
        const result = await client.query(
            q.Update(
                q.Ref(q.Collection('todos'), "280621699889629701"),
                 {data : {title : "updated todo"}}
            )
        )
        console.log(result)
    } catch (err) {
        console.log("error", err.message)
    }
})()
