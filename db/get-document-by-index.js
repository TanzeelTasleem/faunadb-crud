
const faunadb = require("faunadb")
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({
        secret: "fnAD5PYjo4ACBx7Np3GxwRl1IpdqWUKZPbtIocFI"
    })
    try {
        const result = await client.query(
            q.Get(
                q.Match(q.Index("todos_by_title") , "document is created")
            )
        )
        console.log(result)
    } catch (err) {
        console.log("error", err.message)
    }
})()
