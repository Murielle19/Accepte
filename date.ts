export module Date1 {
export class Date1 {
ye:number;
mo:number;
da:number;

constructor( ye:number,mo:number ,da:number){
	this.ye=ye;
	this.mo=mo;
	this.da=da;
}
 get year():number{
	return this.ye;
}

get month() :number{
	return this.mo;
}

get day ():number{
	return this.da;
}

set year(new_year:number) {
	this.ye=new_year;
}
set month(new_month:number){
	this.mo=new_month;
}
set day(new_day:number){
	this.da=new_day;
}
	
toString():string{
	return this.ye+'-'+this.mo+'-'+this.da;
}
create(n_year:number,n_month:number,n_day:number):string{
		return n_year+'-'+n_month+'-'+n_day;
}
setdate(new_year:number,new_month:number,new_day:number):string{
	  this.ye=new_year;
	  this.mo=new_month;
	  this.da=new_day;
	return  new_year+'-'+new_month+'-'+new_day;
}
yesterday():string{
	let day=this.da,mon=this.mo,yea=this.ye;
	toString();
	
	if (this.da-1==0  || this.mo-1==0)
	{
		
		if(mon==4|| mon==6||mon==9||mon==11)
		{
			this.da=30;
		}
		else if (mon==1||mon==3||mon==5||mon==7||mon==8||mon==10||mon==12)
		{
			if(mon==1)
			{
				this.mo=12;	
				this.ye=yea-1;
			}
			this.da=31;
		}
	}
	else
	{
		this.da=day-1;	
	}
	return toString();
}
tomorrow():string{
	let day=this.da,mon=this.mo,yea=this.ye;
	toString();
	if(day+1==31){
		mon=this.mo;
		if(mon==4|| mon==6||mon==9||mon==11){
			this.mo=mon+1;
		}
	}
	else if (day+1>=2 && day+1<30) {
			this.da=day++;
		}
	if(day+1==32 ){
		mon=this.mo;
		if(mon==1||mon==3||mon==5||mon==7||mon==8||mon==10||mon==12){
			if(mon==12)
			{
				this.mo=1;
				this.ye=yea+1;
			}
			this.mo=mon++;
		}
	}
	return toString();	
}
addday(n:number):string{
	let day=this.da;
	this.da=day+n;
	return toString();
}
subday(n:number):string{
	let day=this.da;
	this.da=day+1;
	return toString();
}
adddmonth(n:number):string{
	let day=this.mo;
	this.mo=day+n;
	return toString();
}
submonth(n:number):string{
	let day=this.mo;
	this.mo=day-n;
	return toString();
}
addyear(n:number):string{
	let day=this.ye;
	this.ye=day+n;
	return toString();
}
subyear(n:number):string{
	let day=this.ye;
	this.ye=day-n;
	return toString();
}
}

}