using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiService.Models;

namespace WebApiService.Controllers
{
    public class BookingsController : ApiController
    {
        private Bootcamp2Entities db = new Bootcamp2Entities();

        // GET: api/Bookings
        public IQueryable<Booking> GetBookings()
        {
            return db.Bookings;
        }

        // GET: api/Bookings/5
        [ResponseType(typeof(Booking))]
        public IHttpActionResult GetBooking(int id)
        {
            Booking booking = db.Bookings.Find(id);
            if (booking == null)
            {
                return NotFound();
            }

            return Ok(booking);
        }

        // PUT: api/Bookings/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBooking(int id, Booking booking)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != booking.Booking_ID)
            {
                return BadRequest();
            }

            db.Entry(booking).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Bookings
        [ResponseType(typeof(Booking))]
        public IHttpActionResult PostBooking(Booking booking)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //booking.Fare = GetBookingDistance(booking.Pickup_Location,booking.Drop_Location,booking.Vehicle_Type);
            //if(booking.Fare==0)
            //{
            //    return BadRequest(ModelState);
            //}
            db.Bookings.Add(booking);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = booking.Booking_ID }, booking);
        }

        // DELETE: api/Bookings/5
        [ResponseType(typeof(Booking))]
        public IHttpActionResult DeleteBooking(int id)
        {
            Booking booking = db.Bookings.Find(id);
            if (booking == null)
            {
                return NotFound();
            }

            db.Bookings.Remove(booking);
            db.SaveChanges();

            return Ok(booking);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookingExists(int id)
        {
            return db.Bookings.Count(e => e.Booking_ID == id) > 0;
        }


        public IHttpActionResult GetBookingDistance(string location1, string location2, string vtype)

        {
            DistanceMaster distanceMaster = db.DistanceMasters.FirstOrDefault(dist => (dist.Location1 == location1 && dist.Location2 == location2) || (dist.Location1 == location2 && dist.Location2 == location1));
            if (distanceMaster != null)
            {
                int distance = Convert.ToInt32(distanceMaster.Distance);
                VehicleType vehicleType = db.VehicleTypes.FirstOrDefault(type => type.Type == vtype);
                if (vehicleType != null)
                {
                    int price = Convert.ToInt32(vehicleType.PriceKm);
                    int fare = price * distance;
                    //return (fare);
                    return Ok(fare);
                }

            }
            return NotFound();




        }
    }
}