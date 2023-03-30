import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/Auth/auth.guard';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { MatTableModule} from '@angular/material/table';
import { AddCourseComponent } from './add-course/add-course.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserpageComponent } from './userpage/userpage.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CourseComponent } from './course/course.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { ContactComponent } from './contact/contact.component';
import { OurBestComponent } from './our-best/our-best.component';
import { InterceptorService } from './services/Interceptor/interceptor.service';
import { CategoriesComponent } from './categories/categories.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ViewCategoryComponent } from './categories-list/view-category/view-category.component';
import { EnrollForACourseComponent } from './user/enroll-for-a-course/enroll-for-a-course.component';
import {CartComponent} from './user/cart/cart.component';
import { NoCoursesYetComponent } from './no-courses-yet/no-courses-yet.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component'
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProfileComponent } from './profile/profile.component';
import { PayementComponent } from './payement/payement.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { EmptyCartComponent } from './user/empty-cart/empty-cart.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { LoaderComponent } from './loader/loader.component';
import { ViewResourcesComponent } from './courses-details/view-resources/view-resources.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularUrlPreviewModule } from 'angular-url-preview';
import { EditCourseDetailsComponent } from './courses-details/edit-course-details/edit-course-details.component';
import { EditCoursePriceComponent } from './courses-details/edit-course-price/edit-course-price.component';
import { DeleteCourseComponent } from './courses-details/delete-course/delete-course.component';
import { EnrollCourseDetailsComponent } from './user/enroll-course-details/enroll-course-details.component';
import { MatBadgeModule } from '@angular/material/badge'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TransactionHistoryComponent,
    AddCourseComponent,
    UserCoursesComponent,
    NavbarComponent,
    UserpageComponent,
    FooterComponent,
    AboutComponent,
    CourseComponent,
    ContactComponent,
    NotfoundComponent,
    OurBestComponent,
    UserloginComponent,
    UsersignupComponent,
    CategoriesComponent,
    ViewCategoryComponent,
    EnrollForACourseComponent,
    CartComponent,
    NoCoursesYetComponent,
    EditCoursesComponent,
    SnackBarComponent,
    DialogBoxComponent,
    ProfileComponent,
    PayementComponent,
    AllTransactionsComponent,
    EmptyCartComponent,
    WithdrawComponent,
    LoaderComponent,
    ViewResourcesComponent,
    EditCourseDetailsComponent,
    EditCoursePriceComponent,
    DeleteCourseComponent,
    EnrollCourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatTooltipModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatStepperModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    Angular4PaystackModule,
    Angular4PaystackModule.forRoot('pk_test_4359d1050bbf6556880c95f583094b29e9991d7d'),
    MatExpansionModule,
    MatTabsModule,
    MatBadgeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true,

    },
    // {provide: MAT_SNACK_BAR_DATA, useValue: {}},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
