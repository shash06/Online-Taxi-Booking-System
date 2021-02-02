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
    public class EmployeeRostersController : ApiController
    {
        private Bootcamp2Entities db = new Bootcamp2Entities();

        // GET: api/EmployeeRosters
        public IQueryable<EmployeeRoster> GetEmployeeRosters()
        {
            return db.EmployeeRosters;
        }

        // GET: api/EmployeeRosters/5
        [ResponseType(typeof(EmployeeRoster))]
        public IHttpActionResult GetEmployeeRoster(int id)
        {
            EmployeeRoster employeeRoster = db.EmployeeRosters.Find(id);
            if (employeeRoster == null)
            {
                return NotFound();
            }

            return Ok(employeeRoster);
        }

        // PUT: api/EmployeeRosters/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployeeRoster(int id, EmployeeRoster employeeRoster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employeeRoster.Roster_ID)
            {
                return BadRequest();
            }

            db.Entry(employeeRoster).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeRosterExists(id))
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

        // POST: api/EmployeeRosters
        [ResponseType(typeof(EmployeeRoster))]
        public IHttpActionResult PostEmployeeRoster(EmployeeRoster employeeRoster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EmployeeRosters.Add(employeeRoster);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employeeRoster.Roster_ID }, employeeRoster);
        }

        // DELETE: api/EmployeeRosters/5
        [ResponseType(typeof(EmployeeRoster))]
        public IHttpActionResult DeleteEmployeeRoster(int id)
        {
            EmployeeRoster employeeRoster = db.EmployeeRosters.Find(id);
            if (employeeRoster == null)
            {
                return NotFound();
            }

            db.EmployeeRosters.Remove(employeeRoster);
            db.SaveChanges();

            return Ok(employeeRoster);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeRosterExists(int id)
        {
            return db.EmployeeRosters.Count(e => e.Roster_ID == id) > 0;
        }
    }
}