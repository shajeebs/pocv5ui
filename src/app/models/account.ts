export interface Account{
    AccountClassId:string,
    ParentAccountId:string,
    DrOrCrSide:number,
    CompanyId:string,
    AccountCode:string,
    AccountName:string,
    Description:string,
    IsCash:boolean,
    IsContraAccount:boolean,
}