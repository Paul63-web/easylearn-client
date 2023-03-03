import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public errorMessageStatus = false
  public errorMessage = ''

  public messageStatus = false;
  public message = ''

  public cart = []
  public cartLengthIsEmpty : boolean = false;
  public check = true;
  public courseDetails = []
  public total = 0
  public loading: boolean = false;


  constructor(
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.fetchCart();
  }

  fetchCart() {
    this._cartService.getItemsFromCart({}).subscribe((res)=> {
      if(res.status == false) {
        this.errorMessageStatus = true;
        alert(res.message)
        this.messageStatus = true;
        alert(res.message)
        this.loading = false;
      }else {
        console.log(res);
        if (res.cart.length !== 0) {
          this.cartLengthIsEmpty = false;
          this.cart = res.cart;          
          console.log("Cart is not empty")
        } else if(res.cart.length == 0) {
          // this.cartLength = true;
          this.cartLengthIsEmpty = true;
          console.log("Cart is empty");
        }
        
        console.log(this.cart.length)
        this.check = false;
        let newCart = this.cart.reduce(function(sum, current) {
          return sum + current.total_price;
        }, 0)
        this.total = newCart;
        this.loading = false;
      }
    },
    err=>(console.log(err))
    )
  }

  setTotal() {

  }
  setTotalItems() {
    let newCart = this.cart.reduce(function(sum, current) {
      return sum + current.quantity;
    }, 0)
    // this.cartLengthIsEmpty = newCart;
  }

 addRemove(_id) {
    this._cartService.deleteFromCart({_id}).subscribe((res: any) => {
      if(res.status == false) {
      console.log(res.message)

      }else {
        this.fetchCart();
        this.loading = false;
      }
    })
    this.cart.find((course,_id)=>(course._id ===_id));
  }

  addToCart(course: any) {
    this._cartService.addToCart(course).subscribe((res:any)=> {
      if(res.status == false) {
        this.errorMessageStatus = true;
        alert(res.message)

        this.messageStatus = true;
        alert(res.message)
     }else {
        // this.allCourses = res.allCourses
        // this._resourceService.getCourseResources()
      }
    },
    err=>(console.log(err))
    )
  }


}


