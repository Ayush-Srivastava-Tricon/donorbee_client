import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blood-donation-info',
  templateUrl: './blood-donation-info.component.html',
  styleUrls: ['./blood-donation-info.component.scss']
})
export class BloodDonationInfoComponent {

  constructor() {
  }

  ngAfterViewInit(){
    const humans_parent:any = document.getElementById("humans");
    const BLOOD_TYPES :any= {
      "O−": ["O−", "O+", "A−", "A+", "B−", "B+", "AB−", "AB+"],
      "O+": ["O+", "A+", "B+", "AB+"],
      "A−": ["A−", "A+", "AB−", "AB+"],
      "A+": ["A+", "AB+"],
      "B−": ["B−", "B+", "AB−", "AB+"],
      "B+": ["B+", "AB+"],
      "AB−": ["AB−", "AB+"],
      "AB+": ["AB+"]
    };
    const reset_button:any = document.getElementById("reset");
    const selector:any = document.getElementById("blood_selector");
    const blood_vias:any = document.querySelectorAll("#humans .human .blood_via");
    const blood_bag:any = document.querySelector("#blood_content > div.main_bag > div");
    const center_via:any = document.querySelector(".center_via > .blood_via");
    const blood_types:any = document.querySelectorAll(".blood_type");
    let lastCalled:any;
    addListeners();
    let th:any = this;
    
    function callIfChildren(e:any) {
      if (lastCalled) change();
      if (e.target !== th) setRecipents(e);
    }
    
    function addListeners() {
      selector.addEventListener("click", callIfChildren);
      // reset.addEventListener("click", reset);
    }
    
    function reset() {
      change();
      blood_bag.style.height = "100px";
      center_via.style.height = "0px";
    }
    
    function change() {
      lastCalled.target.classList.remove("highlight");
    
      for (let i = 0; i < blood_vias.length; i++) {
        blood_vias[i].style.width = "0px";
        blood_types[i].classList.remove("highlightText");
      }
    }
    
    function timeout(ms:any) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    async function setRecipents(e:any) {
      e.target.classList.add("highlight");
      lastCalled = e;
    
      const donor = e.target.innerText;
      for (let item of BLOOD_TYPES[donor]) {
        const recipent_index = Object.keys(BLOOD_TYPES).indexOf(item);
        const height = 50 + 50 * Math.floor(recipent_index / 2);
        const blood_height = 125 - 25 * Math.floor(recipent_index / 2);
        blood_bag.style.height = `${blood_height}px`;
        center_via.style.height = `${height}px`;
    
        await timeout(100);
        blood_vias[recipent_index].style.width = "100%";
        blood_types[recipent_index].classList.add("highlightText");
      }
    }
  }

}
