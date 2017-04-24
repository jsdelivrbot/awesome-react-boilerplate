const config = {
    sql : {
        db:'seq',
        user:'root',
        pass:''
    },
    mongo: {
        dbUrl:'mongodb://127.0.0.1:27017/db'
    },
    useMongo:false,
    useSql: true,
    JWT_SECRET:"OFIRISTHEBEST"
}

module.exports = config;