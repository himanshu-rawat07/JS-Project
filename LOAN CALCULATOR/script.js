document.getElementById('calculateBtn').addEventListener('click',calculateloan);
function calculateloan(){
    const loanAmount=parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate=parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm=parseFloat(document.getElementById("loanTermtInput").value);
    if(isNaN(loanAmount)||isNaN(interestRate)|| isNaN(loanTerm)){
        alert("please Enter valid numbers for all the Fields");


    }
    const monthlyInterest=interestRate/100/12;
    const totalPayments=loanTerm;
    const monthlyPayment=(loanAmount* monthlyInterest)/(1-Math.pow(1+monthlyInterest, -totalPayments));
    const totalInterest=(monthlyPayment * totalPayments)-loanAmount;



    displayResult(monthlyPayment, totalInterest);

}
function displayResult(monthlyPayment, totalInterest){
    const resultDiv=document.getElementById('result');
    resultDiv.innerHTML=`
    <p><strong>Payment:${monthlyPayment.toFixed(2)}</p></strong>
    <p><strong>Total Interest:${totalInterest.toFixed(2)}</p></strong>
    
    `;
}