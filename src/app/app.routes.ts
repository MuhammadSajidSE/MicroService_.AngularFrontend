import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductComponent } from './pages/product/product.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { OrderUserComponent } from './pages/order-user/order-user.component';
import { OrderNotificationComponent } from './pages/order-notification/order-notification.component';
import { OrderPaymentComponent } from './pages/order-payment/order-payment.component';
import { PaymentnotificationService } from './service/PaymentNotification/paymentnotification.service';
import { NotificationPaymentComponent } from './pages/notification-payment/notification-payment.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'order', component: OrderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'OrderUser', component: OrderUserComponent },
  { path: 'OrderNotification', component: OrderNotificationComponent },
  { path: 'Orderpayment', component: OrderPaymentComponent },
  { path: 'paymentNotification', component: NotificationPaymentComponent },
  { path: 'payment', component: PaymentComponent },

];
