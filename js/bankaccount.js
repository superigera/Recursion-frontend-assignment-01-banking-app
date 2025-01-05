export class BankAccount{
    maxWithdrawPercent = 0.2;

    constructor(firstName, lastName, email, type, accountNumber, money){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
        this.accountNumber = accountNumber;
        this.money = money;
        this.initialDeposit = money;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }

    calculateWithdrawAmount(amount){
        let maxWithdrawAmount = Math.floor(this.money * this.maxWithdrawPercent);
        amount = amount > maxWithdrawAmount ? maxWithdrawAmount : amount;
        return amount;
    }

    withdraw(amount){
        this.money -= this.calculateWithdrawAmount(amount);
        return this.money;
    }
    
    deposit(amount){
        this.money += amount;
        return amount;
    }

    // 利子の計算
    simulateTimePassage(days){
        let daysPerYear = 365;
        let profit = (this.money * Math.pow(1 + this.annualInterestRate, days/daysPerYear)) - this.money;
        // 残高に反映
        this.money += profit;
        return profit;
    }
}