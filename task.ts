import { Date1 } from './date';
import { Priority } from './Priority'; 
export module Task{
export class Task{

    public _content : string;
    public _date : Date1.Date1;  
    public _priority : Priority;
    public _checked : boolean = false; 

    constructor( content:string, date:Date1.Date1, priority:Priority, checked:boolean){
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
    }

     get content (): string{
        return this._content;
    }

    get date (): Date1.Date1{
        return this._date;
    }

    get priority (): Priority{
        return this._priority;
    }

    get checked (): boolean{
        return this._checked;
    }

    set content (content:string){
            this._content=content;
    }

    set date (date:Date1.Date1){
        this._date=date;
    }

    set priority (priority:Priority){
        this._priority=priority;
    }

    set checked (checked:boolean){
        this._checked=checked;
    }


 add ( content:string, date:Date, priority:Priority ) : number{
    let id : number = Math.random()*58;
    return id; 
} 

 update ( content?:string, date?:Date1.Date1, priority?:Priority,checked?:boolean ){
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
}

 close (checked:boolean) : boolean{
    return true;
}

 toString () : string {
                let tache : string = " CONTENU : " +this._content+ "\n DATE : " +this._date+ "\n PRIORITE : " +this._priority+ "\n ETAT : " +this._checked ;
        return tache; 

}

}
}