
const faunadb = require("faunadb")
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({
        secret: "fnAD5PYjo4ACBx7Np3GxwRl1IpdqWUKZPbtIocFI"
    })
    try {
        const result = await client.query(
            q.Create(
                q.Collection('todos'),
                {data : {title : "new document"}}
            )
        )
        console.log(result)
    } catch (err) {
        console.log("error", err.message)
    }
})()
