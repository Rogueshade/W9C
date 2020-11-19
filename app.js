

var tweets =[
    {
        tweet: "tweet 1",
        username: "Kevin",
        age: 40,
        created_at: "07-19-2020"
    },
    {
        tweet: "tweet 2",
        username: "Miranda",
        age: 35,
        created_at: "10-19-2020" 
    },
    {
        tweet: "tweet 3",
        username: "Emma",
        age: 40,
        created_at: "09-11-2020"
    },
    {
        tweet: "tweet 4",
        username: "Todd",
        age: 36,
        created_at: "06-01-2020"
    },
    {
        tweet: "tweet 5",
        username: "Samantha",
        age: 29,
        created_at: "10-19-2020"
    },
    {
        tweet: "tweet 6",
        username: "Joshua",
        age: 10,
        created_at: "11-1-2020"
    },
    {
        tweet: "tweet 7",
        username: "Chantelle",
        age: 30,
        created_at: "02-26-2020"
    },
    {
        tweet: "tweet 8",
        username: "Amanda",
        age: 38,
        created_at: "08-20-2020"
    },
    {
        tweet: "tweet 9",
        username: "",
        age: 48,
        created_at: "11-13-2020"
    },
    {
        tweet: "tweet 10",
        username: "Lisa",
        age: 49,
        created_at: "05-31-2020"
    }
];

for (var index = 0; index < tweets.length; index++) {
    console.log(tweets[index].tweet);
    console.log(tweets[index].username);
    console.log(tweets[index].created_at);
    console.log("------------------------");
}