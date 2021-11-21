const initialState = {
    income : [],
    totalIncome: "",
    loadIncome: false,
    errorIncome: false,
    errorIncomeMsg: "",

    expense : [],
    totalExpense: "",
    loadExpense: false,
    errorExpense: false,
    errorExpenseMsg:"",

    history : [],
    loadHistory: false,
    errorHistory: false,
    errorHistoryMsg:""
    
}
const transactionReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "GET_INCOME_PENDING":
            return {...state, loadIncome : true}
        case "GET_INCOME_FULFILLED" : 
            return{ ...state, loadIncome: true, income: action.payload, totalIncome: action.total}
        case "GET_INCOME_REJECTED" :
            return {...state, loadIncome: false, errorIncome: true , errorIncomeMsg: action.payload }

        case "GET_EXPENSE_PENDING":
            return {...state, loadExpense : true}
        case "GET_EXPENSE_FULFILLED" : 
            return{ ...state, loadExpense: true, expense: action.payload, totalExpense: action.total}
        case "GET_EXPENSE_REJECTED" :
            return {...state, loadExpense: false, errorExpense: true , errorExpenseMsg: action.payload }


        case "GET_HISTORY_PENDING":
            return {...state, loadHistory : true}
        case "GET_HISTORY_FULFILLED" : 
            return{ ...state, loadHistory: true, history: action.payload}
        case "GET_HISTORY_REJECTED" :
            return {...state, loadHistory: false, errorHistory: true , errorHistoryMsg: action.payload }

        default:
            return state;
    }
}

export default transactionReducer
