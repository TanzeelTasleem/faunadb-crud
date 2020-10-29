
const faunadb = require("faunadb")
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({
        secret: "fnAD5PYjo4ACBx7Np3GxwRl1IpdqWUKZPbtIocFI"
    })
    try {
        const result = await client.query(
            q.CreateIndex(
                {
                    name : "todos_by_title",
                    source : q.Collection("todos"),
                    terms : [{field : ['data','title'] }]
                }
            )
        )
        console.log(result)
    } catch (err) {
        console.log("error", err.message)
    }
})()
