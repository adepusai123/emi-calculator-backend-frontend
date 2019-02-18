import { ExcelFormulas } from "../../utility/excel_formulas";

export default class WelcomeService {
    constructor(){}
    static welcome(){
        return 'Hello World !';
    }
    calculateEMI(rate, nper, pv){
        return new Promise((resolve)=>{
            rate = rate/1200;
            let EMI = ExcelFormulas.PMT(rate, nper, pv);
            resolve(EMI);
        });
    }
    generateEmiTable(rate, nper, pv, emi){
        return new Promise((resolve)=>{
            let tble=[], remain_pv =pv;
            for(let i=1; i<=nper; i++){
                let record ={
                    remain_pv:0, 
                    repayment:-Number(emi.toFixed(2)), 
                    interest:0, 
                    paid_pv: 0
                }
                record['interest'] = Number((remain_pv * (rate/1200)).toFixed(2));
                record['paid_pv'] = Number((record['repayment'] - record['interest']).toFixed(2));
                record['remain_pv'] = Number((remain_pv - record['paid_pv']).toFixed(2));
                remain_pv = Number(record['remain_pv'].toFixed(2));
                tble.push(record)
            };
            resolve(tble);
        });
    }
}

/* 
Interest = Remain Pv * (ROI/12)
paid principle = Remain Pv - Interest;
Remain Principle = pv - paid principle;
[{remain_pv:'', repayment:emi, interest:ir, paid_pv: ''}]
*/