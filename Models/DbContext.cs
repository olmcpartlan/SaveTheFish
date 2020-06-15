using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace savethefish.Models
{
  public class dbContext : DbContext
  {
    public dbContext(DbContextOptions<dbContext> options) : base(options) { }
    public DbSet<User> users { get; set; }
  }
}
