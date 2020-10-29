
const faunadb = require("faunadb")
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({
        secret: "fnAD5PYjo4ACBx7Np3GxwRl1IpdqWUKZPbtIocFI"
    })
    try {
        const result = await client.query(
            q.Map(
                [
                    'My cat and other marvels',
                    'Pondering during a commute',
                    'Deep meanings in a latte',
                  ],
                  q.Lambda(
                      'todo_title',
                      q.Create(
                          q.Collection('todos'),
                          {data :{title : q.Var('todo_title')}}
                      )
                  )
            )
        )
        console.log(result)
    } catch (err) {
        console.log("error", err.message)
    }
})()
