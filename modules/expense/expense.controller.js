const ExpenseModel = require("./expense.model");

class Expense{
    constructor(){}

    create(payload){
        return ExpenseModel.create(payload);
    }

    async list(){
        return await ExpenseModel.find();
    }

    async getbyID(id){
        return await ExpenseModel.findOne({_id:id});
    }

    async save(income,spend){
        return await income-spend;
    }
}

module.exports = new Expense();