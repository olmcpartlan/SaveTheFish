using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace savethefish.Models
{
  public class User
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string UserName { get; set; }
    public string ImageUrl { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
  }
  public class RegistrationResponse
  {
    public string responseMessage { get; set; }
    public int userId { get; set; }
  }

}
