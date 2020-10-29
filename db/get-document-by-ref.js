
const faunadb = require("faunadb")
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({
        secret: "fnAD5PYjo4ACBx7Np3GxwRl1IpdqWUKZPbtIocFI"
    })
    try {
        const result = await client.query(
            q.Get(
                q.Ref(
                    q.Collection('todos') ,'280621073814258181'
                ))
        )
        console.log(result)
    } catch (err) {
        console.log("error", err.message)
    }
})()
