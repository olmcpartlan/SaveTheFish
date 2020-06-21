using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace savethefish.Models
{
  public class Hasher
  {
    public static string HashPassword(User user)
    {
      var salt = BCrypt.Net.BCrypt.GenerateSalt(4);
      return BCrypt.Net.BCrypt.HashPassword(user.Password, salt);
    }
  }
}
