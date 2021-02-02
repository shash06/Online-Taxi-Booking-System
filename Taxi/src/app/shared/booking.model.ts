import { Time } from '@angular/common'

export class Booking {
        Booking_ID:number
        Employee_ID:number
        Customer_ID:number
        Booking_Date:Date
        Booking_Time :Time
        Pickup_Location:string
        Drop_Location:string
        Fare :number
        Vehicle_Type:string
}
