const mongoose = require("mongoose");

const ExpenseSchema = mongoose.Schema(
    {
        name : {type:String},
        income : {type:Number},
        spend : {type:Number},
        saving : {type:Number}
    },
    {
        collection: 'expense',
        timestamps: {
            createdAt : 'created_at',
            updatedAt : 'updated_at'
        },
        toObject: {
            virtuals : true
        },
        toJSON: {
            virtuals : true
        }
    }
);

module.exports = mongoose.model('Expense', ExpenseSchema);