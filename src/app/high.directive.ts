import { Directive, ElementRef, ViewContainerRef } from "@angular/core";

@Directive({
standalone:true,
 selector:'p[hight]'   
})
export class HighDirective{

    constructor(private elementRef:ElementRef<HTMLElement>, private ViewContainerRef: ViewContainerRef){

        console.log(this.elementRef)
    }



}