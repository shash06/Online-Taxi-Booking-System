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
    public class TaxisController : ApiController
    {
        private Bootcamp2Entities db = new Bootcamp2Entities();

        // GET: api/Taxis
        public IQueryable<Taxi> GetTaxis()
        {
            return db.Taxis;
        }

        // GET: api/Taxis/5
        [ResponseType(typeof(Taxi))]
        public IHttpActionResult GetTaxi(int id)
        {
            Taxi taxi = db.Taxis.Find(id);
            if (taxi == null)
            {
                return NotFound();
            }

            return Ok(taxi);
        }

        // PUT: api/Taxis/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTaxi(int id, Taxi taxi)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != taxi.Vehicle_ID)
            {
                return BadRequest();
            }

            db.Entry(taxi).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaxiExists(id))
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

        // POST: api/Taxis
        [ResponseType(typeof(Taxi))]
        public IHttpActionResult PostTaxi(Taxi taxi)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            db.Taxis.Add(taxi);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = taxi.Vehicle_ID }, taxi);
        }

        // DELETE: api/Taxis/5
        [ResponseType(typeof(Taxi))]
        public IHttpActionResult DeleteTaxi(int id)
        {
            Taxi taxi = db.Taxis.Find(id);
            if (taxi == null)
            {
                return NotFound();
            }

            db.Taxis.Remove(taxi);
            db.SaveChanges();

            return Ok(taxi);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TaxiExists(int id)
        {
            return db.Taxis.Count(e => e.Vehicle_ID == id) > 0;
        }
    }
}