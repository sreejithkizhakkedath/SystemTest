using Microsoft.EntityFrameworkCore;
using USTEmployeePortal.Models;

namespace USTEmployeePortal
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options)
            : base(options)
        {
        }

        public DbSet<Employee> Employee { get; set; }
    }
}
